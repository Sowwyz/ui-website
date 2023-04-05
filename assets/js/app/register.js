$(document).ready(function () {
  var config = {
      apiKey: "",
      authDomain: "",
      databaseURL: "",
      projectId: "",
      storageBucket: "",
      messagingSenderId: ""
  };
  firebase.initializeApp(config);

  $("#registerBtn").click(function () {
      var email = $("#email").val();
      var password = $("#password").val();
      firebase.auth().createUserWithEmailAndPassword(email, password).then(function () {
        firebase.auth().signInWithEmailAndPassword(email, password).then(function () {
            window.location.href = "https://heyoo.sowwyzsowwyz.repl.co/";
        })
      }).catch(function (error) {
        alert(error.message);
      })
  })

})
