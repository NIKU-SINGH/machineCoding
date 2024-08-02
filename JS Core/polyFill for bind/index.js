let name = {
	firstname: "Lionel",
	lastname: "Messi",
}
let printName = function (number, club) {
	console.log(`${this.firstname} ${this.lastname} has scored ${number} for ${club}`)
}
let func = printName.bind(name,100,"Argentina")
func()
// Polyfill for bind Implementation
// As every function in js has access to Bind method so we can add newBind method to Function prototype
Function.prototype.newBind = function(...args) {
    let obj = this

    // As the first element in args array is the object on which we want to call the function simiolar to call, apply and bind
    let objContext = args[0]
    
    // rest other papramas can be extracted as
    let params = args.slice(1)

    // As printName.bind () returns a function which can be used later so we will return a function from newBind method

    // args2 is required to pass the arguments to the function returned from newBind method i.e func2("Argentina")
    return function(...args2) {
        // When we call fun() printName function is called, but how do we get printName(), since newBind is called on
        // printName function so this will refer to printName function
        // Now we need to call the printName function with the object passed in newBind method
        obj.apply(objContext,[...params,...args2])
    }
}
let func2 = printName.newBind(name,100)
func2("Argentina")

