<script setup>
import { ref, computed, onMounted, onUnmounted, watch, nextTick } from 'vue'
import { useRoute, inBrowser } from 'vitepress'
import { useSidebar } from 'vitepress/theme'

const route = useRoute()
const { sidebarGroups } = useSidebar()

const isCollapsed = ref(false)
const sidebarWidth = ref(330)
const isDragging = ref(false)

// Tooltip state for Mini-Rail
const hoveredItem = ref(null)
const tooltipStyle = ref({ top: '0px', left: '0px' })

// Extract items for the mini-rail from the active sidebar group
const miniRailItems = computed(() => {
  if (!sidebarGroups.value || sidebarGroups.value.length === 0) return []

  const group = sidebarGroups.value[0]
  if (!group || !group.items) return []

  const list = []

  group.items.forEach(item => {
    // Check if it's Overview (D3)
    if (/overview|\(D3\)/i.test(item.text)) {
      list.push({
        type: 'overview',
        badge: 'D3',
        subLabel: 'OVR',
        icon: '🗺️',
        fullTitle: item.text.replace(/^[🗺️\s]+/, ''),
        link: item.link,
        isActive: isLinkActive(item.link)
      })
    }
    // Check if it's Summary Reference Cards (D2)
    else if (/summary|\(D2\)/i.test(item.text)) {
      list.push({
        type: 'summary',
        badge: 'D2',
        subLabel: 'REF',
        icon: '⚡',
        fullTitle: item.text.replace(/^[⚡\s]+/, ''),
        link: item.link,
        isActive: isLinkActive(item.link)
      })
    }
    // Check if it's Detailed Lecture Reports (D1)
    else if (item.items && item.items.length > 0) {
      item.items.forEach((child, index) => {
        const lecMatch = child.text.match(/Lec\s*(\d+)/i)
        const lecNum = lecMatch ? lecMatch[1].padStart(2, '0') : (index + 1).toString().padStart(2, '0')
        list.push({
          type: 'lecture',
          badge: lecNum,
          subLabel: null,
          icon: null,
          fullTitle: child.text,
          link: child.link,
          isActive: isLinkActive(child.link)
        })
      })
    } else if (item.link) {
      // Fallback for standalone links (e.g. Verification Queue, Transcripts)
      list.push({
        type: 'standalone',
        badge: item.text.slice(0, 2).toUpperCase(),
        subLabel: null,
        icon: '📌',
        fullTitle: item.text,
        link: item.link,
        isActive: isLinkActive(item.link)
      })
    }
  })

  return list
})

function isLinkActive(link) {
  if (!link || !inBrowser) return false
  const cur = route.path.replace(/\.html$/, '').replace(/\/$/, '')
  const tgt = link.replace(/\.html$/, '').replace(/\/$/, '')
  return cur === tgt
}

function toggleCollapse() {
  isCollapsed.value = !isCollapsed.value
  applySidebarState()
}

function applySidebarState() {
  if (!inBrowser) return

  const siblingGroups = document.querySelectorAll('#VPSidebarNav > .group, .VPSidebar .nav > .group')

  if (isCollapsed.value) {
    document.documentElement.classList.add('sidebar-collapsed')
    document.documentElement.style.setProperty('--vp-sidebar-width', '58px')
    localStorage.setItem('soic-sidebar-collapsed', 'true')
    siblingGroups.forEach(g => {
      g.style.setProperty('display', 'none', 'important')
    })
  } else {
    document.documentElement.classList.remove('sidebar-collapsed')
    document.documentElement.style.setProperty('--vp-sidebar-width', `${sidebarWidth.value}px`)
    localStorage.setItem('soic-sidebar-collapsed', 'false')
    siblingGroups.forEach(g => {
      g.style.removeProperty('display')
    })
  }
}

function onHoverBadge(e, item) {
  const rect = e.currentTarget.getBoundingClientRect()
  tooltipStyle.value = {
    top: `${rect.top}px`,
    left: `${rect.right + 12}px`
  }
  hoveredItem.value = item
}

function onLeaveBadge() {
  hoveredItem.value = null
}

// Resizer logic
function startResize(e) {
  if (isCollapsed.value) return
  isDragging.value = true
  document.body.style.userSelect = 'none'
  document.body.style.cursor = 'col-resize'

  window.addEventListener('mousemove', onMouseMove)
  window.addEventListener('mouseup', stopResize)
}

function onMouseMove(e) {
  if (!isDragging.value) return
  const newWidth = Math.min(Math.max(e.clientX, 280), 520)
  sidebarWidth.value = newWidth
  document.documentElement.style.setProperty('--vp-sidebar-width', `${newWidth}px`)
}

