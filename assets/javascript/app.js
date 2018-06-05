//1.Click start button on the screen with only button at the screen
//2.When start button clicked questions with answers appear
//When you go through the answers you can provide only one answer for the question. 
//3. and timer starts ticking down
// Wnen time remainnig hits 0 (go to 5,6)
//4.When you are done, click button "Done"
//5. New screen appear with the text "All Done!"
//6. and with calculated Correct Answers, Incorrest Answers and Unanswered.

var count = 30;
var correctCount =0;
var wrongCount = 0;
var unansweredCount =0;



$(document).ready(function() {
      $("#game_container").hide();
      $("#end_container").hide();

        //start button click
        $(".start").on("click", function(){

        //Hide start container 
            $("#start_container").hide();
        
        //Show game container 
            $("#game_container").show();

            startCountdown();
            return;

        });


        // Display timer to the user
        function countdown() {
            count--;
            $('#timer_number').html(count + " Seconds");

            //If user finished before time is up, clicks done button
            $("#doneBtn").on("click",function(){
                count=0;
                return;
            });


        //Finish the game after the timer reached 0
            if(count == -1){
                 
                //Collect the radio inputs
                timeUp();

                // Hide game container
                $("#game_container").hide();

            }

        }


        // Show the countdown, increment is 1 second
	function startCountdown(){

		setInterval(countdown, 1000);

	}

    // Function to be run after the timer is up
	function timeUp(){


		// Checked values of Radio Buttons
		var Q1 = $('input:radio[name="q1"]:checked').val();
		var Q2 = $('input:radio[name="q2"]:checked').val();
		var Q3 = $('input:radio[name="q3"]:checked').val();
        var Q4 = $('input:radio[name="q4"]:checked').val();
        
        // Determine the right/wrong/unanswered counts 
		if(Q1 == undefined){
			unansweredCount++;
		}
		else if(Q1 == "Mirziyoyev"){
			correctCount++;
		}
		else{
			wrongCount++;
        }


        
        if(Q2 == undefined){
			unansweredCount++;
		}
		else if(Q2 == "Tashkent"){
			correctCount++;
		}
		else{
			wrongCount++;
		}


        if(Q3 == undefined){
			unansweredCount++;
		}
		else if(Q3 == "Putin"){
			correctCount++;
		}
		else{
			wrongCount++;
        }
        

        if(Q4 == undefined){
			unansweredCount++;
		}
		else if(Q4 == "Moscow"){
			correctCount++;
		}
		else{
			wrongCount++;
        }


        // After answers are validated, display the score results
		$('#correct_answers').html(correctCount);
		$('#wrong_answers').html(wrongCount);
		$('#unanswered').html(unansweredCount);


		// Show the completed Score container
		$("#end_container").show();


    }

});    




   