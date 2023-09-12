const yargs = require("yargs/yargs");
const {hideBin} = require("yargs/helpers");
const chalk = require('chalk');
const fs = require("fs");
const path = require("path");

const fn = {
    if_file_exist:function(fileFullPath,callback){
        fs.access(fileFullPath, fs.F_OK, (err) => {
            callback(!err)     
        }) 
    }
}

yargs(hideBin(process.argv))
.alias('help','h')
.command({
    command:'show',    
    describe:'Показывает содержание файла',
    builder:{
        file:{type:'string',demandOption:true, describe:'название файла (без расширения)'},
    },
    handler:(args)=>{
        if(!args.file){
            console.log(chalk.red('название файла не может быть пустым'))
        }else{
            const fileName= `${args.file}.json`;
            const p = path.join(__dirname,fileName)
            fn.if_file_exist(p,(mode)=>{
                if(!mode){
                    console.log(chalk.red(`файл с именем ${fileName} не найден`))
                }else{
                    fs.readFile(p,'utf-8',(err,content)=>{
                        if(err) throw new Error(err)
                        console.log(chalk.green(content))
                    })
                }
            })
            
        }        
    }
})
.parse()