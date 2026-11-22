import DefaultTheme from 'vitepress/theme'
import './custom.css'
import TranscriptViewer from './components/TranscriptViewer.vue'
import CustomLayout from './components/CustomLayout.vue'

export default {
  extends: DefaultTheme,
  Layout: CustomLayout,
  enhanceApp({ app, router, siteData }) {
    app.component('TranscriptViewer', TranscriptViewer)
  }
}
