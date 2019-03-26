<template>
    <div>
        <h1>hello</h1>
        <button @click="logout">logout</button>
    </div>
</template>

<script>
    import firebase from 'firebase';

    export default {
        data() {
            return {
                
            }
        },
        methods:{
            logout(){
                firebase.auth().signOut().then(()=>{
                    alert('logout!')
                    this.$router.replace('login')
                })
            }
        }
    }
</script>

<style scoped>

</style>