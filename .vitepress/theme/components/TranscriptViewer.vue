<template>
  <div class="transcript-container">
    <!-- Header Controls & Lecture Info -->
    <div class="transcript-header">
      <div class="header-left">
        <a :href="backToReportUrl" class="back-link">
          ← Back to Lecture Report
        </a>
        <h1 class="transcript-title">{{ displayTitle }}</h1>
        <div class="meta-badges">
          <span class="badge duration-badge" v-if="displayDuration">⏱️ {{ displayDuration }}</span>
          <span class="badge cues-badge">📝 {{ displayTotalCues }} Paragraphs</span>
          <span class="badge id-badge">{{ lectureId }}</span>
        </div>
      </div>

      <!-- Quick Search Bar -->
      <div class="header-right">
        <div class="search-box">
          <span class="search-icon">🔍</span>
          <input 
            type="text" 
            v-model="searchQuery" 
            placeholder="Search keywords in lecture..." 
            class="search-input"
          />
          <button v-if="searchQuery" @click="searchQuery = ''" class="clear-search">✕</button>
        </div>
        <div v-if="searchQuery" class="search-results-count">
          Found in {{ filteredCues.length }} paragraphs
        </div>
      </div>
    </div>

    <!-- Loading State -->
    <div v-if="loading" class="loading-state">
      <div class="spinner"></div>
      <p>Loading lecture transcript...</p>
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="error-state">
      <p>⚠️ {{ error }}</p>
    </div>

    <!-- Transcript Feed -->
    <div v-else class="transcript-feed" ref="feedRef">
      <!-- Floating Resume Auto-Scroll Button -->
      <transition name="fade">
        <button 
          v-if="isPlaying && userScrolledAway" 
          @click="resumeAutoScroll" 
          class="resume-scroll-pill"
        >
          📍 Resume Following Voice
        </button>
      </transition>

      <div 
        v-for="(cue, idx) in filteredCues" 
        :key="cue.id" 
        :id="cue.id"
        class="cue-card"
        :class="{
          'cue-active': activeCueIndex === getOriginalIndex(cue),
          'cue-target': targetCueId === cue.id
        }"
        @click="handleCueClick(cue)"
      >
        <div class="cue-left">
          <button 
            class="play-cue-btn"
            :title="activeCueIndex === getOriginalIndex(cue) && isPlaying ? 'Pause' : 'Listen from this paragraph'"
          >
            <span v-if="activeCueIndex === getOriginalIndex(cue) && isPlaying" class="sound-wave">🔊</span>
            <span v-else class="play-icon">▶</span>
          </button>
          <span class="cue-timestamp">{{ cue.timestamp }}</span>
        </div>

        <div class="cue-content">
          <p class="cue-text" v-html="highlightSearchMatch(cue.text)"></p>
        </div>

        <div class="cue-actions">
          <button 
            @click.stop="copyCitation(cue)" 
            class="action-btn copy-btn"
            title="Copy quote with timestamp citation"
          >
            <span v-if="copiedCueId === cue.id">✓ Copied</span>
            <span v-else>📋 Cite</span>
          </button>
          <a 
            :href="getCueShareUrl(cue)" 
            @click.stop 
            class="action-btn share-btn"
            title="Copy deep link to this timestamp"
          >
            🔗 Link
          </a>
        </div>
      </div>
    </div>

    <!-- Sticky Floating Audio Player Bar -->
    <div class="player-toolbar">
      <div class="player-left">
        <button @click="togglePlay" class="main-play-btn" :class="{ 'is-playing': isPlaying }">
          <span v-if="isPlaying">⏸️ Pause</span>
          <span v-else>▶️ Read Aloud</span>
        </button>

        <button @click="jumpPreviousCue" class="nav-btn" title="Previous Paragraph (←)">⏮️</button>
        <button @click="jumpNextCue" class="nav-btn" title="Next Paragraph (→)">⏭️</button>

        <div class="current-timestamp-badge">
          {{ currentTimestampDisplay }}
        </div>
      </div>

      <div class="player-center">
        <!-- Voice Selector -->
        <div class="control-group">
          <label class="control-label">Voice:</label>
          <select v-model="selectedVoiceName" class="voice-select">
            <option v-for="voice in availableVoices" :key="voice.name" :value="voice.name">
              {{ voice.label }}
            </option>
          </select>
        </div>

        <!-- Playback Speed -->
        <div class="control-group">
          <label class="control-label">Speed:</label>
          <div class="speed-buttons">
            <button 
              v-for="rate in [1.0, 1.25, 1.5, 1.75, 2.0]" 
              :key="rate" 
              @click="setRate(rate)"
              class="speed-btn"
              :class="{ 'active-speed': playbackRate === rate }"
            >
              {{ rate }}x
            </button>
          </div>
        </div>
      </div>

      <div class="player-right">
        <!-- Auto-scroll toggle -->
        <label class="toggle-container" title="Automatically keep spoken text on screen">
          <input type="checkbox" v-model="autoScroll" />
          <span class="toggle-label">Auto-scroll</span>
        </label>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'

