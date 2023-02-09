import readline from "node:readline";

interface IReadlineCallbackProps {}
const getInput = (question: string) => {
  const rl = readline.createInterface(process.stdin, process.stdout);
  rl.question(question, (answer) => {
    console.log(answer);
    return answer;
  });

  //return answer;
};

export default getInput;
