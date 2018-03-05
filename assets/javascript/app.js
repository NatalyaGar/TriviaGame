//1.Click start button on the screen with only button at the screen
//2.When start button clicked questions with answers appear
//When you go through the answers you can provide only one answer for the question. 
//3. and timer starts ticking down
// Wnen time remainnig hits 0 (go to 5,6)
//4.When you are done, click button "Done"
//5. New screen appear with the text "All Done!"
//6. and with calculated Correct Answers, Incorrest Answers and Unanswered.

$(document).ready(function() {

    var game = {
        questions:[
        {
            question: "Who is the president of Uzbekistan(2018)?",
            possibles:["Otamuradov","Umarov","Ketmonov","Karimov","Mirziyoyev"],
            id: "question-one",
            answer: 4
            
        }, {
             question: "What is the capital of Uzbekistan?",
             possibles:["Tashkent","Samarkand","Khiva","Bukhara","Andijan"],
             id: "question-two",
             answer: 0
        },{
             question: "Who is the president of Russia(2018)?",
             possibles:["Medvedev","Putin","Zirinovsky","Hakamada","Orlikov"],
             id: "question-three",
             answer: 1
        },{
            question: "What is the capital of Russia?",
            possibles:["Saint Petersburg","Moscow","Kiev","Novosibirsk","Samara"],
            id: "question-two",
            answer: 1
        }    


    ]}

    

    $(".wrapper").hide();
    $("#doneBtn").hide();
    
//start button click
    $(".start").on("click", function(){
//when button clicked questions and answers page appear        
        $(".wrapper").show();
        $("#doneBtn").show();
        console.log("Start!");
        $(".container").css("height", "700px");
        
        $(this).hide();
    });


//set timer to 20 seconds and run when start button clicked
    var timer = 30;
    $("#start").on("click",run.timer);


    function decrement(){
        timer--;
        //send timer to html
        $("#display").html("Time Remaining: " + timer + " Seconds");
        if (timer===0){
            // run stop function
            stop();
            
            // checkAnswers();
        }

    }
//make 1 second decrement
    function run(){
        counter = setInterval(decrement, 1000);
    }


    function stop(){
        clearInterval(counter);
        $(".wrapper").hide();
        $("#doneBtn").hide();
        $(".start").hide();
        $("#message").html("All Done!");
        checkAnswers();
        $(".container").css("height", "400px");
    }

    run();

//create the inputs for the form
    function formFiling(data){
        var questionString = "<form id='question-one'> " + data.question + "<br>";
        var possibles = data.possibles;
        for (var i=0; i< possibles.length; i++){
            var possible = possibles[i];
            console.log(possible);
            questionString = questionString + "<input type='radio' name=' "+data.id+ " ' value="+ i +">"+possible;
            
        }
        return questionString +"</form>";
    }
    window.formFiling = formFiling;

    //take created inputs for the form and display on the page
    function makeQuestions() {
        var questionHTML = ''
        for(var i = 0; i<game.questions.length; i++){
            questionHTML = questionHTML + formFiling(game.questions[i]);
        }
        $("#questions-container").append(questionHTML);
    }
    //function is correct
    // function isCorrect(){
    function isCorrect(whichQuestion){
        var correctAnswer= game.questions[whichQuestion].possibles[game.questions[whichQuestion].answer];
        // var answers = $('[name='+question.id +']');
        // var correct = answers.eq(question.answer);
        // var isChecked = correct.is(":checked");
        // var isChecked = whichQuestion.is(":checked");
        // console.log(isChecked);
        // return isChecked;
        console.log(correctAnswer);
        return correctAnswer;
    }

    makeQuestions();

    //display  guessed result
    function guessedResult(question){
        var htmlBlock ="<div>"
        // htmlBlock = htmlBlock + question.question + ': ' + isChecked;
        htmlBlock = htmlBlock + questions.question + ': ' + isChecked;
        return htmlBlock + "</div>";
        // console.log(this);
        
    } 
    

    //function to check the answers
    function checkAnswers (){
        var resultsHTML = '';
        var guessedAnswers = [];
        var correct = 0;
        var incorrect = 0;
        var unAnswered = 0;
        // loop through each question and see if it is correct, if it is correct score increments
        for (var i = 0; i <game.questions.length; i++) {
        // for (var i = 0; i < possibles.length; i++) {
            // if (isCorrect(possibles[i])){
                // if (isCorrect(game.question[i])) {
            if (isCorrect(i)) {
                // if (isCorrect(whichQuestion)) {
                correct++;
                console.log(correct);
            } else {
                       //did user click the answer or not, for file incorrect and unanswered scores
                       // if (checkAnswered(game.questions[i])){
                    if (checkAnswered(game.question[i])){
                       // if (checkAnswered(possibles[i])){
                    incorrect ++;
                    // console.log(incorrect);

                } else {
                    unAnswered++;

                }
                
            }
        }

        //send result to html
        $('.calculatedResults').html('Correct Answers: ' + correct + "<br>" + 'Incorrect Answers: ' + incorrect +  "<br>" +'Unanswered: ' +unAnswered);
    }

    //check if each question answered
    function checkAnswered(question){
        var anyAnswered = false;
        var answers = $('[name=' +question.id+']');
        //check if buttons were checked and sets anyAnswered to true
        for (var i = 0; i < answers.length; i++) {
            if (answers[i].checked) {
                anyAnswered = true;
            }
        }

        return anyAnswered;
    }

    //when Done button is pressed- stop the timer and hide wrapper and done button

    $("#doneBtn").on('click', function(){
        stop();
        checkAnswers();
        
    })
});










