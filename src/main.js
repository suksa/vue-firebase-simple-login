import Vue from 'vue'
import App from './App.vue'
import router from './routes/index.js';
import firebase from 'firebase';

Vue.config.productionTip = false

let app;

firebase.initializeApp({
  apiKey: "AIzaSyD0sjLVKuTKAJkCKug9jmuSTOoHqCJglkE",
  authDomain: "simplelogin-4380c.firebaseapp.com",
  databaseURL: "https://simplelogin-4380c.firebaseio.com",
  projectId: "simplelogin-4380c",
  storageBucket: "simplelogin-4380c.appspot.com",
  messagingSenderId: "891999206300"
});

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount('#app');
  }
});