<template>
  <div class="form-group">
    <label for="email">Your Email Address</label>
    <input type="text"
           id="email"
           class="form-control"
           v-model="userData.email">
    
    <button class="btn btn-primary"
        @click.prevent="submitted">Submit!
    </button>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                userData: {
                    email: ''
                }
            }
        }
    }
</script>