var socket = io();
//import Vue from 'vue';
var vm = new Vue({
  el: '#app',
  data: {
    pages: {},
    referrers: {},
		activeUsers: 0
  },
  created: function() {
    socket.on('updated-stats', function(data) {
			this.pages = data.pages;
			this.referrers = data.referrers;
			this.activeUsers = data.activeUsers;
    }.bind(this));
  }
});
