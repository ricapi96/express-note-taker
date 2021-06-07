// const path = require('path');
// const fs = require('fs');
// const generateUniqueId = require('generate-unique-id');




// module.exports = (app) => {


// app.get('/api/notes', function(req, res) {
//     res.sendFile(path.join(__dirname, '../dp/dp.json'));
// })



// app.post('/api/notes', function(req, res) {
//     let newNote = req.body;
//     const myID = generateUniqueId({
//         length: 5,
//         useLetters: false
//       });
//     newNote.id = myID;
//     console.log(newNote);
//     var data = fs.readFileSync('./data/noteData.json');
//     var myObj = JSON.parse(data);
//     myObj.push(newNote)  
//     newNote = JSON.stringify(myObj);
//     fs.writeFile('./data/noteData.json', newNote, err => {
//         if (err) throw err;
//         console.log('Note Added!');
//     }); 
//     res.json(newNote);
// })


// }