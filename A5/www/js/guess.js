
//Initalize game variables
function initializeGlobals(){
    window.guesses = 0;
    window.randomNumber = Math.floor(Math.random() * 10);
}

//Reset game variables
function resetGlobals(){
    window.guesses = 0;
    window.randomNumber = Math.floor(Math.random() * 10);
    document.getElementById("guess-result").style.display = "none";
}

//Handle game logic
function guessNumber(){

    var guessNum = document.getElementById("number-input").value;
    var numToGuess = window.randomNumber;

    //Outside range
    if(guessNum < 1 || guessNum > 10){
        document.getElementById("guess-result").innerHTML = "Please enter a number between 1 and 10!";
        return;
    }

    //Not an integer
    if(guessNum > Math.floor(guessNum) || guessNum < Math.ceil(guessNum)){
        document.getElementById("guess-result").innerHTML = "Please an integer number between 1 and 10!";
        return;
    }

    //Incorrect guess
    if(guessNum !== numToGuess){
        document.getElementById("guess-result").innerHTML = "Incorrect guess! Please try again.";
        window.guesses++;

        //Vibrate device
        navigator.vibrate(1000); //1 second vibration
        return;
    }

    if(guessNum === numToGuess){
        document.getElementById("guess-result").innerHTML = "You guessed the correct number! It took you " + window.guesses + " guesses!";
        window.guesses++;
        return;
    }

}