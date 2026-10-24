import DefaultTheme from 'vitepress/theme'
import './custom.css'
import TranscriptViewer from './components/TranscriptViewer.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    app.component('TranscriptViewer', TranscriptViewer)
  }
}

