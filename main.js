var flags = [Boolean];
var commands = [String];
var functionStack = Array;

process.argv.forEach((val, index) => {
  console.log(`${index}: ${val}`);
  
  switch(val){
      case "list":
        //List something
        //Next argv is an argument
        //!Unless! there is an '-' in from of it.
        break;
  }
});

const defineFlag = (char, commandOrExecutionPath) => {

}

const defineFunction = (command, functionName, [parameters]) => {

}
