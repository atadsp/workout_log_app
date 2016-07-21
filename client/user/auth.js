$(function() {
   //.extend takes an existing object and merges it with a new functionality
$.extend(WorkoutLog, {
   signup: function() {
         var username = $("#su_username").val();
         var password = $("#su_password").val();
         var user = {user:  {username: username, password: password }};
         var signup = $.ajax({
            type: "POST",
            //API base is defined in the workout log
            url: WorkoutLog.API_BASE + "user",
            data: JSON.stringify(user),
            contentType: "application/json"
         });
         signup.done(function(data) {
            if (data.sessionToken) {
               WorkoutLog.setAuthHeader(data.sessionToken);
               //.definition hasent been added yet
               //WorkoutLog.definition.fetchAll();
               //WorkoutLog.log.fetchAll();
            }
            $("#signup-modal").modal("hide");
            $(".disabled").removeClass("disabled");
            $("#loginout").text("Logout");
            // go to define tab
            $('.nav-tabs a[href="#define"]').tab('show');
         })
         .fail(function() {
            $("#su_error").text("There was an issue with your username").show();
         });
   },

   login: function() {
		var username = $("#li_username").val();
		var password = $("#li_password").val();
		var user = {user:  {username: username, password: password }};
		var login = $.ajax({
			type: "POST",
			url: WorkoutLog.API_BASE + "login",
			data: JSON.stringify(user),
			contentType: "application/json"
		});
		login.done(function(data) {
			if (data.sessionToken) {
            WorkoutLog.setAuthHeader(data.sessionToken);
            //.definition hasent been added yet
            //WorkoutLog.definition.fetchAll();
            //WorkoutLog.log.fetchAll();
			}
			// TODO: add logic to set user and auth token	
			$("#login-modal").modal("hide");
			$(".disabled").removeClass("disabled");
			$("#loginout").text("Logout");
		})
		.fail(function() {
			$("#li_error").text("There was an issue with your username or password").show();
         });
   },

   loginout: function() {
      if (window.localStorage.getItem("sessionToken")) {
         //removes the sessionToken from the local browser terminating the session and invalidating the token. 
         window.localStorage.removeItem("sessionToken");
         $("#loginout").text("Login");
      }
   }
});

// bind events
$("#login").on("click", WorkoutLog.login);
$("#signup").on("click", WorkoutLog.signup);
$("#loginout").on("click", WorkoutLog.loginout);

if (window.localStorage.getItem("sessionToken")) {
   $("#loginout").text("Logout");
}

});