<template>
  <div>
    <div>
      <button type="button" class="btn btn-primary mt-3"  @click= "requestJoke('0')" >Yes</button>
      <button type="button" class="btn btn-primary mt-3"  @click= "requestJoke('1')" >No</button>
      <div class="Joke-form-error" v-if="formError">{{formError}}, probably should fill the form</div>
      <p id = "jokeResponse"></p>
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

  public requestJoke(jokePreference: string): void { //either 0 or 1 (0 is yes, 1 is no)
    const newJoke: Joke = {
      choice: jokePreference
    }
    JokesDataService.create(newJoke)
      .then(response => {
      })
      .catch(err => {   
      })

    var key = "jokeChoice"
    let cookie = escape(key) + "=" + escape(newJoke.choice) + ";";
    document.cookie = cookie;
    console.log(cookie);
    console.log("Creating new cookie with key: " + key + " value: " + newJoke.choice);
    //ReST Functions
    fetch('/joke', {method: 'GET', headers: {'Content-Type': "application/json"}, body: newJoke.choice}).then(response=>{
      document.getElementById("jokeResponse")!.innerHTML = response.toString();
    });
    fetch('/newPerson', {method: 'POST', headers: {'Content-Type': "application/json"}, body: cookie});
  }
}

</script>

<style scoped>
textarea.form-control {
  height: 100px;
}
</style>
