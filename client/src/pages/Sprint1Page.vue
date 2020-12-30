<template>
  <div class="page page--about">
    <div class="alert alert-danger" role="alert">
      This part will be done by you!
    </div>
    <h1>{{ title }}</h1>
    <div class="btn-group" role="group" aria-label="Basic example">
      <a v-bind:href="rubricLink" target="_blank" class="btn btn-primary">Rubric</a>
      <a v-bind:href="slackLink" target="_blank" class="btn btn-primary">Slack</a>
      <a v-bind:href="descLink" target="_blank" class="btn btn-primary">Project Description</a>
      <a v-bind:href="coursesiteLink" target="_blank" class="btn btn-primary">Coursesite</a>
    </div>
    <p class="mt-3">{{ description }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Sprint1Page extends Vue {
  private title: string = 'Sprint One: How do we use other people’s code?';
  private description: string = 'In this sprint, you will first inherit the code created by the TAs. This will involve setting up your repository and development environment, cloning the code, customizing the project with your project’s name. This will also involve importing other people’s code via the frontend and backend. For the frontend, students will use a CDN approved by their mentor, while students working on the backend will import a new NPM package approved by their mentor. Students will also create a long term mission through their product by creating a mockup of their product.';

  private rubricLink: string = 'https://docs.google.com/document/d/1zVWKnUkdp5YZLm7QTdsexhSakfIsVgAkUdsRtXHgYRc/edit?usp=sharing';
  private slackLink: string = 'https://app.slack.com/client/T01HDFMDT0T/C01J352F8U8';
  private descLink: string = 'https://docs.google.com/document/d/1igm6ORVncy5TLJkQsHFqOr72ojPIQ7bRpjF-H4ss0GY/edit?usp=sharing';
  private coursesiteLink: string = 'https://coursesite.lehigh.edu/course/view.php?id=195061';
}
</script>

<style scoped>
  .about-logo a {
    padding: 20px;
    outline: 1px solid rgb(169, 169, 169);
    display: inline-block;
  }
  .about-logo a:hover {
    opacity: 0.8;
  }
</style>
