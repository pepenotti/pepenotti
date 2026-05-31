<template>
  <v-container class="fill-height" style="min-height: calc(100vh - 112px)">
    <v-row align="center" justify="center">
      <v-col cols="12" md="6" lg="4" class="text-center">
        <h2 class="text-h4 font-weight-bold mb-4">Get in touch</h2>
        <p class="text-body-1 text-medium-emphasis mb-10">
          I'm always open to interesting projects and conversations.
        </p>

        <div class="d-flex flex-column gap-4 align-center">
          <v-btn
            href="mailto:antonio@franchinotti.com.ar"
            prepend-icon="mdi-email-outline"
            size="large"
            block
          >
            Email
          </v-btn>
          <v-btn
            href="https://www.linkedin.com/in/antonio-franchinotti/"
            target="_blank"
            prepend-icon="mdi-linkedin"
            size="large"
            block
          >
            LinkedIn
          </v-btn>
          <v-btn
            href="https://github.com/pepenotti"
            target="_blank"
            prepend-icon="mdi-github"
            size="large"
            block
          >
            GitHub
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
