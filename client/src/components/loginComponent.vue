<template>
    <div id = "userInput">
      <label> Username</label>
      <input type = "text" v-model = "firstName"></input>
      <label> Password </label>
      <input type = "text" v-model = "lastName"></input>
      <p>Password Verification:&nbsp&nbsp<em>{{ lastName }}</em></p>
    </div>
</template>