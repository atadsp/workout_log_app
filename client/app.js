$(document).ready(function(){
	$("#testAPI").on("click", function(){

			console.log("its working");

			var test = $.ajax({

				type:"GET",
				url: "http://localhost:3000/api/test"
				});

				test.done(function(data){
					console.log(data);
				});

				test.fail(function(){
					console.log("You have failed me for the last time");
				});

			
	});
});