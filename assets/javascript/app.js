// ==================================
// Variables
// ==================================

// variable to store the start button
var startBtn = $("#start-button");

// big array to store the questions and the corresponding answers for the trivia
var questionAnswer = [
    {q:"What does DNA stand for?", a1:"deoxyribonucleic acid", a2:"double-helix nucleic acid", a3:"dominant nucleic acid", a4:"directed nucleic acid"},
    {q:"How much of your DNA is identical to every other human?", a1:"99%", a2:"79%", a3:"59%", a4:"29%"},
    {q:"How many cells are in the human body, on average?", a1:"37,000", a2:"370,000", a3:"3.7 millions", a4:"37 trillions"},
    {q:"Can a person present two different sets of DNA?", a1:"Yes", a2:"No"},
    {q:"When was the first human genome sequenced?", a1:"2000", a2:"2005", a3:"2013", a4:"2016"},
    {q:"How long would it take to type the human genome if you could type 60 wpm, 8 hours a day?", a1:"50 days", a2:"50 weeks", a3:"50 months", a4:"50 years"},
    {q:"We share 50% of our genes with...?", a1:"Chimpanzees", a2:"Bananas", a3:"God", a4:"Dinosaurs"},
    {q:"How far could you go if you laid out all of your DNA end to end?", a1:"around the Earth, one time", a2:"from Earth to the sun, one time", a3:"around the Eatrh, hundreds of time", a4:"from Earth to the sun, hundreds of time"},   
];

// variable to store the number of correct answers, incorrect answers and unanswered questions
var correct = 0;
var incorrect = 0;
var unanswered = 0;

// variable for the timer
var timer = 45;

// ==================================
// Functions
// ==================================



// funtion for the count-down for each question with a timer
function countDown() {
    timer--;
    $("#timer").text("Timer: " + number);
};
 


// ==================================
// Main process
// ==================================



