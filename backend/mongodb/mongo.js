const fs = require('fs');

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://admin:admin@portfoliocluster.8oseeyj.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

//write a function to addMany documents in json format to mongodb collection
async function addMany(collection, documents) {
  try {
    const result = await collection.insertMany(documents);
    console.log(`${result.insertedCount} documents were inserted`);
  } finally {
  }
}


async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");

    const dataToInsert = [
      {
        "skill": "React",
        "img": { reactIcon },
        "description": "this is react description"
      },
      {
        "skill": "Express",
        "img": { expressIcon },
        "description": "this is express description"
      },
      {
        "skill": "Node",
        "img": { nodeIcon },
        "description": "this is node description"
      },
      {
        "skill": "MongoDB",
        "img": { mongoIcon },
        "description": "this is mongo description"
      },
      {
        "skill": "HTML",
        "img": { htmlIcon },
        "description": "this is html description"
      },
      {
        "skill": "CSS",
        "img": { cssIcon },
        "description": "this is css description"
      },
      {
        "skill": "JavaScript",
        "img": { jsIcon },
        "description": "this is javascript description"
      },
      {
        "skill": "C/C++",
        "img": { cppIcon },
        "description": "this is C/C++ description"
      },
      {
        "skill": "Python",
        "img": { pythonIcon },
        "description": "this is python description"
      },
      {
        "skill": "Swift",
        "img": { swiftIcon },
        "description": "this is swift description"
      },
      {
        "skill": "Posgress",
        "img": { mongoIcon },
        "description": "this is posgress description"
      },
      {
        "skill": "Git",
        "img": `${fs.readFileSync("../skillsLogo/")}`,
        "description": "this is git description"
      }
    ];

  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);