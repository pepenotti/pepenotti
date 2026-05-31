<template>
  <v-container class="py-12">
    <h2 class="text-h4 font-weight-bold mb-2">Skills</h2>
    <p class="text-body-1 text-medium-emphasis mb-10">
      Not attached to any specific stack — I use what the problem needs.
    </p>

    <v-row>
      <v-col
        v-for="group in skillGroups"
        :key="group.label"
        cols="12"
        sm="6"
      >
        <p class="text-overline text-medium-emphasis mb-3">{{ group.label }}</p>
        <div class="d-flex flex-wrap gap-2 mb-8">
          <v-chip
            v-for="skill in group.skills"
            :key="skill"
            variant="outlined"
          >
            {{ skill }}
          </v-chip>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const skillGroups = [
  {
    label: 'Languages',
    skills: ['JavaScript', 'TypeScript', 'Python', 'C#', 'Java', 'PHP', 'Bash'],
  },
  {
    label: 'Frontend',
    skills: ['Vue', 'React', 'Angular', 'Ionic', 'HTML', 'CSS', 'Bootstrap'],
  },
  {
    label: 'Backend',
    skills: ['.NET / .NET Core', 'Node.js', 'Laravel', 'Bot Framework', 'REST APIs', 'Entity Framework', 'NHibernate'],
  },
  {
    label: 'Databases',
    skills: ['PostgreSQL', 'SQL Server', 'Cosmos DB', 'MongoDB', 'Azure AI Search', 'Dynamo DB'],
  },
  {
    label: 'Cloud & AI',
    skills: ['Azure', 'AWS', 'Azure OpenAI', 'Azure Media Services', 'Azure Functions', 'Azure DevOps', 'Azure AD B2C', 'Azure Video Indexer', 'Azure Speech', 'LUIS / QnA Maker', 'MuleSoft'],
  },
  {
    label: 'DevOps / Infra',
    skills: ['Docker', 'Kubernetes (AKS)', 'Terraform', 'CI/CD', 'GitHub Actions', 'Git', 'Linux'],
  },
]
</script>