const props = defineProps({
  course: { type: String, required: true },
  lectureId: { type: String, required: true },
  title: { type: String, default: '' },
  duration: { type: String, default: '' },
  totalCues: { type: Number, default: 0 }
})

const metaTitle = ref('')
const metaDuration = ref('')
const metaTotalCues = ref(0)

const displayTitle = computed(() => props.title || metaTitle.value || props.lectureId)
const displayDuration = computed(() => props.duration || metaDuration.value || '')
const displayTotalCues = computed(() => props.totalCues || metaTotalCues.value || cues.value.length)

const cues = ref([])
const loading = ref(true)
const error = ref(null)
const searchQuery = ref('')
const activeCueIndex = ref(0)
const isPlaying = ref(false)
const playbackRate = ref(1.25)
const selectedVoiceName = ref('')
const availableVoices = ref([])
const autoScroll = ref(true)
const userScrolledAway = ref(false)
const targetCueId = ref(null)
const copiedCueId = ref(null)

const feedRef = ref(null)
let utterance = null

const backToReportUrl = computed(() => {
  return `/courses/${props.course}/${props.lectureId}_Report`
})

const filteredCues = computed(() => {
  if (!searchQuery.value.trim()) return cues.value
  const query = searchQuery.value.toLowerCase()
  return cues.value.filter(c => c.text.toLowerCase().includes(query))
})

const currentTimestampDisplay = computed(() => {
  if (!cues.value.length || activeCueIndex.value < 0) return '0:00:00'
  const c = cues.value[activeCueIndex.value]
  return c ? `${c.timestamp} / ${displayDuration.value}` : '0:00:00'
})

function getOriginalIndex(cue) {
  return cues.value.findIndex(c => c.id === cue.id)
}

function highlightSearchMatch(text) {
  if (!searchQuery.value.trim()) return text
  const query = searchQuery.value.trim()
  const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi')
  return text.replace(regex, '<mark class="search-highlight">$1</mark>')
}

// ==========================================
// Deep-Link & URL Navigation
// ==========================================
function parseTimeToSeconds(timeStr) {
  if (!timeStr) return null
  if (/^\d+$/.test(timeStr)) return parseInt(timeStr, 10)
  const parts = timeStr.replace(/[\[\]]/g, '').split(':').map(Number)
  if (parts.length === 3) return parts[0] * 3600 + parts[1] * 60 + parts[2]
  if (parts.length === 2) return parts[0] * 60 + parts[1]
  return null
}

function checkUrlTimestamp() {
  if (typeof window === 'undefined') return
  const params = new URLSearchParams(window.location.search)
  const t = params.get('t') || window.location.hash.replace('#t=', '')
  const targetSeconds = parseTimeToSeconds(t)

  if (targetSeconds !== null && cues.value.length > 0) {
    let closestIdx = 0
    let minDiff = Infinity
    for (let i = 0; i < cues.value.length; i++) {
      const diff = Math.abs(cues.value[i].seconds - targetSeconds)
      if (cues.value[i].seconds <= targetSeconds && diff < minDiff) {
        minDiff = diff
        closestIdx = i
      }
    }

    activeCueIndex.value = closestIdx
    const cue = cues.value[closestIdx]
    if (cue) {
      targetCueId.value = cue.id
      setTimeout(() => {
        const el = document.getElementById(cue.id)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }
      }, 200)

      setTimeout(() => {
        targetCueId.value = null
      }, 3500)
    }
  }
}

