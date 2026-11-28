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

// Extract items for the mini-rail from active sidebar groups
const miniRailItems = computed(() => {
  if (!sidebarGroups.value || sidebarGroups.value.length === 0) return []

  const list = []

  sidebarGroups.value.forEach(group => {
    if (!group || !group.items) return

    group.items.forEach(item => {
      // Check if it's Overview (D3)
      if (/overview|\(D3\)/i.test(item.text)) {
        list.push({
          type: 'overview',
          badge: 'D3',
          fullTitle: item.text.replace(/^[^\w\d]+/, ''),
          link: item.link,
          isActive: isLinkActive(item.link)
        })
      }
      // Check if it's Summary Reference Cards (D2)
      else if (/summary|\(D2\)/i.test(item.text)) {
        list.push({
          type: 'summary',
          badge: 'D2',
          fullTitle: item.text.replace(/^[^\w\d]+/, ''),
          link: item.link,
          isActive: isLinkActive(item.link)
        })
      }
      // Check if it's Detailed Lecture Reports (D1) or nested groups
      else if (item.items && item.items.length > 0) {
        item.items.forEach((child, index) => {
          const lecMatch = child.text.match(/Lec\s*(\d+)/i)
          const lecNum = lecMatch
            ? lecMatch[1].padStart(2, '0')
            : (index + 1).toString().padStart(2, '0')
          list.push({
            type: 'lecture',
            badge: lecNum,
            fullTitle: child.text,
            link: child.link,
            isActive: isLinkActive(child.link)
          })
        })
      } else if (item.link) {
        // Standalone links (e.g. Verification Queue, Transcripts Library)
        const shortCode = /transcript/i.test(item.text)
          ? 'TR'
          : /verification/i.test(item.text)
          ? 'QA'
          : item.text.replace(/^[^\w\d]+/, '').slice(0, 2).toUpperCase()
        list.push({
          type: 'standalone',
          badge: shortCode,
          fullTitle: item.text.replace(/^[^\w\d]+/, ''),
          link: item.link,
          isActive: isLinkActive(item.link)
        })
      }
    })
  })

  return list
})

const hasTierItems = computed(() =>
  miniRailItems.value.some(i => i.type === 'overview' || i.type === 'summary' || i.type === 'standalone')
)

const hasLectureItems = computed(() =>
  miniRailItems.value.some(i => i.type === 'lecture')
)

function isLinkActive(link) {
  if (!link || !inBrowser) return false
  const cur = route.path.replace(/\.html$/, '').replace(/\/$/, '')
  const tgt = link.replace(/\.html$/, '').replace(/\/$/, '')
  return cur === tgt
}

function toggleCollapse() {
  isCollapsed.value = !isCollapsed.value
  hoveredItem.value = null
  applySidebarState()
}

function applySidebarState() {
  if (!inBrowser) return

  const siblingGroups = document.querySelectorAll('#VPSidebarNav > .group, .VPSidebar .nav > .group')

  if (isCollapsed.value) {
    document.documentElement.classList.add('sidebar-collapsed')
    document.documentElement.style.setProperty('--vp-sidebar-width', '64px')
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
    left: `${rect.right + 14}px`
  }
  hoveredItem.value = item
}

function onLeaveBadge() {
  hoveredItem.value = null
}

