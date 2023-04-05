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

  $("#loginBtn").click(function () {
    var email = $("#email").val();
    var password = $("#password").val();
    firebase.auth().signInWithEmailAndPassword(email, password).then(function () {
        window.location.href = "https://heyoo.sowwyzsowwyz.repl.co/";
    }).catch(function (error) {
      alert(error.message);
    })
  })
})
