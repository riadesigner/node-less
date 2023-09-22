const yargs = require('yargs/yargs')

yargs(process.argv.slice(2))
.array('all')
.command({
    command:'add',
    handler:(args)=>{
        if(!args.all){
            console.log("give me --all  flag")
            return;
        }
        console.log(args)
    }
})
.parse()