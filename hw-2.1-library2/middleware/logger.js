const fs = require('fs')
const os = require('os')

module.exports = (req,res,next)=>{
    const now = Date.now()
    const {url,method} = req; 
    const {title} = req.body
    const data = `${now} ${req.method} ${req.url}, title: ${title}`;
    fs.appendFile('server.log',data+os.EOL,(err)=>{
        if(err) throw err;
    })
    next();
}