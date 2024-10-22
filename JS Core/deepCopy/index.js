// DeepCopy in JS
function deepCopy(obj) {
  if (typeof obj !== "object" || obj === null) return obj;

  const newObject = Array.isArray(obj) ? [] : {};
  
  for(let key in obj) {
    let value = obj[key]

    newObject[key] = deepCopy(value)
  }
  return newObject
}

const obj1 = {
    a: 1,
    b: 2,
    c: {
        d: 3,
        e: 4
    }
}

const obj2 = deepCopy(obj1)

obj1.c.d = 5

console.log(obj1 === obj2)
