const uuid = require('uuid')

class Book{
    constructor(opt){
        this.id = uuid();                
        this.update(opt)
        return this;
    } 
    update(opt){
        this.title = opt.title || "";
        this.description = opt.description || "";
        this.authors = opt.authors || "";
        this.favorite = opt.favorite || "";
        this.fileCover = opt.fileCover || "";
        this.fileName = opt.fileName || "";        
        return this;
    }
}

module.exports = Book;