// Resizer logic
function startResize() {
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
        <svg class="btn-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <rect width="18" height="18" x="3" y="3" rx="2" />
          <path d="M9 3v18" />
          <path d="m16 15-3-3 3-3" />
        </svg>
        <span class="shortcut">Ctrl+B</span>
      </button>
    </div>

    <!-- Mini-Rail Dock in Collapsed Mode (Option A2) -->
    <div v-else class="soic-mini-rail">
      <!-- Expand Button at top of dock (PanelLeftOpen SVG) -->
      <button
        class="soic-expand-btn"
        @click="toggleCollapse"
        title="Expand Sidebar (Ctrl+B)"
        aria-label="Expand Sidebar"
      >
        <svg class="expand-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <rect width="18" height="18" x="3" y="3" rx="2" />
          <path d="M9 3v18" />
          <path d="m14 9 3 3-3 3" />
        </svg>
      </button>

      <div v-if="hasTierItems" class="rail-divider"></div>

      <!-- D3 (Overview), D2 (Summary Reference Cards), & Standalone Short Form Tiles -->
      <div v-if="hasTierItems" class="rail-tier-group">
        <template v-for="item in miniRailItems" :key="item.link">
          <!-- Short-form D3 Overview Badge (Compass/Map Vector SVG) -->
          <a
            v-if="item.type === 'overview'"
            :href="item.link"
            class="rail-badge action-badge d3-badge"
            :class="{ 'is-active': item.isActive }"
            @mouseenter="onHoverBadge($event, item)"
            @mouseleave="onLeaveBadge"
            aria-label="Sub-Course Overview (D3)"
          >
            <svg class="tier-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="9" />
              <polygon points="15.5 8.5 13.5 13.5 8.5 15.5 10.5 10.5 15.5 8.5" />
            </svg>
            <span class="badge-code">D3</span>
          </a>

          <!-- Short-form D2 Summary Reference Cards Badge (Zap Vector SVG) -->
          <a
            v-else-if="item.type === 'summary'"
            :href="item.link"
            class="rail-badge action-badge d2-badge"
            :class="{ 'is-active': item.isActive }"
            @mouseenter="onHoverBadge($event, item)"
            @mouseleave="onLeaveBadge"
            aria-label="Summary Reference Cards (D2)"
          >
            <svg class="tier-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
            <span class="badge-code">D2</span>
          </a>

          <!-- Standalone Tile (Transcripts Library / Verification Queue) -->
          <a
            v-else-if="item.type === 'standalone'"
            :href="item.link"
            class="rail-badge action-badge standalone-badge"
            :class="{ 'is-active': item.isActive }"
            @mouseenter="onHoverBadge($event, item)"
            @mouseleave="onLeaveBadge"
            :aria-label="item.fullTitle"
          >
            <svg class="tier-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
            </svg>
            <span class="badge-code">{{ item.badge }}</span>
          </a>
        </template>
      </div>

      <template v-if="hasLectureItems">
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
      </template>
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
                : hoveredItem.type === 'standalone'
                ? 'Vault Section'
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
  padding: 4px 8px;
  font-size: 0.72rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.soic-collapse-btn .btn-svg {
  width: 14px;
  height: 14px;
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
  gap: 8px;
  width: 100%;
  padding: 2px 2px 24px 0;
}

.soic-expand-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 36px;
  border-radius: 8px;
  background: var(--vp-c-bg-soft, #f1f5f9);
  color: var(--vp-c-text-2, #475569);
  border: 1px solid var(--vp-c-border, #cbd5e1);
  cursor: pointer;
  transition: all 0.18s ease;
}

.dark .soic-expand-btn {
  background: rgba(30, 41, 59, 0.65);
  color: #94a3b8;
  border-color: #334155;
}

.soic-expand-btn .expand-svg {
  width: 17px;
  height: 17px;
}

.soic-expand-btn:hover {
  background: var(--vp-c-brand-soft, rgba(16, 185, 129, 0.16));
  color: var(--vp-c-brand-1, #10b981);
  border-color: var(--vp-c-brand-1, #10b981);
}

.rail-divider {
  width: 28px;
  height: 1px;
  background: var(--vp-c-divider, #334155);
  margin: 2px 0;
}

.rail-section-tag {
  font-size: 0.6rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: var(--vp-c-text-3, #64748b);
  margin: 0 0 2px 0;
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
  transition: all 0.16s ease;
  position: relative;
}

.action-badge {
  width: 42px;
  height: 42px;
  border-radius: 9px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2px;
}

.action-badge .tier-svg {
  width: 15px;
  height: 15px;
  flex-shrink: 0;
}

.action-badge .badge-code {
  font-size: 0.62rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  line-height: 1;
}

/* D3 Overview Short Form Badge */
.d3-badge {
  background: rgba(6, 182, 212, 0.08);
  border: 1px solid rgba(6, 182, 212, 0.24);
  color: #0891b2;
}

.dark .d3-badge {
  background: rgba(6, 182, 212, 0.09);
  border-color: rgba(6, 182, 212, 0.28);
  color: #22d3ee;
}

.d3-badge:hover {
  background: rgba(6, 182, 212, 0.16);
  border-color: #06b6d4;
}

.d3-badge.is-active {
  background: rgba(6, 182, 212, 0.2) !important;
  color: #0e7490 !important;
  border-color: #06b6d4 !important;
  box-shadow: inset 0 0 0 1px rgba(6, 182, 212, 0.35);
}

.dark .d3-badge.is-active {
  background: rgba(6, 182, 212, 0.22) !important;
  color: #67e8f9 !important;
  border-color: #22d3ee !important;
  box-shadow: inset 0 0 0 1px rgba(34, 211, 238, 0.3);
}

/* D2 Summary Cards Short Form Badge */
.d2-badge {
  background: rgba(245, 158, 11, 0.08);
  border: 1px solid rgba(245, 158, 11, 0.24);
  color: #b45309;
}

.dark .d2-badge {
  background: rgba(245, 158, 11, 0.09);
  border-color: rgba(245, 158, 11, 0.28);
  color: #fbbf24;
}

.d2-badge:hover {
  background: rgba(245, 158, 11, 0.16);
  border-color: #f59e0b;
}

.d2-badge.is-active {
  background: rgba(245, 158, 11, 0.2) !important;
  color: #92400e !important;
  border-color: #f59e0b !important;
  box-shadow: inset 0 0 0 1px rgba(245, 158, 11, 0.35);
}

.dark .d2-badge.is-active {
  background: rgba(245, 158, 11, 0.22) !important;
  color: #fde68a !important;
  border-color: #fbbf24 !important;
  box-shadow: inset 0 0 0 1px rgba(251, 191, 36, 0.3);
}

/* Standalone badge */
.standalone-badge {
  background: var(--vp-c-bg-soft, #f1f5f9);
  border: 1px solid var(--vp-c-border, #cbd5e1);
  color: var(--vp-c-text-2, #475569);
}

.dark .standalone-badge {
  background: rgba(30, 41, 59, 0.55);
  border-color: #334155;
  color: #94a3b8;
}

.standalone-badge.is-active {
  background: var(--vp-c-brand-soft, rgba(16, 185, 129, 0.18));
  border-color: var(--vp-c-brand-1, #10b981);
  color: var(--vp-c-brand-1, #10b981);
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
  width: 40px;
  height: 34px;
  border-radius: 8px;
  background: var(--vp-c-bg-soft, #f8fafc);
  border: 1px solid var(--vp-c-border, #e2e8f0);
  font-size: 0.78rem;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  color: var(--vp-c-text-2, #475569);
}

.dark .lecture-badge {
  background: rgba(15, 23, 42, 0.8);
  border-color: #1e293b;
  color: #94a3b8;
}

.lecture-badge:hover {
  background: rgba(16, 185, 129, 0.12);
  border-color: var(--vp-c-brand-1, #10b981);
  color: var(--vp-c-brand-1, #10b981);
}

.lecture-badge.is-active {
  background: rgba(16, 185, 129, 0.18) !important;
  color: #047857 !important;
  border-color: #10b981 !important;
  font-weight: 700 !important;
  box-shadow: inset 0 0 0 1px rgba(16, 185, 129, 0.3);
}

.dark .lecture-badge.is-active {
  background: rgba(16, 185, 129, 0.2) !important;
  color: #34d399 !important;
  border-color: #10b981 !important;
  box-shadow: inset 0 0 0 1px rgba(52, 211, 153, 0.3);
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
