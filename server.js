console.log("Hello Noder!");

const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");
// const uniqId = require("uniqid");
const PORT = process.env.PORT || 5500;
const dbFile = require("./db/db.json");
app.use(express.static("./public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Home route
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./public", "index.html"));
});

// Notes route
app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "./public", "notes.html"));
});

//route to get database
app.get("/api/notes", (req, res) => {
    res.json(require("./db/db.json"));
  });
  
  //route for database posting
  app.post("/api/notes", (req, res) => {
    const newNote = req.body;
    // const id = uniqId();
    console.log("Crating a new note.");
    // newNote.id = id;
    dbFile.push(newNote);
    console.log(dbFile);
    fs.writeFile("./db/db.json", JSON.stringify(dbFile), (err) =>
      err ? console.error(err) : res.redirect("/notes")
    );
  });
  
//   Delete route
  app.delete("/api/notes/:id", (req, res) => {
    let jsonFilePath = path.join(__dirname, "/db/db.json");
  
    for (let i = 0; i < dbFile.length; i++) {
      if (dbFile[i].id == req.params.id) {
        dbFile.splice(i, 1);
      }
    }
  
    fs.writeFileSync(jsonFilePath, JSON.stringify(dbFile), (err) => {
      if (err) {
        return console.log(err);
      } else {
        console.log("Note deleted.");
      }
    });
    res.json(dbFile);
  });
  


app.listen(PORT, () => {
    console.log(`App listening on: ${PORT}`);
});