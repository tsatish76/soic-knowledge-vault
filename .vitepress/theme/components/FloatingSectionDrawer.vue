<script setup>
import { ref, computed, onMounted, onUnmounted, watch, nextTick } from 'vue'
import { useRoute, inBrowser } from 'vitepress'

const route = useRoute()

const isOpen = ref(false)
const searchQuery = ref('')
const headers = ref([])
const activeId = ref('')

// Compute filtered headers based on search query
const filteredHeaders = computed(() => {
  if (!searchQuery.value.trim()) return headers.value
  const q = searchQuery.value.toLowerCase().trim()
  return headers.value.filter(h =>
    h.rawTitle.toLowerCase().includes(q) || (h.stage && h.stage.toLowerCase().includes(q))
  )
})

const activeHeaderTitle = computed(() => {
  const current = headers.value.find(h => h.id === activeId.value)
  if (!current) return ''
  return current.stage ? `${current.stage} ${current.title}` : current.title
})

function scanPageHeaders() {
  if (!inBrowser) return

  nextTick(() => {
    const doc = document.querySelector('.vp-doc')
    if (!doc) {
      headers.value = []
      return
    }

    const els = doc.querySelectorAll('h2, h3')
    const list = []

    els.forEach((el, index) => {
      // Ignore hidden elements or headers inside cards/callouts
      if (el.closest('.lecture-grid') || el.closest('.custom-block')) return

      const rawTitle = (el.innerText || el.textContent || '').trim().replace(/^#+\s*/, '')
      if (!rawTitle) return

      if (!el.id) {
        el.id = 'section-' + (index + 1)
      }

      const match = rawTitle.match(/^(\d+[\.:]?|[A-Z][\.:])\s*(.*)/)
      const stage = match ? match[1].replace(/[\.:]$/, '') : null
      const title = match && match[2] ? match[2].trim() : rawTitle

      list.push({
        id: el.id,
        level: el.tagName.toLowerCase(),
        stage,
        title,
        rawTitle
      })
    })

    headers.value = list
    updateActiveHeader()
  })
}

let isTicking = false
function onScrollThrottled() {
  if (!isTicking) {
    window.requestAnimationFrame(() => {
      updateActiveHeader()
      isTicking = false
    })
    isTicking = true
  }
}

function updateActiveHeader() {
  if (!inBrowser || headers.value.length === 0) return

  const scrollY = window.scrollY
  const headerOffset = 90
  let current = headers.value[0].id

  for (let i = 0; i < headers.value.length; i++) {
    const el = document.getElementById(headers.value[i].id)
    if (el) {
      const top = el.getBoundingClientRect().top + scrollY - headerOffset
      if (scrollY >= top - 25) {
        current = headers.value[i].id
      } else {
        break
      }
    }
  }

  activeId.value = current
}

function toggleDrawer() {
  isOpen.value = !isOpen.value
}

function closeDrawer() {
  isOpen.value = false
  searchQuery.value = ''
}

function scrollToSection(id) {
  if (!inBrowser) return
  const el = document.getElementById(id)
  if (el) {
    const navHeight = 72
    const targetY = el.getBoundingClientRect().top + window.scrollY - navHeight
    window.scrollTo({
      top: targetY,
      behavior: 'smooth'
    })
    window.history.pushState(null, '', '#' + id)
    activeId.value = id
  }
  closeDrawer()
}

function onKeydown(e) {
  if (e.key === 'Escape' && isOpen.value) {
    closeDrawer()
  }
}

watch(() => route.path, () => {
  closeDrawer()
  scanPageHeaders()
})

onMounted(() => {
  if (inBrowser) {
    scanPageHeaders()
    window.addEventListener('scroll', onScrollThrottled, { passive: true })
    window.addEventListener('keydown', onKeydown)
  }
})

onUnmounted(() => {
  if (inBrowser) {
    window.removeEventListener('scroll', onScrollThrottled)
    window.removeEventListener('keydown', onKeydown)
  }
})
</script>

<template>
  <div v-if="headers.length >= 2" class="soic-floating-toc-wrapper">
    <!-- Sticky Floating Pill Trigger (Option B1) -->
    <button
      class="soic-floating-pill"
      :class="{ 'is-open': isOpen }"
      @click="toggleDrawer"
      title="Open Table of Contents (On this page)"
      aria-label="Open Table of Contents"
    >
      <span class="pill-icon">📑</span>
      <span class="pill-label">On this page</span>
      <span v-if="activeHeaderTitle" class="pill-active-preview">{{ activeHeaderTitle }}</span>
      <span class="pill-arrow">{{ isOpen ? '▲' : '▼' }}</span>
    </button>

    <!-- Slide-Out Section Drawer Modal (Teleported to Body) -->
    <Teleport to="body">
      <!-- Backdrop with Fade Transition -->
      <Transition name="soic-fade">
        <div
          v-if="isOpen"
          class="soic-drawer-backdrop"
          @click="closeDrawer"
        ></div>
      </Transition>

      <!-- Drawer Panel with Slide Transition -->
      <Transition name="soic-drawer">
        <aside
          v-if="isOpen"
          class="soic-section-drawer"
          aria-label="Document Sections Navigation"
        >
          <!-- Drawer Header -->
          <div class="drawer-header">
            <div class="drawer-title-group">
              <span class="drawer-icon">📑</span>
              <div class="drawer-title">On This Page</div>
              <span class="drawer-count-badge">{{ headers.length }} Sections</span>
            </div>
            <button
              class="drawer-close-btn"
              @click="closeDrawer"
              title="Close (Esc)"
              aria-label="Close Drawer"
            >✕</button>
          </div>

          <!-- Real-Time Search Filter -->
          <div class="drawer-search-box">
            <span class="search-icon">🔍</span>
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Filter sections..."
              class="drawer-search-input"
            />
            <button v-if="searchQuery" class="clear-btn" @click="searchQuery = ''">✕</button>
          </div>

          <!-- Sections List -->
          <nav class="drawer-nav">
            <div v-if="filteredHeaders.length === 0" class="drawer-empty">
              No sections match "{{ searchQuery }}"
            </div>

            <button
              v-for="h in filteredHeaders"
              :key="h.id"
              class="drawer-nav-item"
              :class="[h.level, { 'is-active': h.id === activeId }]"
              @click="scrollToSection(h.id)"
            >
              <span v-if="h.stage" class="stage-tag">{{ h.stage }}</span>
              <span class="item-text">{{ h.title }}</span>
              <span v-if="h.id === activeId" class="active-dot"></span>
            </button>
          </nav>

          <!-- Drawer Footer Shortcut Hint -->
          <div class="drawer-footer">
            <span>Click to jump • Press <kbd>Esc</kbd> to close</span>
          </div>
        </aside>
      </Transition>
    </Teleport>
  </div>
</template>

<style scoped>
.soic-floating-toc-wrapper {
  position: relative;
  z-index: 25;
}

/* Floating Pill Button */
.soic-floating-pill {
  position: fixed;
  top: calc(var(--vp-nav-height, 64px) + 12px);
  right: 24px;
  z-index: 40;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(15, 23, 42, 0.88);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: var(--vp-c-text-1, #f8fafc);
  border: 1px solid rgba(16, 185, 129, 0.35);
  border-radius: 9999px;
  padding: 6px 14px;
  font-size: 0.82rem;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.25), 0 0 10px rgba(16, 185, 129, 0.1);
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

:root:not(.dark) .soic-floating-pill {
  background: rgba(255, 255, 255, 0.92);
  color: #0f172a;
  border-color: rgba(16, 185, 129, 0.4);
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.08), 0 0 10px rgba(16, 185, 129, 0.12);
}

.soic-floating-pill:hover,
.soic-floating-pill.is-open {
  border-color: var(--vp-c-brand-1, #10b981);
  transform: translateY(-1px);
  box-shadow: 0 6px 20px rgba(16, 185, 129, 0.25);
}

.pill-icon {
  font-size: 0.95rem;
}

.pill-label {
  font-weight: 700;
  color: var(--vp-c-brand-1, #10b981);
}

.pill-active-preview {
  max-width: 140px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 0.75rem;
  color: var(--vp-c-text-2, #94a3b8);
  border-left: 1px solid var(--vp-c-divider, #334155);
  padding-left: 8px;
}

.pill-arrow {
  font-size: 0.72rem;
  color: var(--vp-c-text-3, #64748b);
}

/* Backdrop */
.soic-drawer-backdrop {
  position: fixed;
  inset: 0;
  z-index: 9998;
  background: rgba(0, 0, 0, 0.45);
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
}

/* Slide-out Drawer Panel */
.soic-section-drawer {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 380px;
  max-width: 88vw;
  z-index: 9999;
  background: var(--vp-c-bg, #090d16);
  border-left: 1px solid var(--vp-c-divider, #1e293b);
  box-shadow: -8px 0 32px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
}

:root:not(.dark) .soic-section-drawer {
  background: #ffffff;
  border-left-color: #e2e8f0;
  box-shadow: -8px 0 32px rgba(0, 0, 0, 0.12);
}

/* Transitions */
.soic-drawer-enter-active,
.soic-drawer-leave-active {
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.2s ease;
}

.soic-drawer-enter-from,
.soic-drawer-leave-to {
  transform: translateX(100%);
  opacity: 0.8;
}

.soic-fade-enter-active,
.soic-fade-leave-active {
  transition: opacity 0.2s ease;
}

.soic-fade-enter-from,
.soic-fade-leave-to {
  opacity: 0;
}

/* Drawer Header */
.drawer-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  border-bottom: 1px solid var(--vp-c-divider, #1e293b);
}

:root:not(.dark) .drawer-header {
  border-bottom-color: #e2e8f0;
}

.drawer-title-group {
  display: flex;
  align-items: center;
  gap: 8px;
}

.drawer-icon {
  font-size: 1.15rem;
}

.drawer-title {
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--vp-c-text-1, #f8fafc);
}

:root:not(.dark) .drawer-title {
  color: #0f172a;
}

.drawer-count-badge {
  font-size: 0.7rem;
  font-weight: 600;
  background: rgba(16, 185, 129, 0.15);
  color: #10b981;
  padding: 2px 7px;
  border-radius: 9999px;
  border: 1px solid rgba(16, 185, 129, 0.3);
}

.drawer-close-btn {
  background: transparent;
  border: none;
  font-size: 1rem;
  color: var(--vp-c-text-3, #64748b);
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 6px;
  transition: all 0.15s ease;
}

.drawer-close-btn:hover {
  background: var(--vp-c-bg-soft, #1e293b);
  color: var(--vp-c-text-1, #f8fafc);
}

/* Search Box */
.drawer-search-box {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 12px 18px 8px 18px;
  padding: 6px 12px;
  background: var(--vp-c-bg-alt, #0f172a);
  border: 1px solid var(--vp-c-border, #1e293b);
  border-radius: 8px;
}

:root:not(.dark) .drawer-search-box {
  background: #f8fafc;
  border-color: #cbd5e1;
}

.search-icon {
  font-size: 0.85rem;
  opacity: 0.6;
}

.drawer-search-input {
  background: transparent;
  border: none;
  outline: none;
  color: var(--vp-c-text-1, #f8fafc);
  font-size: 0.82rem;
  width: 100%;
}

:root:not(.dark) .drawer-search-input {
  color: #0f172a;
}

.clear-btn {
  background: transparent;
  border: none;
  color: var(--vp-c-text-3, #64748b);
  cursor: pointer;
  font-size: 0.75rem;
}

/* Navigation List */
.drawer-nav {
  flex: 1;
  overflow-y: auto;
  padding: 10px 14px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.drawer-empty {
  padding: 24px 16px;
  text-align: center;
  font-size: 0.85rem;
  color: var(--vp-c-text-3, #64748b);
}

.drawer-nav-item {
  display: flex;
  align-items: center;
  gap: 10px;
  text-align: left;
  background: transparent;
  border: 1px solid transparent;
  border-radius: 8px;
  padding: 8px 12px;
  color: var(--vp-c-text-2, #94a3b8);
  font-size: 0.84rem;
  line-height: 1.4;
  cursor: pointer;
  transition: all 0.15s ease;
  position: relative;
}

:root:not(.dark) .drawer-nav-item {
  color: #475569;
}

.drawer-nav-item:hover {
  background: var(--vp-c-bg-soft, #0f172a);
  color: var(--vp-c-text-1, #f8fafc);
  border-color: var(--vp-c-border, #1e293b);
}

:root:not(.dark) .drawer-nav-item:hover {
  background: #f1f5f9;
  color: #0f172a;
  border-color: #cbd5e1;
}

.drawer-nav-item.h3 {
  padding-left: 28px;
  font-size: 0.8rem;
  opacity: 0.9;
}

.stage-tag {
  font-family: monospace;
  font-size: 0.72rem;
  font-weight: 700;
  background: rgba(16, 185, 129, 0.12);
  color: var(--vp-c-brand-1, #10b981);
  border: 1px solid rgba(16, 185, 129, 0.25);
  padding: 1px 6px;
  border-radius: 4px;
  flex-shrink: 0;
}

.item-text {
  flex: 1;
  word-break: break-word;
}

.drawer-nav-item.is-active {
  background: rgba(16, 185, 129, 0.14) !important;
  color: var(--vp-c-brand-1, #10b981) !important;
  border-color: rgba(16, 185, 129, 0.35) !important;
  font-weight: 600;
}

.active-dot {
  width: 6px;
  height: 6px;
  border-radius: 9999px;
  background: var(--vp-c-brand-1, #10b981);
  box-shadow: 0 0 6px rgba(16, 185, 129, 0.8);
  flex-shrink: 0;
}

/* Drawer Footer */
.drawer-footer {
  padding: 10px 18px;
  border-top: 1px solid var(--vp-c-divider, #1e293b);
  font-size: 0.72rem;
  color: var(--vp-c-text-3, #64748b);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

:root:not(.dark) .drawer-footer {
  border-top-color: #e2e8f0;
}

.drawer-footer kbd {
  background: var(--vp-c-bg-alt, #0f172a);
  border: 1px solid var(--vp-c-border, #334155);
  padding: 1px 4px;
  border-radius: 4px;
  font-family: monospace;
}

@media (max-width: 640px) {
  .soic-floating-pill {
    right: 12px;
    padding: 5px 10px;
    font-size: 0.76rem;
  }
  .pill-active-preview {
    display: none;
  }
}
</style>
