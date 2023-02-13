var wins=0
var loss=0
var ties=0 
var options =prompt['R', 'P','S' ]

var playgame = function() {
    var userchoice = window.prompt('Enter R,P or S:');

    if (!userchoice) {
        return;
    }
}
var number=math.floor(math.random()*options.length)
var computerchoice= options[number]
window.alert('the pc chose' + computerchoice)