function stopResize() {
  if (!isDragging.value) return
  isDragging.value = false
  document.body.style.userSelect = ''
  document.body.style.cursor = ''
  localStorage.setItem('soic-sidebar-width', sidebarWidth.value.toString())
  window.removeEventListener('mousemove', onMouseMove)
  window.removeEventListener('mouseup', stopResize)
}

function resetWidth() {
  sidebarWidth.value = 330
  document.documentElement.style.setProperty('--vp-sidebar-width', '330px')
  localStorage.setItem('soic-sidebar-width', '330')
}

// Keyboard shortcut (Ctrl+B / Cmd+B)
function onKeydown(e) {
  if ((e.ctrlKey || e.metaKey) && (e.key === 'b' || e.key === 'B')) {
    e.preventDefault()
    toggleCollapse()
  }
}

// Attach native HTML title attributes to all sidebar links so full titles are accessible
function enrichSidebarItemTitles() {
  if (!inBrowser) return
  nextTick(() => {
    const items = document.querySelectorAll('.VPSidebarItem .link')
    items.forEach(el => {
      const textEl = el.querySelector('.text')
      if (textEl && textEl.textContent) {
        el.setAttribute('title', textEl.textContent.trim())
      }
    })
  })
}

watch(() => route.path, () => {
  nextTick(() => {
    applySidebarState()
    enrichSidebarItemTitles()
  })
})

onMounted(() => {
  if (inBrowser) {
    const savedCollapsed = localStorage.getItem('soic-sidebar-collapsed') === 'true'
    const savedWidth = parseInt(localStorage.getItem('soic-sidebar-width') || '330', 10)

    if (!isNaN(savedWidth) && savedWidth >= 280 && savedWidth <= 520) {
      sidebarWidth.value = savedWidth
    }

    if (savedCollapsed) {
      isCollapsed.value = true
    }

    applySidebarState()
    enrichSidebarItemTitles()

    window.addEventListener('keydown', onKeydown)
  }
})

onUnmounted(() => {
  if (inBrowser) {
    window.removeEventListener('keydown', onKeydown)
    window.removeEventListener('mousemove', onMouseMove)
    window.removeEventListener('mouseup', stopResize)
  }
})
</script>

<template>
  <div class="soic-sidebar-controller" :class="{ 'is-collapsed': isCollapsed }">
    <!-- Top Bar in Expanded Mode -->
    <div v-if="!isCollapsed" class="soic-expanded-topbar">
      <div class="sidebar-heading">Vault Navigation</div>
      <button
        class="soic-collapse-btn"
        @click="toggleCollapse"
        title="Collapse to Mini-Rail (Ctrl+B)"
        aria-label="Collapse Sidebar"
      >
        <span class="icon">◀</span>
        <span class="shortcut">Ctrl+B</span>
      </button>
    </div>

    <!-- Mini-Rail Dock in Collapsed Mode (Option A2) -->
    <div v-else class="soic-mini-rail">
      <!-- Expand Button at top of dock -->
      <button
        class="soic-expand-btn"
        @click="toggleCollapse"
        title="Expand Sidebar (Ctrl+B)"
        aria-label="Expand Sidebar"
      >
        <span class="icon">▶</span>
      </button>

      <div class="rail-divider"></div>

      <!-- D3 (Overview) & D2 (Summary Reference Cards) Short Form Badges -->
      <div class="rail-tier-group">
        <template v-for="item in miniRailItems" :key="item.link">
          <!-- Short-form D3 Overview Badge -->
          <a
            v-if="item.type === 'overview'"
            :href="item.link"
            class="rail-badge action-badge d3-badge"
            :class="{ 'is-active': item.isActive }"
            @mouseenter="onHoverBadge($event, item)"
            @mouseleave="onLeaveBadge"
            aria-label="Sub-Course Overview (D3)"
          >
            <span class="badge-icon">🗺️</span>
            <span class="badge-code">D3</span>
          </a>

          <!-- Short-form D2 Summary Reference Cards Badge -->
          <a
            v-if="item.type === 'summary'"
            :href="item.link"
            class="rail-badge action-badge d2-badge"
            :class="{ 'is-active': item.isActive }"
            @mouseenter="onHoverBadge($event, item)"
            @mouseleave="onLeaveBadge"
            aria-label="Summary Reference Cards (D2)"
          >
            <span class="badge-icon">⚡</span>
            <span class="badge-code">D2</span>
          </a>
        </template>
      </div>

      <div class="rail-divider"></div>
      <div class="rail-section-tag">LECS</div>

      <!-- D1 Detailed Lectures (01, 02, 03, ...) Short Form Badges -->
      <div class="rail-lectures-scroll">
        <template v-for="item in miniRailItems" :key="item.link">
          <a
            v-if="item.type === 'lecture'"
            :href="item.link"
            class="rail-badge lecture-badge"
            :class="{ 'is-active': item.isActive }"
            @mouseenter="onHoverBadge($event, item)"
            @mouseleave="onLeaveBadge"
            :aria-label="item.fullTitle"
          >
            <span>{{ item.badge }}</span>
          </a>
        </template>
      </div>
    </div>

    <!-- Draggable Edge Resizer Handle (Only in Expanded mode) -->
    <div
      v-if="!isCollapsed"
      class="soic-resizer-handle"
      @mousedown="startResize"
      @dblclick="resetWidth"
      title="Drag to resize sidebar • Double-click to reset"
    ></div>

    <!-- Floating Tooltip Card for Mini-Rail Badges (Fixed Positioning) -->
    <Teleport to="body">
      <div
        v-if="isCollapsed && hoveredItem"
        class="soic-rail-tooltip"
        :style="tooltipStyle"
      >
        <div class="tooltip-header">
          <span
            class="tooltip-badge"
            :class="{
              'd3-tag': hoveredItem.type === 'overview',
              'd2-tag': hoveredItem.type === 'summary'
            }"
          >
            {{ hoveredItem.badge }}
          </span>
          <span class="tooltip-type">
            {{
              hoveredItem.type === 'overview'
                ? 'Sub-Course Overview'
                : hoveredItem.type === 'summary'
                ? 'Summary Reference Cards'
                : 'Detailed Lecture Report'
            }}
          </span>
        </div>
        <div class="tooltip-title">{{ hoveredItem.fullTitle }}</div>
      </div>
    </Teleport>
  </div>
