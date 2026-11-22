import { defineConfig } from 'vitepress'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const sidebarPath = path.resolve(__dirname, 'sidebar.json')

let dynamicSidebar = {}
if (fs.existsSync(sidebarPath)) {
  try {
    dynamicSidebar = JSON.parse(fs.readFileSync(sidebarPath, 'utf-8'))
  } catch (e) {
    console.error('Failed to parse dynamic sidebar.json', e)
  }
}

export default defineConfig({
  title: 'SOIC Knowledge Vault',
  description: 'Structured Reference Engine for SOIC TVGP Investing Framework',
  lang: 'en-US',
  cleanUrls: true,
  lastUpdated: true,

  markdown: {
    math: true,
    lineNumbers: true
  },

  themeConfig: {
    siteTitle: '⚡ SOIC Vault',
    
    nav: [
      { text: 'Home', link: '/' },
      {
        text: '📚 Courses',
        items: [
          { text: 'CHK: TVGP Framework Checklist', link: '/courses/chk/' },
          { text: 'CC: TVGP Crash Course', link: '/courses/cc/' },
          { text: 'FA: Fundamental Analysis', link: '/courses/fa/' },
          { text: 'V&P: Valuation & Portfolio Construction', link: '/courses/vp/' },
          { text: 'BF: Behavioural Finance & Biases', link: '/courses/bf/' }
        ]
      },
      { text: '🎙️ Transcripts', link: '/transcripts/' },
      { text: '🛡️ Verification Queue', link: '/verification-queue/' },
      { text: '📈 Sanchay App ↗', link: 'https://portfolio-tracker-frontend-iota.vercel.app' }
    ],

    sidebar: dynamicSidebar,

    search: {
      provider: 'local',
      options: {
        detailedView: true
      }
    },

    editLink: {
      pattern: 'https://github.com/soic-knowledge-vault/edit/main/:path',
      text: '✏️ Edit this section on GitHub'
    },

    outline: {
      level: [2, 3],
      label: 'On this page'
    },

    footer: {
      message: 'Grounded in SOIC Lecture Transcripts & TVGP Framework',
      copyright: 'Personal Investment Research & Reference Vault'
    }
  }
})
