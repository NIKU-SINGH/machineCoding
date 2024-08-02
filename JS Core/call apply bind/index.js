let user = {
  firstName: "John",
  sayHi() {
    console.log(`Hello, ${this.firstName}!`);
  },
};

//   Without binding
let greet = user.sayHi;
user.sayHi();
greet();
setTimeout(user.sayHi, 1000);
setTimeout(() => user.sayHi(), 1000);


  let sayHi = user.sayHi.bind(user)
  sayHi()
  setTimeout(sayHi,1000)

user = {
  sayHi() {
    console.log("This is new def");
  },
};

let name = {
	firstname: "Lionel",
	lastname: "Messi",
}

let printName = function (number, club) {
	console.log(`${this.firstname} ${this.lastname} has scored ${number} for ${club}`)
}

// call method
printName.call(name,300,"Barcelona")

// Apply method
printName.apply(name,[100,"PSG"])

// Bind mehtod
let func = printName.bind(name)
func(100,"Argentina")