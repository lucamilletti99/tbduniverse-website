<template>
  <div class="page page--about">
    <div class="alert alert-danger" role="alert">
      This part will done by you!
    </div>
    <h1>{{ title }}</h1>
    <div class="btn-group" role="group" aria-label="Basic example">
      <a v-bind:href="rubricLink" target="_blank" class="btn btn-primary">Rubric</a>
      <a v-bind:href="slackLink" target="_blank" class="btn btn-primary">Slack</a>
      <a v-bind:href="descLink" target="_blank" class="btn btn-primary">Project Description</a>
      <a v-bind:href="coursesiteLink" target="_blank" class="btn btn-primary">Coursesite</a>
      <a v-bind:href="tbd" target="_blank" class="btn btn-primary"> <i class="fas fa-dumpster-fire fa-3x"></i> </a>  
      <a v-bind:href="clockLink" target="_blank" class="btn btn-primary">World Clock</a>
    </div>
    <p>{{ description }}</p>
    <p>{{ description2 }}</p>
      <label>Do you like jokes?</label>
      <Jokes></Jokes><br><br><br>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import newComponent from '../components/newComponent.vue'
import formComponent from '../components/formComponent.vue'
import Jokes from '../components/Jokes.vue'

@Component({
  components: {
    newComponent,
    Jokes
  }
})

export default class Sprint2Page extends Vue {
  private title: string = 'Sprint Two: Working Better With Your Teammates';
  private description: string = 'Sprint 1: The Frontend has utilized the Font Awesome CDN and imported the dumpster fire emoji (added a link aswell) and this code symbol';
  private description2: string = 'Sprint 2: Added a user choice for joke sent to backend (and a cheeky world clock!) . Our main goal was to ensure our get endpoint was working smoothly, and that the cookies and caching was being handled correctly!';
  private rubricLink: string = 'https://docs.google.com/document/d/1zVWKnUkdp5YZLm7QTdsexhSakfIsVgAkUdsRtXHgYRc/edit?usp=sharing';
  private slackLink: string = 'https://app.slack.com/client/T01HDFMDT0T/C01J352F8U8';
  private descLink: string = 'https://docs.google.com/document/d/1igm6ORVncy5TLJkQsHFqOr72ojPIQ7bRpjF-H4ss0GY/edit?usp=sharing';
  private coursesiteLink: string = 'https://coursesite.lehigh.edu/course/view.php?id=195061';
  private tbd: string = 'http://tbd.world/';
  private clockLink: string = 'https://www.timeanddate.com/worldclock/';
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
newComponent{
  color: red;
}