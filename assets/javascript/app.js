// ==================================
// Variables
// ==================================

// array to store the questions and corresponding answers
var triviaData = [
    {q:"What does DNA stand for?", a1:"deoxyribonucleic acid", a2:"double-helix nucleic acid", a3:"dominant nucleic acid", a4:"directed nucleic acid"},
    {q:"Every genome is made of 4 different base pairs. What are they?", a1:"B - U - D - G", a2:"A - T - C - G", a3:"C - V - T - U", a4:"A - U - T - B"},
    {q:"How much of your DNA is identical to every other human?", a1:"99%", a2:"79%", a3:"59%", a4:"29%"},
    {q:"How many base pairs are in the human genome?", a1:"30,000", a2:"300,000", a3:"3 millions", a4:"3 billions"},
    {q:"Can a person present two different DNA profiles?", a1:"Yes", a2:"No"},
    {q:"When was the first human genome sequenced?", a1:"2000", a2:"2003", a3:"2006", a4:"2009"},
    {q:"How long would it take to type the human genome if you could type 60 wpm, 8 hours a day?", a1:"50 days", a2:"50 weeks", a3:"50 months", a4:"50 years"},
    {q:"We share 50% of our genes with...?", a1:"Chimpanzees", a2:"God", a3:"Bananas", a4:"Dinosaurs"},
    {q:"How far could you go if you laid out all of your DNA end to end?", a1:"around the Earth, one time", a2:"to the sun, one time", a3:"around the Eatrh, hundreds of time", a4:"to the sun, hundreds of time"},
];
console.log(triviaData[4].a3);
// array to store the correct answers - same order as the question!
var correctAnswers = ["deoxyribonucleic acid", "A - T - C - G", "99%", "3 billions", "Yes", "2003", "50 years", "Bananas", "to the sun, hundreds of time"]

// array to store the gifs to display - same order as the question!
var gifs = ["assets/images/dna.gif", "assets/images/atcg.png", "assets/images/identical.gif", "assets/images/3-billions.gif", "assets/images/dna-profile.gif", "assets/images/sequencing.gif", "assets/images/typing.gif", "assets/images/banana.gif", "assets/images/earth-sun.gif"]

// variable to keep track of the number of question asked, the number of correct
// and incorrect answers and the number of unanswered questions
var count = 0;
var correct = 0;
var incorrect = 0;
var unanswered = 0;

//variable to store the time allowed to answer
var timeAllowed = 15;

// variable to store the main flow of the game
var mainFlow;


// ==================================
// Functions
// ==================================

// funtion for the main flow of the game - if the player doesn't answer
function mainFlowGame() {
    timeAllowed--;
    $("#timer").text("Timer: " + timeAllowed);

    // if the timer goes to 0 and all the questions haven't been displayed
    if (timeAllowed === 0 && count < triviaData.length) {
        // stop the main flow of the game and timer
        clearInterval(mainFlow);
        // increase by 1 the unanswered count
        unanswered++;
        console.log("unanswered: " + unanswered);
        // display "time is up" message
        sayTimeIsUp();
        // restart the game after 4 seconds
        setTimeout(restart, 4*1000);
    // otherwise if all the questions have been displayed
    } else if (timeAllowed === 0 && count === triviaData.length) {
        // stop the main flow of the game and timer
        clearInterval(mainFlow);
        // increase by 1 the unanswered count - for the last question
        unanswered++;
        console.log("unanswered: " + unanswered);
        // display the results and propose to start over
        showResult();    
    }
}

// function to display the questions and the corresponding possible answers
function showQandA() {
    // make sure the HTML elements are empty - nothing left from previous question+answers or messages
    $("#question-message").empty();
    $("#reveal-answer").empty();
    $("#pic-gif").hide();
    $("#pic-gif").attr("src", "");
    $("#score").empty();
    $(".answers").empty();
    $(".answers").show();
    // fill up the HTML elements with the question + possible answers
    // store each answer as the value of the corresponding button
    $("#question-message").text(triviaData[count].q);
    $("#answer1").text(triviaData[count].a1);
    $("#answer1").attr("value", triviaData[count].a1);
    $("#answer2").text(triviaData[count].a2);
    $("#answer2").attr("value", triviaData[count].a2);
    $("#answer3").text(triviaData[count].a3);
    $("#answer3").attr("value", triviaData[count].a3);
    $("#answer4").text(triviaData[count].a4);
    $("#answer4").attr("value", triviaData[count].a4);
    // hide the empty answer buttons
    if ((triviaData[count].a3 === undefined) || (triviaData[count].a4 === undefined)) {
        $("#answer3").hide();
        $("#answer4").hide();
    }
    // increase the count of questions asked by 1
    count++;
    console.log("count: " + count);
}

