var wins=0;
var loss=0;
var ties=0;
var options =['R', 'P', 'S' ];

var playgame = function() {
    var userChoice = window.prompt('Enter R, P or S:');

    if (!userChoice) {
        return; 
    }


var index = Math.floor(Math.random() * options.length)
var computerchoice= options[index]
window.alert('the pc chose' + computerchoice)

if (userChoice==computerchoice){
    ties++,
    window.alert( 'its a tie!');
}
else if(
       (userChoice==='R'&& computerchoice==='P')||
       (userChoice==='P'&& computerchoice==='S')||
       (userChoice==='S'&& computerchoice==='R')
){
       loss++;
       window.alert('computer wins')
} else{
        wins++
        window.alert('you win!')
}
window.alert(
    'stats:\nwins: ' + wins + '\nlosses: ' +loss + '\nTies: ' +ties 
)
var playagain=window.confirm('play again?')
if(playagain){
    playgame()
}
}
playgame()