// ==========================================
// Speech Synthesis (TTS) Engine
// ==========================================
function loadVoices() {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return
  const voices = window.speechSynthesis.getVoices()
  if (!voices || !voices.length) return

  // Filter and label voices
  const list = []
  let defaultSelect = ''

  voices.forEach(v => {
    let label = `${v.name} (${v.lang})`
    let priority = 10

    if (v.lang === 'en-IN') {
      priority = 1
      label = `🇮🇳 ${v.name} [Indian English]`
    } else if (v.lang === 'hi-IN') {
      priority = 2
      label = `🇮🇳 ${v.name} [Hindi]`
    } else if (v.lang.startsWith('en')) {
      priority = 5
      label = `🌐 ${v.name}`
    }

    list.push({ voice: v, name: v.name, label, priority })
  })

  list.sort((a, b) => a.priority - b.priority)
  availableVoices.value = list

  if (list.length > 0) {
    selectedVoiceName.value = list[0].name
  }
}

function speakCue(index) {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return
  if (!isPlaying.value) return
  if (index >= cues.value.length) {
    isPlaying.value = false
    return
  }

  activeCueIndex.value = index
  const cue = cues.value[index]

  if (autoScroll.value && !userScrolledAway.value) {
    const el = document.getElementById(cue.id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  window.speechSynthesis.cancel()

  utterance = new SpeechSynthesisUtterance(cue.text)
  utterance.rate = playbackRate.value

  const matched = availableVoices.value.find(v => v.name === selectedVoiceName.value)
  if (matched && matched.voice) {
    utterance.voice = matched.voice
  }

  utterance.onend = () => {
    if (isPlaying.value) {
      speakCue(index + 1)
    }
  }

  utterance.onerror = (e) => {
    if (e.error !== 'canceled' && e.error !== 'interrupted') {
      console.warn('SpeechSynthesis error:', e)
      isPlaying.value = false
    }
  }

  window.speechSynthesis.speak(utterance)
}

function togglePlay() {
  if (isPlaying.value) {
    pauseSpeech()
  } else {
    isPlaying.value = true
    speakCue(activeCueIndex.value || 0)
  }
}

function pauseSpeech() {
  isPlaying.value = false
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    window.speechSynthesis.cancel()
  }
}

function handleCueClick(cue) {
  const originalIdx = getOriginalIndex(cue)
  activeCueIndex.value = originalIdx
  userScrolledAway.value = false
  isPlaying.value = true
  speakCue(originalIdx)
}

function setRate(rate) {
  playbackRate.value = rate
  if (isPlaying.value) {
    speakCue(activeCueIndex.value)
  }
}

function jumpNextCue() {
  if (activeCueIndex.value < cues.value.length - 1) {
    activeCueIndex.value++
    if (isPlaying.value) speakCue(activeCueIndex.value)
    else scrollToActiveCue()
  }
}

function jumpPreviousCue() {
  if (activeCueIndex.value > 0) {
    activeCueIndex.value--
    if (isPlaying.value) speakCue(activeCueIndex.value)
    else scrollToActiveCue()
  }
}

function scrollToActiveCue() {
  const cue = cues.value[activeCueIndex.value]
  if (cue) {
    const el = document.getElementById(cue.id)
    el?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }
}

function resumeAutoScroll() {
  userScrolledAway.value = false
  scrollToActiveCue()
}

// User scroll detection
function handleUserScroll() {
  if (!isPlaying.value) return
  // If user scrolled manually, indicate so auto-scroll doesn't jerk screen
  userScrolledAway.value = true
}

// Citation & Deep Links
function copyCitation(cue) {
  const quote = `> "${cue.text}"\n— SOIC ${props.lectureId} [${cue.timestamp}]`
  if (typeof navigator !== 'undefined' && navigator.clipboard) {
    navigator.clipboard.writeText(quote)
    copiedCueId.value = cue.id
    setTimeout(() => {
      copiedCueId.value = null
    }, 2000)
  }
}

function getCueShareUrl(cue) {
  if (typeof window === 'undefined') return '#'
  return `${window.location.origin}/transcripts/${props.course}/${props.lectureId}?t=${cue.seconds}`
}

// Keyboard shortcuts
function handleKeydown(e) {
  if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return
  if (e.code === 'Space') {
    e.preventDefault()
    togglePlay()
  } else if (e.code === 'ArrowRight') {
    e.preventDefault()
    jumpNextCue()
  } else if (e.code === 'ArrowLeft') {
    e.preventDefault()
    jumpPreviousCue()
  }
}

// ==========================================
// Lifecycle
// ==========================================
onMounted(async () => {
  try {
    const res = await fetch(`/data/transcripts/${props.course}/${props.lectureId}.json`)
    if (!res.ok) throw new Error(`Could not load transcript (${res.status})`)
    const data = await res.json()
    cues.value = data.cues || []
    metaTitle.value = data.lectureTitle || ''
    metaDuration.value = data.totalDurationFormatted || ''
    metaTotalCues.value = data.totalCues || cues.value.length
    loading.value = false

    // Initialize speech synthesis voices
    loadVoices()
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.onvoiceschanged = loadVoices
      window.addEventListener('keydown', handleKeydown)
      window.addEventListener('scroll', handleUserScroll, { passive: true })
    }

    // Check for incoming timestamp query parameter
    checkUrlTimestamp()
  } catch (err) {
    error.value = err.message
    loading.value = false
  }
})

