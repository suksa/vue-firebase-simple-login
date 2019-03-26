<template>
    <div>
        <div class="sign-up">
            <h3>sign-up</h3>
            <p>let's create a new account</p>
            <input type="text" v-model="email" placeholder="Email">
            <input type="password" v-model="password" placeholder="password">
            <button @click="signUp">Sign up</button>
            <span>or go back to <router-link to="login">login</router-link></span>
        </div>
    </div>
</template>

<script>
    import firebase from 'firebase';

    export default {
        data() {
            return {
                email: '',
                password:''
            }
        },
        methods:{
            signUp(){
                firebase.auth()
                .createUserWithEmailAndPassword(this.email,this.password)
                .then(
                    user=>{
                        alert(user+' your account has been created!')
                        this.$router.replace('hello')
                    },
                    err=> alert('Oops.' + err.message)
                )
            }
        }
    }
</script>

<style scoped>

</style>