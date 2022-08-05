const { initializeApp, cert } = require("firebase-admin/app");
const { getStorage } = require("firebase-admin/storage");
const { v4: uuid_v4 } = require("uuid");
const http = require('http')
const servcieAccoint = require('./adminKey.json');
initializeApp({
    credential:cert(servcieAccoint),
    storageBucket:'gs://my-mini-porject.appspot.com'
})
const filePath = './must.webp';
const bucket = getStorage().bucket();
const upload = async (filePath) =>{
    let uuid = uuid_v4();
    console.log(uuid)
    let data = await bucket.upload(filePath,{
        metadata:{
            metadata:{
                firebaseStorageDownloadTokens: uuid,
            }
        }
    });
    let file = data[0];
    return `https://firebasestorage.googleapis.com/v0/b/${bucket.name}/o/${file.name}?alt=media&token=${uuid}`
}
const getFile = async () =>{
    const pics = await getDocs(collection)
}
const fs = require('fs');
const { collection } = require("firebase/firestore");
const index = fs.readFileSync("index.html", "utf8");
http.createServer(async (req,res)=>{
    res.writeHead(200, { "Content-Type": "text/html" });
   try {
    let url = await upload(filePath);
    res.write(`<img src="${url}" alt="">`)
    console.log(url);
    res.end()
   } catch (error) {
    console.log(error)
   }
}).listen(8080)
upload(filePath);