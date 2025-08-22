// Convert Full Name to Initials

function aN(name){
  let parts = name.split(" ")
  let first = parts [0][0]
  let second = parts [1][0]
  first = first.toUpperCase()
  second = second.toUpperCase()
  let initials = (first + "." +second)
 return initials
}
console.log(aN("Biplob islam"))