const express = require("express");
const app = express();
const port = 3001;
const bodyParser = require("body-parser");
const db = require("./dbConnect");
const cors = require("cors");

app.use(express.static("/"));
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
  res.end();
});

app.get("/api/cows", (req, res) => {
  db.query(`SELECT * FROM COWS`, (err, data) => {
    if (err) console.log(err);
    else {
      let cowResults = data.map(({ name, description }) => {
        return { name, description };
      });
      //   cowResults = JSON.stringify(cowResults);
      res.send(cowResults);
    }
  });
});

//need to test functionality
app.put("api/cows", (req, res) => {
  let cowSelector = req.body.name;
  let cowDescriptionChanger = req.body.description;
  db.query(
    "UPDATE cows SET description = ${cowDescriptionChanger} WHERE name=${cowSelector}"
  );
  res.send("updated cow");
});

app.post("/api/cows", (req, res) => {
  let cowName = req.body.name;
  let cowDescription = req.body.description;
  console.log(cowName, cowDescription);
  db.query(
    `INSERT INTO cows(name, description) VALUES("${cowName}","${cowDescription}")`,
    error => {
      console.log(error);
    }
  );
  res.send("a cow post");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// Create a RESTful API for a resource named `cows` that responds to the following endpoints:

// | intention           | request type | request url | request body                              | side effect                    | response body                                                                    |
// |---------------------|:------------:|-------------|-------------------------------------------|--------------------------------|----------------------------------------------------------------------------------|
// | read all cow data   | GET          | `/api/cows` | none                                      | none                           | `[{name: 'Buttercup', description: '...'}, {name: 'Daisy', description: '...'}]` |
// | create new cow data | POST         | `/api/cows` | `{name: 'Milkshake', description: '...'}` | creates new record in database | `{name: 'Milkshake', description: '...'}`                                        |

// Your web server should 100% be interfacing with a database for this phase. Confirm this functionality is working properly with Postman (recommended) or via the `curl` command in your terminal.
