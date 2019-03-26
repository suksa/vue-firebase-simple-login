import Vue from 'vue';
import firebase from 'firebase';
import App from './App.vue';
import router from './routes';

Vue.config.productionTip = false;

let app = '';
const config = {
  apiKey: "AIzaSyD0sjLVKuTKAJkCKug9jmuSTOoHqCJglkE",
  authDomain: "simplelogin-4380c.firebaseapp.com",
  databaseURL: "https://simplelogin-4380c.firebaseio.com",
  projectId: "simplelogin-4380c",
  storageBucket: "simplelogin-4380c.appspot.com",
  messagingSenderId: "891999206300"
};

firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    /* eslint-disable no-new */
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount('#app');
  }
});