import readline from "node:readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let savedAnswer;

rl.setPrompt("Which programming language do you prefer? ");
rl.prompt();

rl.on("line", (answer) => {
  savedAnswer = answer;
  console.log(`Your preferred language is ${savedAnswer}`);
  rl.close();
});

console.log("savedAnswer", savedAnswer);

// const aaa = "";
// getAnswer("What is your favorite language", answerCallback);

// This code is sample how to wait for callback to be executed before continue
//initialize a global var to control the callback state
// var callbackCount = 0;
// //call the function that has a callback
// someObj.executeCallback(function () {
//     callbackCount++;
//     runOtherCode();
// });
// someObj2.executeCallback(function () {
//     callbackCount++;
//     runOtherCode();
// });

// //call function that has to wait
// continueExec();

// function continueExec() {
//     //here is the trick, wait until var callbackCount is set number of callback functions
//     if (callbackCount < 2) {
//         setTimeout(continueExec, 1000);
//         return;
//     }
//     //Finally, do what you need
//     doSomeThing();
// }
