<template>
  
  <div class="page page--about">
    <Oauth style = "margin-left: 800px"></Oauth>
    <h2>{{ title }}</h2>
    <div class="btn-group" role="group" aria-label="Basic example">
      <a v-bind:href="rubricLink" target="_blank" class="btn btn-primary">Rubric</a>
      <a v-bind:href="slackLink" target="_blank" class="btn btn-primary">Slack</a>
      <a v-bind:href="descLink" target="_blank" class="btn btn-primary">Project Description</a>
      <a v-bind:href="coursesiteLink" target="_blank" class="btn btn-primary">Coursesite</a>
      <a v-bind:href="tbd" target="_blank" class="btn btn-primary"> <i class="fas fa-dumpster-fire fa-3x"></i> </a>  
      <a v-bind:href="clockLink" target="_blank" class="btn btn-primary">World Clock</a>
    </div>
    <p>{{ description3 }}</p>
      <label>Do you like jokes?</label>
      <Jokes></Jokes>
      <label>Submit a joke to be judged!</label>
      <jokeSubmit></jokeSubmit>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import newComponent from '../components/newComponent.vue'
import Jokes from '../components/Jokes.vue'
import jokeSubmit from '../components/jokeSubmit.vue'
import Oauth from '../components/Oauth.vue'

@Component({
  name: 'app',
  components: {
    newComponent,
    Jokes,
    jokeSubmit,
    Oauth
  }
})

export default class Sprint3Page extends Vue {
  private title: string = 'Sprint 3: The “Working with your users” Sprint';
  private description: string = 'Sprint 1: The Frontend has utilized the Font Awesome CDN and imported the dumpster fire emoji (added a link aswell) and this code symbol';
  private description2: string = 'Sprint 2: Added a user choice for joke sent to backend (and a cheeky world clock!) . Our main goal was to ensure our get endpoint was working smoothly, and that the cookies and caching was being handled correctly!';
  private description3: string = 'Sprint 3: Added a OAuth in the form of the sign in with google button. Added a real AI Chuck Norris who learns from funny jokes and will judge user submitted jokes. If your joke is funny we save it to the database! Also added a little dynamic typing at the top of the page';
  private rubricLink: string = 'https://docs.google.com/document/d/1zVWKnUkdp5YZLm7QTdsexhSakfIsVgAkUdsRtXHgYRc/edit?usp=sharing';
  private slackLink: string = 'https://app.slack.com/client/T01HDFMDT0T/C01J352F8U8';
  private descLink: string = 'https://docs.google.com/document/d/1igm6ORVncy5TLJkQsHFqOr72ojPIQ7bRpjF-H4ss0GY/edit?usp=sharing';
  private coursesiteLink: string = 'https://coursesite.lehigh.edu/course/view.php?id=195061';
  private tbd: string = 'http://tbd.world/';
  private clockLink: string = 'https://www.timeanddate.com/worldclock/';
}

</script>
<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Righteous');
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