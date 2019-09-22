  /*jshint esversion: 6 */
var userApp = new Vue({
  el: '#userData',
  data: {
    users: {
      name:{
        title:'',
        last:'',
        first:''
      },
      email:'',
      dob:{
        date:'',
        age:''
      },
      picture:{
        Thumbnail:''
      },
      NAT:''
    }
  },
  methods: {
    fetchUserData() {
    //  fetch('dummy.php')
      //  .then(response => response.json() )
        //.then(json => {waitingApp.patients = json});

      // Means the same at this
      fetch('https://randomuser.me/api/')
      .then(response => response.json() )
      .then(json => {userApp.users = json.results[0];});

        //.then(function(json) {waitingApp.people = json});

    }
  },
  created() {
    this.fetchUserData();
  }

});
