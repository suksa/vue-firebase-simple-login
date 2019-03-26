<template>
    <div>
        <div class="login">
            <h3>LOgin</h3>
            <input type="text" placeholder="email" v-model="email">
            <input type="password" placeholder="password" v-model="password">
            <button @click="login">Connection</button>
            <p>you don't have an account ? you can
                <router-link to="/sign-up">create one</router-link>
            </p>
        </div>
    </div>
</template>

<script>
    import firebase from 'firebase'

    export default {
        name:'login',
        data() {
            return {
                email:'',
                password:''
            }
        },
        methods: {
            login(){
                firebase.auth().signInWithEmailAndPassword(this.email,this.password).then(
                    user=>{
                        alert(user+' well done! you are now connected')
                        this.$router.replace('hello')
                    },
                    err=>alert('Oops.'+err.message)
                )
            }
        },
    }
</script>

<style scoped>

</style>