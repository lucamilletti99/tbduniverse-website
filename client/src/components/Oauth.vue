<template>
  <div>
    <g-signin-button
      :params="googleSignInParams"
      @success="onSignInSuccess"
      @error="onSignInError">
      Sign in with your Google Account!
    </g-signin-button>
    <router-link v-if = 'signedIn' class="nav-link" to="/sprint4login" style = "margin-left: 50px; color: blue; text-decoration underline; font-family: cursive">Click here for a  Secret Page!</router-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class Oauth extends Vue{
  private signedIn: boolean = false;

      /**
       * The Auth2 parameters, as seen on
       * https://developers.google.com/identity/sign-in/web/reference#gapiauth2initparams.
       * As the very least, a valid client_id must present.
       * @type {Object}
       */
    public googleSignInParams: object = {
        "client_id": '737843011689-gtsqvb6ba2a99q34iuo45pd2tvrsmsi4.apps.googleusercontent.com'
    }

    public onSignInSuccess (googleUser: any) {
      // `googleUser` is the GoogleUser object that represents the just-signed-in user.
      // See https://developers.google.com/identity/sign-in/web/reference#users
      const profile = googleUser.getBasicProfile() // etc etc
      this.signedIn = true;
    }

    public onSignInError (error: any) {
      // `error` contains any error occurred.
      console.log('there is an error', error)
    }
  }

</script>

<style>
.g-signin-button {
  /* This is where you control how the button looks. Be creative! */
  display: inline-block;
  padding: 4px 8px;
  border-radius: 3px;
  background-color: #3c82f7;
  color: #fff;
  box-shadow: 0 3px 0 #0f69ff;
}
</style>