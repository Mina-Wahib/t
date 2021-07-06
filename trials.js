const fs = require('fs')
const person={
    name:'omr',
    age:19
}
console.log(person)

const personjson = JSON.stringify(person)
console.log(personjson)

fs.writeFileSync('person.json',personjson)


const personObject = JSON.parse(personjson)
console.log(personObject)

personObject.name='adam'
personObject.age=30

const userJson = JSON.stringify(personObject)
fs.writeFileSync('s.json',personjson)
