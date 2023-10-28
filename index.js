import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename  = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)



let dirPath = path.join(__dirname,"uploads")
let someTxt = path.join(__dirname,"some.txt")
let some1Txt = path.join(__dirname,"some1.txt")
function newPathGiver(directory,filename){
    return path.join(directory,filename);
}
function moveFile(oldPath,newPath){
    fs.rename(oldPath, newPath, function (err) {
        if (err) throw err
        console.log('Successfully renamed - AKA moved!')
      })
}

moveFile(someTxt,newPathGiver(dirPath,"some.txt"))
moveFile(some1Txt,newPathGiver(dirPath,"some1.txt"))