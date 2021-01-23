<template>
  <div>
    <div>
      <textarea class="form-control" v-model="formInput" @keyup="formError = ''"></textarea>
      <button type="button" class="btn btn-primary mt-3" @click="postJoke">Submit Joke</button>
      <div class="post-form-error" v-if="formError">{{formError}}, probably should fill the form</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import JokesDataService from '../services/JokesDataService';

interface jokeAdded {
  text: string
};

@Component
export default class jokeSubmit extends Vue { 
  private formInput: string = '';

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
            document.getElementById("jokeResponse")!.innerText= response.data;
            localStorage.setItem('joke',response.data);
          }
        })
        .catch(err => {
          console.error(`Couldn't fetch joke: ${err}`)
        })
      }
    public postJoke(cookie: any) : void{
        const newJoke: jokeAdded = {
            text: this.formInput
        }
      JokesDataService.create(newJoke); //send post request, sending them the information about the singular cookie on the client side
    }
}
</script>

<style scoped>
textarea.form-control {
  height: 100px;
}
</style>