onUnmounted(() => {
  pauseSpeech()
  if (typeof window !== 'undefined') {
    window.removeEventListener('keydown', handleKeydown)
    window.removeEventListener('scroll', handleUserScroll)
  }
})
</script>

<style scoped>
.transcript-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 1.5rem 1rem 8rem 1rem;
  font-family: var(--vp-font-family-base);
}

.transcript-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1.5rem;
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid var(--vp-c-divider);
}

.back-link {
  display: inline-block;
  font-size: 0.85rem;
  color: var(--vp-c-brand-1);
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-weight: 500;
}
.back-link:hover {
  text-decoration: underline;
}

.transcript-title {
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
  margin: 0.2rem 0 0.6rem 0;
  line-height: 1.3;
}

.meta-badges {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.badge {
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.2rem 0.6rem;
  border-radius: 9999px;
  background: var(--vp-c-bg-mute);
  color: var(--vp-c-text-2);
  border: 1px solid var(--vp-c-divider);
}

.id-badge {
  color: #10b981;
  background: rgba(16, 185, 129, 0.1);
  border-color: rgba(16, 185, 129, 0.2);
}

.search-box {
  position: relative;
  display: flex;
  align-items: center;
}

.search-icon {
  position: absolute;
  left: 0.75rem;
  font-size: 0.85rem;
  opacity: 0.6;
}

.search-input {
  width: 260px;
  padding: 0.45rem 2rem 0.45rem 2.2rem;
  font-size: 0.85rem;
  background: var(--vp-c-bg-alt);
  color: var(--vp-c-text-1);
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  outline: none;
  transition: border-color 0.2s;
}

.search-input:focus {
  border-color: var(--vp-c-brand-1);
}

.clear-search {
  position: absolute;
  right: 0.6rem;
  background: transparent;
  border: none;
  color: var(--vp-c-text-3);
  cursor: pointer;
}

.search-results-count {
  font-size: 0.75rem;
  color: #f59e0b;
  margin-top: 0.25rem;
  text-align: right;
}

/* Feed */
.transcript-feed {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.cue-card {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem 1.25rem;
  border-radius: 10px;
  background: var(--vp-c-bg-alt);
  border: 1px solid var(--vp-c-divider);
  transition: all 0.2s ease;
  cursor: pointer;
}

.cue-card:hover {
  background: var(--vp-c-bg-mute);
  border-color: var(--vp-c-brand-soft);
}

.cue-active {
  background: rgba(245, 158, 11, 0.08) !important;
  border-left: 4px solid #f59e0b !important;
  border-color: rgba(245, 158, 11, 0.3);
  box-shadow: 0 4px 12px rgba(245, 158, 11, 0.06);
}

.cue-target {
  animation: targetPulse 1.2s ease-in-out infinite;
  border-color: #10b981 !important;
}

@keyframes targetPulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.4); }
  50% { box-shadow: 0 0 0 6px rgba(16, 185, 129, 0); }
}

