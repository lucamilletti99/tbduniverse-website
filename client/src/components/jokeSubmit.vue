<template>
  <div>
    <div id = "jokeInput">
      <textarea class="form-control" id = "formInput" v-model="formInput" @keyup="formError = ''"></textarea>
      <button type="button" class="btn btn-primary mt-3" @click="postJoke">Submit Joke</button>
      <p id = "jokeJudge" style = 'font-family: "Comic Sans MS", "Comic Sans", cursive'><p>
      <p>What does Chuck Norris think?</p>  
      <img v-if = "!jokeBool" :src="require('./images/madchuck.png')" id = "madchuck" contains width="200px" height="200px">
      <img v-else :src="require('./images/happychuck.png')" id = 'happychuck' contains width="300px" height="200px">
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import JokesDataService from '../services/JokesDataService';

interface jokeAdded {
  text: string,
};
interface Joke {
  choice: string
};

@Component
export default class jokeSubmit extends Vue { 
  private formInput: string = '';
  private jokeBool: boolean = false; //for which image to show during render

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
            this.formInput = response.data.reverse();
            localStorage.setItem('joke', response.data);
          }
          else {
            console.log(response.data);
            this.formInput = response.data.reverse();
            localStorage.setItem('joke',response.data);
          }
        })
        .catch(err => {
          console.error(`Couldn't fetch joke: ${err}`)
        })
  }
  public postJoke() : void{
      const newJoke: jokeAdded = {
        text: this.formInput,
      }
    JokesDataService.create(newJoke).then(response =>{
      document.getElementById("jokeJudge")!.innerText = response.data;
      if(response.data == "Your joke was funny!") this.jokeBool = true;
      else this.jokeBool = false;
    });
  }
}
</script>

<style scoped>
textarea.form-control {
  height: 100px;
}
</style>
