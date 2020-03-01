const express = require("express");
const app = express();
const port = 3001;
const bodyParser = require("body-parser");
const db = require("./dbConnect");

app.use(express.static("/"));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
  res.end();
});

app.get("/api/cows", (req, res) => {
  //return all cow data in response into JSON object, with db.query
  res.send("a cow get");
});

app.post("/api/cows", (req, res) => {
  console.log(typeof req.body);
  //   console.log(req);
  let cowName = req.body.name;
  let cowDescription = req.body.description;
  console.log(cowName, cowDescription);
  //insert data into cow table with db.query
  db.query(
    `INSERT INTO cows(name, description) VALUES("${cowName}","${cowDescription}")`,
    error => {
      console.log(error);
    }
  );
  res.send("a cow post");
});

// db.query(
//     `INSERT INTO messages(message) VALUES("${newMessage}")`,
//     (error, data) => {
//       if (error) callback(error);
//       else {
//         // console.log("postdata", data);
//         callback(null, data);
//       }
//cowRequest body: {name:'cowname', description:'the description of the cow'}

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// Create a RESTful API for a resource named `cows` that responds to the following endpoints:

// | intention           | request type | request url | request body                              | side effect                    | response body                                                                    |
// |---------------------|:------------:|-------------|-------------------------------------------|--------------------------------|----------------------------------------------------------------------------------|
// | read all cow data   | GET          | `/api/cows` | none                                      | none                           | `[{name: 'Buttercup', description: '...'}, {name: 'Daisy', description: '...'}]` |
// | create new cow data | POST         | `/api/cows` | `{name: 'Milkshake', description: '...'}` | creates new record in database | `{name: 'Milkshake', description: '...'}`                                        |

// Your web server should 100% be interfacing with a database for this phase. Confirm this functionality is working properly with Postman (recommended) or via the `curl` command in your terminal.
