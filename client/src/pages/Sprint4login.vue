<template>
  <div class="page page--about">
    <h3 style='font-family: "Comic Sans MS", "Comic Sans", cursive'>{{ title }}</h3>
    <div class="btn-group" role="group" aria-label="Basic example">
      <a v-bind:href="rubricLink" target="_blank" class="btn btn-primary">Rubric</a>
      <a v-bind:href="slackLink" target="_blank" class="btn btn-primary">Slack</a>
      <a v-bind:href="descLink" target="_blank" class="btn btn-primary">Project Description</a>
      <a v-bind:href="coursesiteLink" target="_blank" class="btn btn-primary">Coursesite</a>
      <a v-bind:href="tbd" target="_blank" class="btn btn-primary"> <i class="fas fa-dumpster-fire fa-3x"></i> </a>  
      <a v-bind:href="clockLink" target="_blank" class="btn btn-primary">World Clock</a>
    </div>
    <br><br>
    <button @click = "getLoginMsg" style = 'font-family: cursive; font-size: 20px'>Get the secret message</button>
    <p style = 'font-family: "Comic Sans MS", "Comic Sans", cursive; font-size: 50px'>{{ signInMsg }}</p>
    <img v-if = "clicked" :src="require('../components/images/kingchuck.png')" contains width="400px" height="325px">
    
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import JokesDataService from '../services/JokesDataService';

interface signIn {
  text: string,
};
@Component({
  components: {
  }
})

export default class Sprint4loginPage extends Vue {
    private signInMsg: string = "";
    private clicked: boolean = false;
    private title: string = 'Sprint 4: Secret Login Route';
    private rubricLink: string = 'https://docs.google.com/document/d/1zVWKnUkdp5YZLm7QTdsexhSakfIsVgAkUdsRtXHgYRc/edit?usp=sharing';
    private slackLink: string = 'https://app.slack.com/client/T01HDFMDT0T/C01J352F8U8';
    private descLink: string = 'https://docs.google.com/document/d/1igm6ORVncy5TLJkQsHFqOr72ojPIQ7bRpjF-H4ss0GY/edit?usp=sharing';
    private coursesiteLink: string = 'https://coursesite.lehigh.edu/course/view.php?id=195061';
    private tbd: string = 'http://tbd.world/';
    private clockLink: string = 'https://www.timeanddate.com/worldclock/';
    public getLoginMsg(): void {//either 0 or 1 (0 is yes, 1 is no)
        JokesDataService.getMsg().then(response => {
          this.signInMsg = response.data 
          this.clicked = true;
        })
    }
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