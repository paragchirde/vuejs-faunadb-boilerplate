<template>  
  <div class="flex flex-col content-center h-screen">
      <div class="mx-auto my-auto">
         <img alt="Vue logo" src="../assets/auth.svg" class="h-64">
          <div class="text-center text-xl font-mono mt-4 text-blue">
            <router-link to="/login">Login</router-link> |
            <router-link to="/login">Register</router-link> 
          </div>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
  components: {

  }
}
</script>
