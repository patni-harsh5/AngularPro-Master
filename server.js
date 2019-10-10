const Express = require("express");
const BodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
var _ = require("underscore");
var cors = require('cors');

const CONNECTION_URL =
  "mongodb+srv://admin:admin1234@cluster0-h5u5j.mongodb.net/test?retryWrites=true&w=majority";

const DATABASE_NAME = "Frontexample";
var app = Express();
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));
var database, collection;
//------------>>>
// app.get("/", function(req, res) {
//   res.render("index");
// });
app.use(cors());
app.use(BodyParser.json());

// app.set("view engine", "ejs");
// app.set("views", __dirname + "/views");
// app.set("view options", { layout: false });
// app.use(BodyParser.urlencoded({ extended: true }));

//------------------------>>>>>>

app.post("/person", (request, response) => {
  collection.insert(request.body, (error, result) => {
    if (error) {
      return response.status(500).send(error);
    }
    response.send(result.result);
  });
});

app.get("/people", (request, response) => {
  collection.find({}).toArray((error, result) => {
    if (error) {
      return response.status(500).send(error);
    }
    response.send(result);
  });
});

app.get("/", (request, response) => {
  collection.find({}).toArray((error, result) => {
    if (error) {
      return response.status(500).send(error);
    }
    response.render("index.ejs", { data: result });
  });
});

app.listen(3000, () => {
  MongoClient.connect(
    CONNECTION_URL,
    { useNewUrlParser: true },
    (error, client) => {
      if (error) {
        throw error;
      }
      database = client.db(DATABASE_NAME);
      collection = database.collection("people");
      console.log("Connected to `" + DATABASE_NAME + "`!");
    }
  );
});