</template>

<style scoped>
.soic-sidebar-controller {
  position: relative;
  width: 100%;
}

/* Expanded Topbar */
.soic-expanded-topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px 6px 12px 6px;
  margin-bottom: 8px;
  border-bottom: 1px solid var(--vp-c-divider, #e2e8f0);
}

.sidebar-heading {
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--vp-c-text-3, #94a3b8);
}

.soic-collapse-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: var(--vp-c-bg-soft, #f1f5f9);
  color: var(--vp-c-text-2, #64748b);
  border: 1px solid var(--vp-c-border, #cbd5e1);
  border-radius: 6px;
  padding: 3px 8px;
  font-size: 0.72rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.soic-collapse-btn:hover {
  background: var(--vp-c-brand-soft, rgba(16, 185, 129, 0.15));
  color: var(--vp-c-brand-1, #10b981);
  border-color: var(--vp-c-brand-1, #10b981);
}

.shortcut {
  font-size: 0.68rem;
  background: var(--vp-c-bg, #ffffff);
  padding: 1px 4px;
  border-radius: 4px;
  border: 1px solid var(--vp-c-divider, #e2e8f0);
  color: var(--vp-c-text-3, #94a3b8);
}

/* Mini-Rail (Option A2) */
.soic-mini-rail {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  width: 100%;
  padding: 4px 0 24px 0;
}

.soic-expand-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 8px;
  background: var(--vp-c-bg-soft, #1e293b);
  color: var(--vp-c-brand-1, #10b981);
  border: 1px solid var(--vp-c-brand-1, #10b981);
  cursor: pointer;
  font-size: 0.85rem;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.soic-expand-btn:hover {
  background: var(--vp-c-brand-1, #10b981);
  color: #ffffff;
  transform: scale(1.05);
}

.rail-divider {
  width: 32px;
  height: 1px;
  background: var(--vp-c-divider, #334155);
  margin: 4px 0;
}

.rail-section-tag {
  font-size: 0.58rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  color: var(--vp-c-text-3, #64748b);
  margin: 2px 0 4px 0;
}

.rail-tier-group {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  width: 100%;
}

.rail-badge {
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none !important;
  transition: all 0.18s ease;
  position: relative;
}

/* D3 Overview Short Form Badge */
.d3-badge {
  width: 38px;
  height: 38px;
  border-radius: 8px;
  background: rgba(6, 182, 212, 0.12);
  border: 1px solid rgba(6, 182, 212, 0.35);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1px;
  color: #0891b2;
}

.dark .d3-badge {
  background: rgba(6, 182, 212, 0.15);
  border-color: rgba(6, 182, 212, 0.4);
  color: #22d3ee;
}

.d3-badge .badge-icon {
  font-size: 0.9rem;
  line-height: 1;
}

.d3-badge .badge-code {
  font-size: 0.6rem;
  font-weight: 800;
  letter-spacing: 0.05em;
  font-family: monospace;
}

.d3-badge:hover,
.d3-badge.is-active {
  background: #0891b2 !important;
  color: #ffffff !important;
  border-color: #22d3ee !important;
  box-shadow: 0 0 10px rgba(6, 182, 212, 0.5);
  transform: scale(1.05);
}

/* D2 Summary Cards Short Form Badge */
.d2-badge {
  width: 38px;
  height: 38px;
  border-radius: 8px;
  background: rgba(245, 158, 11, 0.12);
  border: 1px solid rgba(245, 158, 11, 0.35);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1px;
  color: #b45309;
}

.dark .d2-badge {
  background: rgba(245, 158, 11, 0.15);
  border-color: rgba(245, 158, 11, 0.4);
  color: #fbbf24;
}

.d2-badge .badge-icon {
  font-size: 0.9rem;
  line-height: 1;
}

.d2-badge .badge-code {
  font-size: 0.6rem;
  font-weight: 800;
  letter-spacing: 0.05em;
  font-family: monospace;
}

.d2-badge:hover,
.d2-badge.is-active {
  background: #d97706 !important;
  color: #ffffff !important;
  border-color: #fbbf24 !important;
  box-shadow: 0 0 10px rgba(245, 158, 11, 0.5);
  transform: scale(1.05);
}

/* D1 Lecture Badges (01, 02, ...) */
.rail-lectures-scroll {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  width: 100%;
}

.lecture-badge {
  width: 36px;
  height: 36px;
  border-radius: 8px;
  background: var(--vp-c-bg-soft, #0f172a);
  border: 1px solid var(--vp-c-border, #334155);
  font-size: 0.78rem;
  font-weight: 600;
  font-family: monospace;
  color: var(--vp-c-text-2, #94a3b8);
}

.lecture-badge:hover {
  background: rgba(16, 185, 129, 0.15);
  border-color: var(--vp-c-brand-1, #10b981);
  color: var(--vp-c-brand-1, #10b981);
  transform: scale(1.06);
}

.lecture-badge.is-active {
  background: var(--vp-c-brand-1, #10b981) !important;
  color: #090d16 !important;
  border-color: var(--vp-c-brand-1, #10b981) !important;
  font-weight: 800 !important;
  box-shadow: 0 0 10px rgba(16, 185, 129, 0.45);
}

/* Resizer Handle */
.soic-resizer-handle {
  position: fixed;
  top: var(--vp-nav-height, 64px);
  left: calc(var(--vp-sidebar-width, 330px) - 3px);
  width: 6px;
  height: calc(100vh - var(--vp-nav-height, 64px));
  cursor: col-resize;
  z-index: 20;
  background: transparent;
  transition: background 0.2s ease;
}

.soic-resizer-handle:hover,
.soic-resizer-handle:active {
  background: var(--vp-c-brand-1, #10b981);
  box-shadow: 0 0 8px rgba(16, 185, 129, 0.4);
}

/* Mini-Rail Tooltip */
.soic-rail-tooltip {
  position: fixed;
  z-index: 99999;
  background: var(--vp-c-bg-elv, #0f172a);
  border: 1px solid var(--vp-c-brand-1, #10b981);
  border-radius: 8px;
  padding: 8px 12px;
  max-width: 320px;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.5), 0 0 15px rgba(16, 185, 129, 0.15);
  pointer-events: none;
  animation: fadeIn 0.12s ease-out;
}

:root:not(.dark) .soic-rail-tooltip {
  background: #ffffff;
  border-color: #10b981;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.12), 0 0 12px rgba(16, 185, 129, 0.15);
}

.tooltip-header {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 4px;
}

.tooltip-badge {
  background: var(--vp-c-brand-1, #10b981);
  color: #090d16;
  font-size: 0.65rem;
  font-weight: 800;
  padding: 1px 6px;
  border-radius: 4px;
  font-family: monospace;
}

.tooltip-badge.d3-tag {
  background: #06b6d4;
  color: #ffffff;
}

.tooltip-badge.d2-tag {
  background: #f59e0b;
  color: #ffffff;
}

.tooltip-type {
  font-size: 0.68rem;
  font-weight: 600;
  color: var(--vp-c-text-3, #64748b);
  text-transform: uppercase;
}

.tooltip-title {
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--vp-c-text-1, #f8fafc);
  line-height: 1.35;
}

:root:not(.dark) .tooltip-title {
  color: #0f172a;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateX(-4px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