.cue-left {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.35rem;
  min-width: 65px;
}

.play-cue-btn {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 0.75rem;
  transition: transform 0.15s, background 0.15s;
}

.play-cue-btn:hover {
  background: var(--vp-c-brand-1);
  color: #fff;
  transform: scale(1.08);
}

.cue-timestamp {
  font-size: 0.72rem;
  font-family: var(--vp-font-family-mono);
  color: var(--vp-c-text-3);
  font-weight: 600;
}

.cue-content {
  flex: 1;
}

.cue-text {
  font-size: 0.95rem;
  line-height: 1.65;
  color: var(--vp-c-text-1);
  margin: 0;
}

.cue-actions {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  opacity: 0.4;
  transition: opacity 0.2s;
}

.cue-card:hover .cue-actions {
  opacity: 1;
}

.action-btn {
  font-size: 0.7rem;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  color: var(--vp-c-text-2);
  text-decoration: none;
  cursor: pointer;
  white-space: nowrap;
}

.action-btn:hover {
  background: var(--vp-c-bg-mute);
  color: var(--vp-c-brand-1);
}

.resume-scroll-pill {
  position: fixed;
  bottom: 5.5rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 40;
  padding: 0.5rem 1rem;
  background: #f59e0b;
  color: #111;
  font-weight: 600;
  font-size: 0.85rem;
  border-radius: 9999px;
  border: none;
  box-shadow: 0 4px 15px rgba(245, 158, 11, 0.4);
  cursor: pointer;
  transition: transform 0.15s;
}

.resume-scroll-pill:hover {
  transform: translateX(-50%) scale(1.05);
}

/* Floating Player Toolbar */
.player-toolbar {
  position: fixed;
  bottom: 1.25rem;
  left: 50%;
  transform: translateX(-50%);
  width: calc(100% - 2rem);
  max-width: 860px;
  background: rgba(15, 23, 42, 0.92);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 16px;
  padding: 0.75rem 1.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.5);
  z-index: 50;
  color: #f8fafc;
}

.player-left, .player-center, .player-right {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.main-play-btn {
  padding: 0.45rem 1.1rem;
  border-radius: 9999px;
  background: #10b981;
  color: #fff;
  font-weight: 600;
  font-size: 0.85rem;
  border: none;
  cursor: pointer;
  transition: background 0.15s;
}

.main-play-btn.is-playing {
  background: #f59e0b;
  color: #111;
}

.nav-btn {
  background: rgba(255, 255, 255, 0.1);
  border: none;
  padding: 0.35rem 0.5rem;
  border-radius: 6px;
  cursor: pointer;
}

.nav-btn:hover {
  background: rgba(255, 255, 255, 0.2);
}

.current-timestamp-badge {
  font-family: var(--vp-font-family-mono);
  font-size: 0.8rem;
  color: #94a3b8;
  white-space: nowrap;
}

.control-group {
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.control-label {
  font-size: 0.75rem;
  color: #94a3b8;
}

.voice-select {
  max-width: 150px;
  background: rgba(30, 41, 59, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: #f8fafc;
  font-size: 0.75rem;
  padding: 0.25rem 0.4rem;
  border-radius: 6px;
  outline: none;
}

.speed-buttons {
  display: flex;
  gap: 0.2rem;
}

.speed-btn {
  padding: 0.2rem 0.4rem;
  font-size: 0.7rem;
  font-weight: 600;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #94a3b8;
  border-radius: 4px;
  cursor: pointer;
}

.speed-btn.active-speed {
  background: #3b82f6;
  color: #fff;
  border-color: #3b82f6;
}

.toggle-container {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  cursor: pointer;
}

.toggle-label {
  font-size: 0.75rem;
  color: #94a3b8;
}

.search-highlight {
  background: rgba(245, 158, 11, 0.35);
  color: inherit;
  border-radius: 2px;
  padding: 0 0.15rem;
}

@media (max-width: 768px) {
  .player-toolbar {
    flex-direction: column;
    gap: 0.5rem;
    padding: 0.75rem;
  }
  .player-center {
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>
