const fs = require('fs');
const chalk = require('chalk');

const loaddata = ()=>{
    try {
        const jsondata = fs.readFileSync('notes.json').toString();
        return JSON.parse(jsondata);
    }
    catch (e) {
        return [];
    }
};
const savedata=(notes)=>{
    const notesdata = JSON.stringify(notes);
    fs.writeFileSync('notes.json',notesdata);
};

const add =(title,body)=>{
  const notes = loaddata();
  let duplicate = notes.filter((note)=> note.title === title);
  if (duplicate.length===0){
      notes.push({title : title, body : body});
      savedata(notes);
      console.log(chalk.green.inverse('successfully added'));
  }else {
      console.log(chalk.red.inverse('title taken'));
  }
};

const remove = (title)=>
{
    const notes = loaddata();
    const keepdata = notes.filter((note)=>note.title !== title);
    (keepdata.length!==notes.length ? console.log(chalk.red.inverse('item removed')): console.log('item not found'));
    savedata(keepdata);
};

const read = (title)=>{
    const notes= loaddata();
    const readnotes = notes.find((note)=>note.title === title);
    console.log(readnotes);
};

const list = ()=>{
  const  notes = loaddata();
  notes.forEach((note)=>console.log(note.title));
};

module.exports={
  add : add,
  remove:remove,
  read :read,
    list:list
};