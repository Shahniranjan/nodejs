const yargs = require('yargs');
const notes = require('./notes');


yargs.command({
    command: 'add',
    builder:{
        title : {
            description : 'title name',
            demandOption : true ,
            type : 'string'
        }
    },
    description : 'add the item',
    handler(args) {
       notes.add(args.title , args.body);
    }
});

yargs.command({
    command: 'remove',
    builder:{
        title:{
            description : "title to remove",
            demandOption: true,
            type: 'string'
        }
    },
    description : 'remove the item',
    handler(args) {
        notes.remove(args.title);
    }
});

yargs.command({
    command: 'read',
    builder:{
        title:{
            description : "title to remove",
            demandOption: true,
            type: 'string'
        }
    },
    description : 'list the item',
    handler(args) {
        notes.read(args.title);
    }
});

yargs.command({
    command: 'list',
    description : 'list the item',
    handler() {
        notes.list();
    }
});

yargs.parse();