// function to display "time is up" message + gif if time runs out before player answers
function sayTimeIsUp() {
    // empty all the HTML elements
    $("#question-message").empty();
    $("#pic-gif").attr("src", "");
    $("#pic-gif").show();
    $(".answers").empty();
    $(".answers").hide();
    // fill up the HTML elements of interest
    $("#question-message").text("Time is up!");
    $("#reveal-answer").text("The correct answer is: " + correctAnswers[count-1]);
    $("#pic-gif").attr("src", gifs[count-1]);
}

// function to display "congrats" message + gif if correct answer
function sayCongrats() {
    // empty all the HTML elements
    $("#question-message").empty();
    $("#pic-gif").attr("src", "");
    $("#pic-gif").show();
    $(".answers").empty();
    $(".answers").hide();
    // fill up the HTML elements of interest
    $("#question-message").text("Congrats, you got it!");
    $("#pic-gif").attr("src", gifs[count-1]);
}

// function to display "you're wrong" message + gif if incorrect answer
function sayWrong() {
    // empty all the HTML elements
    $("#question-message").empty();
    $("#pic-gif").attr("src", "");
    $("#pic-gif").show();
    $(".answers").empty();
    $(".answers").hide();
    // fill up the HTML elements of interest
    $("#question-message").text("Sorry, you're wrong!");
    $("#reveal-answer").text("The correct answer is: " + correctAnswers[count-1]);
    $("#pic-gif").attr("src", gifs[count-1]);
}

// function to restart the game after the player answered or time ran out
function restart() {
    // relaunch the mainFlowGame() function - restart the timer
    timeAllowed = 15;
    $("#timer").text("Timer: " + timeAllowed);
    mainFlow = setInterval(mainFlowGame, 1000);
    // display the next question+answers
    showQandA();
}

// function to display results at the end of the game
function showResult() {
     // make sure the HTML elements are empty - nothing left from previous question+answers or message
     $("#question-message").empty();
     $("#reveal-answer").empty();
     $("#pic-gif").attr("src", "");
     $("#pic-gif").hide();
     $(".answers").empty();
     $(".answers").hide();
     // display a message saying the game is over
     $("#question-message").text("No more question! You're done!");
     // display the score
     $("#score").append("<h4>Correct answers: " + correct + "</h4>");
     $("#score").append("<h4>Incorrect answers: " + incorrect + "</h4>");
     $("#score").append("<h4>Unanswered: " + unanswered + "</h4><br><br>");
     // display option to start over
     $("#start-over").attr("style", "display:block");
}


// ==================================
// Main process
// ==================================

// not to diplay the buttons before the player clicks on the "start" button
$(".answers").hide();

// to start the game
$("#start").on("click", function() {
    // the sart button disappears
    $("#start").attr("style", "display:none");
    // display the timer
    $("#timer").text("Timer: " + timeAllowed);
   // launch the mainFlowGame() function - start the timer
    mainFlow = setInterval(mainFlowGame, 1000);
    // display the first question+answers
    showQandA();
});

// if the player answers
$(".answers").on("click", function() {
    // stop the main flow of the game and timer
    clearInterval(mainFlow);
    
    //store the answer corresponding to the button that has been clicked in the variable "answer"
    var answer = $(this).val();

    // if the answer is correct
    if (answer === correctAnswers[count-1]) {
        // count of correct answers increases by 1
        correct++;
        console.log("correct asnwers: " + correct)
        // display "congrats" message and gif if correct answer
        sayCongrats();
        // and if all the questions haven't been displayed
        if (count < triviaData.length) {
            // restart the the game after 4 seconds
            setTimeout(restart, 4*1000);
        // if it is the last question    
        } else {
            // display the results and propose to start over after 4 seconds
            setTimeout(showResult, 4*1000);
        }

    // if the answer is incorrect
    } else if (answer !== correctAnswers[count-1]) {
        // count of correct answers increases by 1
        incorrect++;
        console.log("Incorrect asnwers: " + incorrect)
        // display "congrats" message and gif if correct answer
        sayWrong();
        // and if all the questions haven't been displayed
        if (count < triviaData.length) { 
            // restart the game after 4 seconds
            setTimeout(restart, 4*1000);
        // if it is the last question    
        } else {
            // display the results and propose to start over after 4 seconds
            setTimeout(showResult, 4*1000);
        }
    }

});

// to start the game over
$("#start-over").on("click", function() {
    // the start over button disappear
    $("#start-over").attr("style", "display:none");
    // reset the count and score
    count = 0;
    correct = 0;
    incorrect = 0;
    unanswered = 0;
    // reset the timeAllowed
    timeAllowed = 15;
    // display the timer
    $("#timer").text("Timer: " + timeAllowed);
    // launch the mainFlowGame() function  to sart the game over - start the timer
    mainFlow = setInterval(mainFlowGame, 1000);
    // display the first question+answers
    showQandA();
});







