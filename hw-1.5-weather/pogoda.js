require("dotenv").config()
const chalk = require('chalk')
const http = require('http')


const yargs = require('yargs/yargs')
const {hideBin} = require('yargs/helpers')
const chalk = require('chalk')

const choosen_city = hideBin(process.argv).join(' ');
if(!choosen_city){
    console.log(chalk.red('give the city name, please'))
    exit()
}

const APIWeatherKey = process.env.APIWeatherKey;
const url = `http://api.weatherstack.com/current?access_key=${APIWeatherKey}&query=${encodeURI(choosen_city)}`;

http.get(url,(res)=>{
    const {statusCode} = res;
    if (statusCode !== 200){
        console.log(`statusCode: ${statusCode}`)
        return
    }    
    res.setEncoding('utf8')
    console.log('url',url)    

    let rowData = ''
    res.on('data', (chunk) => rowData += chunk)
    
    res.on('end', () => {
        let parseData = JSON.parse(rowData)
        console.log(parseData)
    })

}).on('error', (err) => {
    console.error(err)
})