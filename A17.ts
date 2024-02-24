let guests4 = ["Ammi", "Sabeen", "Anabia"]

console.log(guests4[0], "! You are invited to dinner.")

console.log(guests4[1], "! You are invited to dinner.")

console.log(guests4[2], "! You are invited to dinner. \n\n")

console.log(guests4[0], "can't make to the dinner. \n\n")

guests4 = ["Nammi", "Sabeen", "Anabia"]

console.log(guests4[1], "! You are invited to dinner.")

console.log(guests4[2], "! You are invited to dinner.")

console.log("\n\nWe found a bigger dinner table.")

guests4.unshift('Ammi')

guests4.splice(2,0,"Addi")

guests4.push("Mami")

console.log(guests4[0], "! You are invited to dinner.")
console.log(guests4[1], "! You are invited to dinner.")
console.log(guests4[2], "! You are invited to dinner.")
console.log(guests4[3], "! You are invited to dinner.")
console.log(guests4[4], "! You are invited to dinner.")
console.log(guests4[5], "! You are invited to dinner.")

console.log("\nWe can only invite two people for dinner.\n")

console.log(guests4.splice(0,1), "! We are sorry we can't invite you to the dinner.")
console.log(guests4.splice(0,1), "! We are sorry we can't invite you to the dinner.")
console.log(guests4.splice(0,1), "! We are sorry we can't invite you to the dinner.")
console.log(guests4.splice(0,1), "! We are sorry we can't invite you to the dinner.\n\n")

console.log(guests4[0], "! You are still invited.")
console.log(guests4[1], "! You are still invited.")

guests4.splice(0,1)
guests4.splice(0,1)

console.log(guests4)
