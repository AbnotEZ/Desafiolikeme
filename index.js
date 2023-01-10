const { getPosts , addPost , addLike, deletePost } = require("./post");

const express = require('express');
const app = express();

const cors= require('cors');


const PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(express.json());
app.use(cors());

app.get("/posts", async (req, res) => {
  const posts = await getPosts();
  res.json(posts);
  });

  app.post("/posts", async (req, res) => {
    try {
      const { titulo, url, descripcion } = req.body;
      await addPost(titulo, url, descripcion);
      res.send("Post agregado");
    } catch (error) {
      res.status(500).send(error);
    }
  });

  app.put("/posts/like/:id", async (req, res) => {
    const { id } = req.params;
    try {
      await addLike(id);
      res.send("Like agregado");
    } catch (error) {
      res.status(500).send("Error! No se pudo agregar el like.");
    }
  });
  
  app.delete("/posts/:id", async (req, res) => {
    const { id } = req.params;
    await deletePost(id);
    res.send("Post eliminado");
  });


app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html")
});

app.listen(PORT, console.log("SERVER ON ✌"));