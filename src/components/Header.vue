<template>
    <div>
        <div  class="bg-gray-800 p-2 font-mono px-4 text-white text-2xl font-base">
            <div class="flex justify-between items-center">
                <router-link to="/"><p>VueFauna</p></router-link>
                <div class="text-base align-middle mt-2">
                   <div class="flex">
                        <vs-button @click="logout()" color="white" size="small" type="border" v-if="check">Logout</vs-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

const faunadb = require('faunadb')
const client = new faunadb.Client({secret: process.env.VUE_APP_FAUNA_SECRET})
const q = faunadb.query
export default {
    created(){
        this.check
    },
    methods:{
        logout(){
                client.query(q.Logout(true))
                .then(res => {
                    console.log(res)
                    localStorage.removeItem('token')
                    localStorage.removeItem('userId')
                    localStorage.removeItem('user')
                    this.check
                    this.$router.push({name:'Login'})
                })
                .catch(err => {
                    console.log(err)
                })
            },
    },
    computed:{
        check(){
            if(localStorage.getItem('token') == null){
                return false
            } else {
                return true
            }
        }
    }
        
}
</script>