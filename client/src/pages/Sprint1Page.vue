<template>
  <div class="page page--about">
    <div class="alert alert-success" role="alert">
      This part was done by us!
    </div>
    <h1>{{ title }}</h1>
    <div class="btn-group" role="group" aria-label="Basic example">
      <a v-bind:href="rubricLink" target="_blank" class="btn btn-primary">Rubric</a>
      <a v-bind:href="slackLink" target="_blank" class="btn btn-primary">Slack</a>
      <a v-bind:href="descLink" target="_blank" class="btn btn-primary">Project Description</a>
      <a v-bind:href="coursesiteLink" target="_blank" class="btn btn-primary">Coursesite</a>
      <a v-bind:href="tbd" target="_blank" class="btn btn-primary"> <i class="fas fa-dumpster-fire fa-3x"></i> </a>  
    </div>
    <p class="mt-3">{{ description }} <i class="fas fa-code fa-10x"></i> </p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class Sprint1Page extends Vue {
  private title: string = 'Sprint One: We Used Other Peoples Code on this Page';
  private description: string = 'The Frontend has utilized the Font Awesome CDN and imported the dumpster fire emoji (added a link aswell) and this code symbol';

  private rubricLink: string = 'https://docs.google.com/document/d/1zVWKnUkdp5YZLm7QTdsexhSakfIsVgAkUdsRtXHgYRc/edit?usp=sharing';
  private slackLink: string = 'https://app.slack.com/client/T01HDFMDT0T/C01J352F8U8';
  private descLink: string = 'https://docs.google.com/document/d/1igm6ORVncy5TLJkQsHFqOr72ojPIQ7bRpjF-H4ss0GY/edit?usp=sharing';
  private coursesiteLink: string = 'https://coursesite.lehigh.edu/course/view.php?id=195061';
  private tbd: string = 'http://tbd.world/';
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
