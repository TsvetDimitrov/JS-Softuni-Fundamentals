// You have plenty of free time, so you decide to write a program that conceals and reveals your received messages. 
// Go ahead and type it in! 
// On the first line of the input you will receive the concealed message. After that, until the "Reveal" command is given,
//  you will be receiving strings with instructions for different operations that need to be performed upon the concealed
//   message in order to interpret it and reveal its true content. There are several types of instructions, split by ":|:"
// •	InsertSpace:|:{index}
// o	Inserts a single empty space at the given index. The given index will always be valid.
// •	Reverse:|:{substring}
// o	If the message contains the given substring, cut it out, reverse it and add it at the end of the message. 
// o	If not, print "error". 
// o	This operation should replace only the first occurrence of the given substring if 
// there are more than one such occurrences.
// •	ChangeAll:|:{substring}:|:{replacement} 
// o	Changes all occurrences of the given substring with the replacement text.
// Input / Constraints
// •	On the first line, you will receive a string with message.
// •	On the next lines, you will be receiving commands, split by ":|:".
// Output
// •	After each set of instructions, print the resulting string. 
// •	After the "Reveal" command is received, print this message:
// "You have a new text message: {message}"




function secretChat(input) {

  let text = input.shift();
  let line;


  while ((line = input.shift()) !== `Reveal`) {

    let [command, ...args] = line.split(":|:");


    if (command == "ChangeAll") {
      let [textTochange, replacement] = args;

      let i = text.indexOf(textTochange);

      while (i !== -1) {
        text = text.substring(0, i) + replacement + text.substring(i + textTochange.length);
        i = text.indexOf(textTochange);
      }
    } else if (command === "InsertSpace") {

      text = text.substring(0, args) + " " + text.substring(args);

    } else if (command === "Reverse") {

      if (text.includes(args)) {
        let a = args[0];
        let i = text.indexOf(a);
        let reversed = a.split("").reverse().join("");
        text = text.substring(0, i) + text.substring(i + a.length) + reversed;
      } else {
        console.log("error");
        continue;
      }
    }

    console.log(text);

  }
  console.log(`You have a new text message: ${text}`);
}

secretChat([
  'heVVodar!gniV',
  'ChangeAll:|:V:|:l',
  'Reverse:|:!gnil',
  'InsertSpace:|:5',
  'Reveal'
]);