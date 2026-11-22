<script setup>
import DefaultTheme from 'vitepress/theme'
import SidebarRailController from './SidebarRailController.vue'
import FloatingSectionDrawer from './FloatingSectionDrawer.vue'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #sidebar-nav-before>
      <SidebarRailController />
    </template>
    <template #doc-before>
      <FloatingSectionDrawer />
    </template>
  </Layout>
</template>
