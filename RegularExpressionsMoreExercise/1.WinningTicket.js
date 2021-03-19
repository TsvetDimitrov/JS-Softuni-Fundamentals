// Lottery is exciting. What is not, is checking a million tickets for winnings only by hand. So,
//  you are given the task to create a program which automatically checks if a ticket is a winner. 
// You are given a collection of tickets separated by commas and spaces. You need to check every one 
// of them if it has a winning combination of symbols.
// A valid ticket should have exactly 20 characters. The winning symbols are '@', '#', '$' and '^'. 
// But in order for a ticket to be a winner the symbol should uninterruptedly repeat for at least 6 times 
// in both the tickets left half and the tickets right half. 
// For example, a valid winning ticket should be something like this: 
// "Cash$$$$$$Ca$$$$$$sh" 
// The left half "Cash$$$$$$" contains "$$$$$$", which is also contained in the tickets right half "Ca$$$$$$sh".
//  A winning ticket should contain symbols repeating up to 10 times in both halves, which is considered a Jackpot 
//  (for example: "$$$$$$$$$$$$$$$$$$$$").
// Input
// The input will be read from the console. The input consists of a single line containing all tickets separated by 
// commas and one or more white spaces in the format:
// •	"{ticket}, {ticket}, … {ticket}"
// Output
// Print the result for every ticket in the order of their appearance, each on a separate line in the format:
// •	Invalid ticket - "invalid ticket"
// •	No match - "ticket "{ticket}" - no match"
// •	Match with length 6 to 9 - "ticket "{ticket}" - {match length}{match symbol}"
// •	Match with length 10 - "ticket "{ticket}" - {match length}{match symbol} Jackpot!"
// Constrains
// •	Number of tickets will be in range [0 … 100]





function winningTicket(arr){

    arr = arr.shift().split(/\s*,\s*/g)

    for (let line of arr) {
      if (line.length !== 20) {
        console.log('invalid ticket')
        continue
      }
  
      let pattern = /(\@{6,}|\${6,}|\^{6,}|\#{6,})/g
      let firstHalf = line.substring(0, line.length / 2).match(pattern)
      let secHalf = line.substring(line.length / 2, line.length).match(pattern)
  
      if (firstHalf !== null && secHalf !== null) {
        let combination
        if (firstHalf[0].length === secHalf[0].length)
          combination = firstHalf[0]
        else if (firstHalf[0].length > secHalf[0].length)
          combination = secHalf[0]
        else
          combination = firstHalf[0]
  
        if (combination.length >= 6 && combination.length <= 9)
          console.log(`ticket "${line}" - ${combination.length}${combination[0]}`)
        else if (combination.length === 10)
          console.log(`ticket "${line}" - ${combination.length}${combination[0]} Jackpot!`)
        else
          console.log(`ticket "${line}" - no match`)
  
      } else
        console.log(`ticket "${line}" - no match`)
    }
}



winningTicket([ 'Cash$$$$$$Ca$$$$$$sh' ]);