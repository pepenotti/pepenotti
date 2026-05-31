<template>
  <v-app :theme="currentTheme">
    <v-app-bar flat border="b" height="56">
      <v-app-bar-title>
        <router-link to="/" class="text-decoration-none text-high-emphasis font-weight-bold letter-spacing-wide">
          AF
        </router-link>
      </v-app-bar-title>

      <v-spacer />

      <v-btn
        v-for="item in navItems"
        :key="item.to"
        :to="item.to"
        variant="text"
        class="text-caption text-uppercase"
        active-class="font-weight-bold"
      >
        {{ item.label }}
      </v-btn>

      <v-btn
        :icon="isDark ? 'mdi-weather-sunny' : 'mdi-weather-night'"
        variant="text"
        @click="toggleTheme"
      />
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>

    <v-footer border="t" class="text-caption text-medium-emphasis py-3 px-6">
      <span>© {{ new Date().getFullYear() }} Antonio Franchinotti</span>
    </v-footer>
  </v-app>
</template>

<script setup>
import { computed } from 'vue'
import { useTheme } from 'vuetify'

const vuetifyTheme = useTheme()

const isDark = computed(() => vuetifyTheme.global.current.value.dark)
const currentTheme = computed(() => isDark.value ? 'dark' : 'light')

function toggleTheme() {
  vuetifyTheme.global.name.value = isDark.value ? 'light' : 'dark'
}

const navItems = [
  { label: 'Apps', to: '/apps' },
  { label: 'Skills', to: '/skills' },
  { label: 'Resume', to: '/resume' },
  { label: 'Contact', to: '/contact' },
]
</script>
