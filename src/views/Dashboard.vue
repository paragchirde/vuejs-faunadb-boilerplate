<template>
    <div class="bg-white flex justify-center mx-auto p-10">
        <p class="text-3xl font-mono text-gray-700">Hello, {{ currentUser }}</p>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    computed:{
        currentUser(){
            return this.$store.state.user.name
        }
    }
}
</script>