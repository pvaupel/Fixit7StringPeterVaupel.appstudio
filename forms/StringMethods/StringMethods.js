
//create and displays variable quoteString
let quoteString = "Failure is simply the opportunity to begin again this time more intelligently."
  alert(`The quote string is: ${quoteString}`)
  
//changes variable to upper case and displays
let upperCaseString = quoteString.toUpperCase()
  alert(`Upper case string is: ${upperCaseString}`)
  
//creates and displays variable for author of the quote
let authorString = "- Henry Ford"
  alert(`The author is: ${authorString}`)
  
//adds the author string to the end of quote string and displays
let completeString = quoteString.concat(authorString)
  alert(`The string in quoteString is: ${completeString}`)
  
//creates a second quote variable and displays
let secondQuote = "Talent is cheaper than table salt. What separates the talented individual from the successful one is a lot of hard work. - Stephen King"
  alert(`The second quote is: ${secondQuote}`)
  
//changes the variable to lower case and displays
let lowerCaseString = secondQuote.toLowerCase()
  alert(`Lower case string is: ${lowerCaseString}`)

//finds character in the 3rd position of  secondQuote
let thirdPosition = secondQuote.charAt(2)
  alert(`The character at location 3 is ${thirdPosition}.`)

//creates new variable findString which seperates the quote into an array of strings
let findString = secondQuote.split(`. `)
  console.log(`${findString}`)
  
// stores the removed string in this new variable
let removedString = findString.splice(1,1)
  alert(`The removed string is: ${removedString}`)
  
//stores and displays the adjusted second quote
let wantedSecondQuote = secondQuote.replace("What separates the talented individual from the successful one is a lot of hard work.","")
  alert(`The second quote is now: ${wantedSecondQuote}`)
  