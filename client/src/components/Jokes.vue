<template>
  <div>
    <div>
      <button type="button" class="btn btn-primary mt-3"  @click= "addJoke('0')" >Yes</button>
      <button type="button" class="btn btn-primary mt-3"  @click= "addJoke('1')" >No</button>
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
    public addJoke(jokePreference: string): void {//either 0 or 1 (0 is yes, 1 is no)
      const newJoke: Joke = {
        choice: jokePreference
      }
      JokesDataService.get(jokePreference).then(response => {
          var key = "jokeChoice"
          let cookie = escape(key) + "=" + escape(newJoke.choice) + ";";
          document.cookie = cookie;
          console.log(cookie);
          console.log("Creating new cookie with key: " + key + " value: " + newJoke.choice);
          //ReST Functions
          if(newJoke.choice == "0"){
            console.log(response);
            document.getElementById("jokeResponse")!.innerText = response.data;
            localStorage.setItem('joke', response.data);
          }
          else {
            console.log(response.data);
            document.getElementById("jokeResponse")!.innerHTML = response.data;
            localStorage.setItem('joke',response.data);
          }
        })
        .catch(err => {
          console.error(`Couldn't fetch joke: ${err}`)
        })
      }
    public postJoke(cookie: any) : void{
      JokesDataService.create(document.cookie); //send post request, sending them the information about the singular cookie on the client side
    }
}
</script>

<style scoped>
textarea.form-control {
  height: 100px;
}
</style>
