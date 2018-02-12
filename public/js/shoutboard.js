 
//window.Vue = require('vue');
//require('vue-resource');
//import vueresource from 'vue-resource'
var socket = io();
 

new Vue({
  el: "#app-chat",
  data: {
    pages: {},
    referrers: {},
    activeUsers: 0,
    activeSessions: []
  },
  created() {
    
    socket.on("updated-stats", data => {
      this.pages = data.pages;
      this.referrers = data.referrers;
      this.activeUsers = data.activeUsers;
    });
  },
  methods: {
    searchAllSession() {
     
       
    }
  }
});
