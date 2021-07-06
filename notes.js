const fs = require('fs')

const addNote =(title,body)=>{
    const notes = loadNotes()

    notes.push({
        title,
        body,
    })

    saveNotes(notes)

}

const loadNotes = () =>{
    try {
        const databuffer = fs.readFilesync('notes.jason').tostring()
        return JSON.parse(databuffer)
    }
    catch(e){
        return [];
    }
}



const saveNotes = (notes)=>{
    const saveData = JSON.stringify(notes)
    fs.writeFileSync('notes.json',saveData)
    console.log(fs.readFileSync('notes.json').toString())
}

module.export  = {
    addNote
}