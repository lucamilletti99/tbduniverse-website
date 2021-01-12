<template>
  <div>
    <div>
      <button type="button" class="btn btn-primary mt-3" v-model = "buttonChoice" value = "0" @click="requestJoke">Yes</button>
      <button type="button" class="btn btn-primary mt-3" v-model = "buttonChoice" value = "1" @click="requestJoke">No</button>
      <div class="Joke-form-error" v-if="formError">{{formError}}, probably should fill the form</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import JokesDataService from '../services/JokesDataService';

interface Joke {
  choice:string
};

@Component
export default class Jokes extends Vue {
  private buttonChoice: string = "0"; //either 0 or 1 (0 is yes, 1 is no)

  public requestJoke(): void {
    const newJoke: Joke = {
      choice: this.buttonChoice

    }

    JokesDataService.create(newJoke)
      .then(response => {
        
      })
      .catch(err => {
        
      })

    var key = "jokeChoice"
    let cookie = escape(key) + "=" + escape(this.buttonChoice) + ";";
    document.cookie = cookie;
    console.log(cookie);
    console.log("Creating new cookie with key: " + key + " value: " + this.buttonChoice);
  }
}

</script>

<style scoped>
textarea.form-control {
  height: 100px;
}
</style>
