<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: #039BE5;">
      <a class="navbar-brand" href="#">
          <img src="images/software-dev.png" alt="" width="100px">
      </a>
      <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" to="/" exact>Welcome</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/sprint0">Sprint 0</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/sprint1">Sprint 1</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/sprint2">Sprint 2</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/sprint3">Sprint 3</router-link>
            </li>
            <li style = 'color: white; opacity: 0.5; margin-left: 500px; font-family: Cursive, Lucida Handwriting'>
                <typeEffect></typeEffect>
            </li>
            
          </ul>
        </div>
    </nav>
    <div class="container mt-3">
      <router-view class="mt-5"/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import typeEffect from './typeJoke.vue'

@Component({
  name: 'app',
  components: {
    typeEffect
  }
})
export default class App extends Vue {}
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