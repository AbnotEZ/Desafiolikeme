const express = require("express");
const app = express();

app.use(express.json());

const{ getAllPosts, createPost } = require("./services/posts");

// MIDDLEWARE
app.use(express.static(__dirname + "/public/static"));
app.use(express.json());

app.get("/", (req, res) => {
  try {
    res.send();
  } catch (error) {
    res.json({ message: "error 400 Bad Request" });
  }
});

app.get("/posts", async (req, res) => {
    try {
      const getPosts = await getAllPosts();
      res.json(getPosts);
    } catch (error) {
      console.log(error);
    }
  });
  
  app.post("/posts", async (req, res) => {
    try {
      const { titulo, url, descripcion } = req.body;
      await createPost(titulo, url, descripcion);
      res.send("Post creado");
    } catch (error) {
      console.log(error);
    }
  });

app.listen(3000, console.log("SERVER ON 👌"));
