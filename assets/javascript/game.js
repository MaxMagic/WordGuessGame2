/*
Display the following on the page:


Press any key to get started!


Wins: (# of times user guessed the word correctly).


If the word is madonna, display it like this when the game starts: _ _ _ _ _ _ _.


As the user guesses the correct letters, reveal them: m a d o _ _ a.


Number of Guesses Remaining: (# of guesses remaining for the user).


Letters Already Guessed: (Letters the user has guessed, displayed like L Z Y H).


After the user wins/loses the game should automatically choose another word and make the user play it.

*/
var words = ["marty", "doc", "delorean"];

var game = {
    start: function(){
        document.getElementById("textBox").innerText("Press any key to get started!");
        document.onkeyup(this.play());
    },
    play: function(){
        var number = Math.floor(Math.random() * 2);
        var answer = words[number].split("");
        
    }
}