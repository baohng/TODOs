import express from 'express';

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));


//GET HOMEPAGE
app.get("/", (req, res) => {
  res.render('index.ejs');
});

//POST
let todoList = [];
app.post("/work", (req, res) => {
  let userNote = req.body['inputNote'];
  if (userNote != null) {
    todoList.push(userNote);
  }
  res.render('index.ejs', {
    notes : todoList,
  });
});

app.listen(port, () => {
  console.log(`Server is running at port: ${port}`);
});