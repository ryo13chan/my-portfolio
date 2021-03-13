<template>
  <main>
    <article>
      <section class="content">
        <AppHeading :level="2" text="Skills" />
        <AppCard class="card">
          <template v-slot:header>
            <AppHeading :level="4" text="フロントエンド" />
          </template>
          <div class="skill-labels">
            <SkillLabel
              v-for="skill in frontendSkills"
              :key="skill.label"
              class="skill-labels__label"
              :label="skill.label"
              :icon="skill.icon"
            />
          </div>
        </AppCard>
        <AppCard class="card">
          <template v-slot:header>
            <AppHeading :level="4" text="バックエンド" />
          </template>
          <div class="skill-labels">
            <SkillLabel
              v-for="skill in backendSkills"
              :key="skill.label"
              class="skill-labels__label"
              :label="skill.label"
              :icon="skill.icon"
            />
          </div>
        </AppCard>
        <AppCard class="card">
          <template v-slot:header>
            <AppHeading :level="4" text="DB・インフラ" />
          </template>
          <div class="skill-labels">
            <SkillLabel
              v-for="skill in dbInfraSkills"
              :key="skill.label"
              class="skill-labels__label"
              :label="skill.label"
              :icon="skill.icon"
            />
          </div>
        </AppCard>
        <AppCard class="card">
          <template v-slot:header>
            <AppHeading :level="4" text="ツール関連" />
          </template>
          <div class="skill-labels">
            <SkillLabel
              v-for="skill in toolSkills"
              :key="skill.label"
              class="skill-labels__label"
              :label="skill.label"
              :icon="skill.icon"
            />
          </div>
        </AppCard>
        <AppCard class="card">
          <template v-slot:header>
            <AppHeading :level="4" text="興味ある・仕事で使いたい" />
          </template>
          <div class="skill-labels">
            <SkillLabel
              v-for="skill in otherSkills"
              :key="skill.label"
              class="skill-labels__label"
              :label="skill.label"
              :icon="skill.icon"
            />
          </div>
        </AppCard>
      </section>
    </article>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'

interface Skill {
  label: String
  icon: String[]
}
interface Data {
  frontendSkills: Skill[]
  backendSkills: Skill[]
  dbInfraSkills: Skill[]
  toolSkills: Skill[]
  otherSkills: Skill[]
}

export default Vue.extend({
  data(): Data {
    return {
      frontendSkills: [
        { label: 'JavaScript', icon: ['fab', 'js'] },
        { label: 'TypeScript', icon: ['fab', 'js'] },
        { label: 'jQuery', icon: ['fab', 'js'] },
        { label: 'Vue.js', icon: ['fab', 'vuejs'] },
        { label: 'Vue Router', icon: ['fab', 'vuejs'] },
        { label: 'Vuex', icon: ['fab', 'vuejs'] },
        { label: 'Nuxt.js', icon: ['fab', 'vuejs'] },
        { label: 'HTML', icon: ['fab', 'html5'] },
        { label: 'CSS', icon: ['fab', 'css3'] },
        { label: 'SCSS/SASS', icon: ['fab', 'sass'] },
        { label: 'Bootstrap', icon: ['fab', 'bootstrap'] },
        { label: 'Pug', icon: ['fa', 'code'] },
        { label: 'Slim', icon: ['fa', 'code'] },
      ],
      backendSkills: [
        { label: 'PHP', icon: ['fab', 'php'] },
        { label: 'Laravel', icon: ['fab', 'laravel'] },
        { label: 'Fuel PHP', icon: ['fab', 'php'] },
        { label: 'Phalcon', icon: ['fab', 'php'] },
        { label: 'PHP Unit', icon: ['fab', 'php'] },
        { label: 'Ruby', icon: ['fa', 'code'] },
        { label: 'Ruby on Rails', icon: ['fa', 'code'] },
        { label: 'RSpec', icon: ['fa', 'code'] },
        { label: 'Java', icon: ['fab', 'java'] },
      ],
      dbInfraSkills: [
        { label: 'SQL', icon: ['fa', 'database'] },
        { label: 'MySQL', icon: ['fa', 'database'] },
        { label: 'Oracle', icon: ['fa', 'database'] },
        { label: 'Redis', icon: ['fa', 'table'] },
        { label: 'memcached', icon: ['fa', 'table'] },
        { label: 'ElasticSearch', icon: ['fa', 'table'] },
        { label: 'Jenkins', icon: ['fab', 'jenkins'] },
        { label: 'AWS', icon: ['fab', 'aws'] },
        { label: 'Apache', icon: ['fa', 'server'] },
        { label: 'Nginx', icon: ['fa', 'server'] },
      ],
      toolSkills: [
        { label: 'Git', icon: ['fab', 'git'] },
        { label: 'Github', icon: ['fab', 'github'] },
        { label: 'Bitbucket', icon: ['fab', 'bitbucket'] },
        { label: 'Docker', icon: ['fab', 'docker'] },
        { label: 'Vagrant', icon: ['fa', 'tools'] },
        { label: 'Excel', icon: ['fa', 'file-excel'] },
        { label: 'Word', icon: ['fa', 'file-word'] },
        { label: 'PowerPoint', icon: ['fa', 'file-powerpoint'] },
        { label: 'Slack', icon: ['fab', 'slack'] },
        { label: 'Jira', icon: ['fab', 'jira'] },
        { label: 'Redmine', icon: ['fa', 'tools'] },
      ],
      otherSkills: [
        { label: 'モバイル開発', icon: ['fa', 'mobile'] },
        { label: 'Flutter', icon: ['fa', 'mobile'] },
        { label: 'React', icon: ['fab', 'react'] },
        { label: 'Go', icon: ['fab', 'google'] },
        { label: 'GCP', icon: ['fab', 'google'] },
        { label: 'Firebase', icon: ['fab', 'google'] },
      ],
    }
  },
})
</script>

<style lang="scss" scoped>
@import '~/assets/scss/_variable.scss';
.content {
  max-width: 1230px;
  padding: 20px 15px;
  margin-right: auto;
  margin-left: auto;

  .card {
    &:not(:last-child) {
      margin-bottom: 2rem;
    }
  }

  .skill-labels {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: -1rem;
    &__label {
      margin-bottom: 1rem;
      &:not(:last-child) {
        margin-right: 1rem;
      }
    }
  }
}
</style>
