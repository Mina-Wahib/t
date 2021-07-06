// const { Console } = require('console')
// const fs = require('fs')
// fs.writeFileSync('notes.txt','helloo')
// console.log(fs.readFileSync('notes.txt').toString())
// fs.appendFileSync('notes.txt',' mano')
// console.log(fs.readFileSync('notes.txt').toString())

// const x = require('./data')
// console.log(x.name1)
// console.log(x.name2)
// console.log(x.sum(5,5)) 


// const validator = require('validator')
// console.log(validator.isEmail('farah'))

// const chalk = require('chalk')
// console.log(chalk.blue.red.bold('hello farah'))


// console.log(process.argv)

const yargs = require('yargs')
const notes = require('./notes')

yargs.command({
    command: 'add',
    describe: 'add notes',
    builder: {
        title: {
            describe: 'this is title to our note',
            demandoption: true,
            type: 'string'
        },

        body: {
            describe: 'this is body to our note',
            demandoption: true,
            type: 'string'

        }

    },

    handler: (argv) => {
       notes.addNote(argv.title,argv.body)
    }
})


yargs.command({
    command: 'delete',
    describe: 'Delete notes',
    builder: {
        title: {
            describe: 'this is title to our note',
            demandoption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        notes.addNote(argv.title)
    }
})

yargs.command({
    command: 'read',
    describe: 'Read notes',
    builder: {
        title: {
            describe: 'this is title to our note',
            demandoption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        notes.addNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'List notes',
    handler: (argv) => {
        notes.addNote(argv.title)
    }
})

console.log(yargs.argv)
// yargs.parse()