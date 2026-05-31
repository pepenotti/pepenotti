<template>
  <v-app :theme="currentTheme">
    <v-navigation-drawer v-model="drawer" temporary>
      <v-list nav class="pt-4">
        <v-list-item
          v-for="item in navItems"
          :key="item.to"
          :to="item.to"
          :title="item.label"
          class="text-uppercase text-caption"
          @click="drawer = false"
        />
      </v-list>
    </v-navigation-drawer>

    <v-app-bar flat border="b" height="56">
      <v-app-bar-nav-icon
        class="d-flex d-md-none"
        @click="drawer = !drawer"
      />
      <v-app-bar-title>
        <router-link to="/" class="text-decoration-none text-high-emphasis font-weight-bold">
          AF
        </router-link>
      </v-app-bar-title>

      <v-spacer />

      <div class="d-none d-md-flex">
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
      </div>

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
import { ref, computed } from 'vue'
import { useTheme } from 'vuetify'

const vuetifyTheme = useTheme()
const drawer = ref(false)

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
