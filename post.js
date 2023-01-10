const { Pool } = require("pg");

const config ={
    host: "localhost",
    user: "postgres",
    password: "Alesana1",
    database: "likeme",
    allowExitOnIdle: true, 
}
const pool = new Pool(config);

    const getPosts = async () => {
        const { rows } = await pool.query("SELECT * FROM posts");
        return rows;
        };
    
        const addPost = async (titulo, url, descripcion) => {
            const query = "INSERT INTO posts VALUES (DEFAULT, $1, $2, $3, 0)";
            const values = [titulo, url, descripcion];
            const result = await pool.query(query, values);
            console.log("Post agregado");
          };

          const addLike = async (id) => {
            const query = "UPDATE posts SET likes = likes + 1 WHERE id = $1";
            const values = [id];
            const result = await pool.query(query, values);
          };
          
          const deletePost = async (id) => {
            const query = "DELETE FROM posts WHERE id = $1";
            const values = [id];
            const result = await pool.query(query, values);
          };
          
          module.exports = { addPost, getPosts, addLike, deletePost };