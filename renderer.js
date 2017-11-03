const { createReadStream } = require('fs')
const { nativeImage } = require('electron')

const path = './babylon.jpg'
let image = nativeImage.createFromPath(path)
console.log(image)
