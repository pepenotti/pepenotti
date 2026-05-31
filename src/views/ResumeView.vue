<template>
  <v-container class="py-12">
    <h2 class="text-h4 font-weight-bold mb-2">Resume</h2>
    <p class="text-body-1 text-medium-emphasis mb-8">
      Full-stack developer with a habit of solving problems across the whole stack.
    </p>

    <p class="text-overline text-medium-emphasis mb-2">Based in Argentina</p>
    <v-btn
      href="https://www.linkedin.com/in/antonio-franchinotti/"
      target="_blank"
      prepend-icon="mdi-linkedin"
      size="large"
      class="mb-12"
    >
      View on LinkedIn
    </v-btn>

    <h3 class="text-h6 font-weight-bold mb-6">Experience</h3>

    <v-timeline side="end" density="compact" truncate-line="both" class="mb-12">
      <v-timeline-item
        v-for="item in experience"
        :key="item.role + item.company"
        dot-color="primary"
        size="small"
      >
        <div class="font-weight-bold mb-1">{{ item.role }}</div>
        <div class="text-body-2 text-medium-emphasis">{{ item.company }} · {{ item.period }}</div>
        <div v-if="item.note" class="text-body-2 mt-1">{{ item.note }}</div>
      </v-timeline-item>
    </v-timeline>
  </v-container>
</template>

<script setup>
const experience = [
  {
    role: 'Senior Software Engineer',
    company: 'Qurable',
    period: 'Mar 2026 – Present',
    note: null,
  },
  {
    role: 'Senior Software Developer',
    company: 'Blend (contract)',
    period: 'Jun 2025 – Feb 2026',
    note: 'Python→C# SDK migration; Vite auth portal; CI/CD & Terraform infra.',
  },
  {
    role: 'Senior Software Developer',
    company: 'SOUTHWORKS',
    period: 'May 2023 – Jun 2025',
    note: 'Media platform dev: live streaming, AI-powered video search & VCMS. Stack: .NET, Python, ReactJS, Azure.',
  },
  {
    role: 'Software Engineering MTS',
    company: 'Salesforce',
    period: 'Oct 2021 – May 2023',
    note: 'MuleSoft connector dev & maintenance; Terraform → Hyperforce infrastructure migration.',
  },
  {
    role: 'Backend Developer',
    company: 'Greencode Software',
    period: 'May 2021 – Jul 2021',
    note: null,
  },
  {
    role: 'Lead Developer',
    company: 'SOUTHWORKS',
    period: 'Jan 2020 – May 2021',
    note: 'Led team building PWAs, Azure integrations, and PlayFab gaming samples.',
  },
  {
    role: 'Back-end Developer',
    company: 'SOUTHWORKS',
    period: 'Jul 2018 – Jan 2020',
    note: 'Web virtual assistant with .NET Core, Bot Framework, and Azure Cognitive Services.',
  },
  {
    role: 'Back-end Developer',
    company: 'Coconuts SRL',
    period: 'Feb 2017 – Jun 2018',
    note: '.NET intranet support & migration; Web API with .NET Core + PostgreSQL.',
  },
  {
    role: 'Jr. Fullstack Developer',
    company: 'Estado Mayor Conjunto de las FFAA',
    period: 'Jul 2015 – Jan 2017',
    note: 'Internal personnel management system — PHP, Laravel, Java, SQL Server.',
  },
  {
    role: 'Junior IT Support Technician',
    company: 'COA Tecnología de la Información Aplicada',
    period: 'Apr 2013 – Jun 2014',
    note: 'IT support, AD/Exchange setup, network & server monitoring.',
  },
  {
    role: 'Junior IT Support Technician',
    company: 'DACAS',
    period: 'Sep 2012 – Apr 2013',
    note: 'Hardware/software maintenance and PC builds for varied clients.',
  },
]
</script>
