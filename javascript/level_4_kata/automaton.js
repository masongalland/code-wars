function Automaton()
{
   this.states = ["q1", "q2", "q3"];
}

Automaton.prototype.readCommands = function(commands)
{
  // Return true if we end in our accept state, false otherwise.
  let endingState = "q1";
  for(let i = 0; i < commands.length; i++){
      switch(endingState){

        case "q1":
            endingState = commands[i] === "0" ? "q1" : "q2"
            break;
        case "q2":
            endingState = commands[i] === "0" ? "q3" : "q2"
            break;
        case "q3":
            endingState = "q2"
            break;
        default:
            return "error"
      }
  }
  if(endingState === "q2"){
      return true
  }
  return false;
}

var myAutomaton = new Automaton();

// Do anything necessaryto set up your automaton's states, q1, q2, and q3.


myAutomaton.readCommands(["1", "0", "0", "1", "0"])