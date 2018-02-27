$(document).ready(function(){
	// starts parallax for background
      $('.parallax').parallax();

      // starts carousel effect on portfolio
      $('.carousel').carousel();


      	  // Initialize Firebase
	  var config = {
	    apiKey: "AIzaSyDHqWcl97ZbHgWAseXMmBkuS-GQN4KkIyY",
	    authDomain: "contac-f92f8.firebaseapp.com",
	    databaseURL: "https://contac-f92f8.firebaseio.com",
	    projectId: "contac-f92f8",
	    storageBucket: "contac-f92f8.appspot.com",
	    messagingSenderId: "169312956245"
	  };
	  
	  firebase.initializeApp(config);

	  // global variable declaration
	  var name;
	  var emailAdd;
	  var message;
	  var sv;

	  var database = firebase.database();


	  // function for clicking submit
	  $("#sub-btn").on("click", function() {

	  	//prevent refresh
	  	event.preventDefault();

	  	//define variables
	  	name = $("#icon_prefix").val().trim();
	  	emailAdd = $("#email").val().trim();
	  	message = $("#textarea1").val().trim();

	  	//logs to make sure the above worked
	  	console.log("Name: " + name);
	  	console.log("Email:" + emailAdd);
	  	console.log("Message:" + message);

	// Firebase Info
        database.ref('/Contacts').push({
            name: name,
            emailAdd: emailAdd,
            message: message,
            dateAdded: firebase.database.ServerValue.TIMESTAMP
        // Close of Firebase Info
        });

        // Clear previous inputs
        function clearFields() {
            $(".info").val("");
        }

        clearFields();

	  //close of on click submit btn
	  });

    //close of doc ready
    });
