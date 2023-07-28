import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

//app.use(express.static("public"));

//GET HOMEPAGE
app.get("/", (req, res) => {
  res.render('index.ejs');
});

app.listen(port, () => {
  console.log(`Server is running at port: ${port}`);
});