<template>
  <v-container class="py-12">
    <h2 class="text-h4 font-weight-bold mb-2">Apps</h2>
    <p class="text-body-1 text-medium-emphasis mb-8">Things I'm building.</p>

    <v-row v-if="apps.length">
      <v-col
        v-for="app in apps"
        :key="app.name"
        cols="12"
        sm="6"
        lg="4"
      >
        <v-card height="100%" class="d-flex flex-column">
          <v-card-title class="pt-5">{{ app.name }}</v-card-title>
          <v-card-text class="flex-grow-1 text-medium-emphasis">
            {{ app.description }}
          </v-card-text>
          <v-card-text class="pt-0">
            <v-chip
              v-for="tag in app.tags"
              :key="tag"
              size="small"
              variant="outlined"
              class="mr-1 mb-1"
            >
              {{ tag }}
            </v-chip>
          </v-card-text>
          <v-card-actions class="px-4 pb-4">
            <v-btn
              v-if="app.liveUrl"
              :href="app.liveUrl"
              target="_blank"
              prepend-icon="mdi-open-in-new"
              size="small"
            >
              Live
            </v-btn>
            <v-btn
              v-if="app.repoUrl"
              :href="app.repoUrl"
              target="_blank"
              prepend-icon="mdi-github"
              size="small"
            >
              Repo
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <div v-else class="py-16 text-center">
      <v-icon size="48" class="text-medium-emphasis mb-4">mdi-hammer-wrench</v-icon>
      <p class="text-h6 text-medium-emphasis">Work in progress — check back soon.</p>
    </div>
  </v-container>
</template>

<script setup>
import { apps } from '../data/apps.js'
</script>
