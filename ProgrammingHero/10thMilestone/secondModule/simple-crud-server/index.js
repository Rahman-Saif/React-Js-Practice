const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

const uri = "mongodb+srv://rahmansaif413:cNbMY2LeNJt6mU4n@cluster0.m4uphyt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

// Connect to MongoDB and define routes
async function connectToDatabase() {
  try {
    // Connect the client to the MongoDB server
    await client.connect();
    console.log("Connected to MongoDB!");

    // Define database and collection
    const database = client.db("userDB");
    const usersCollection = database.collection("users");

    app.get('/users',async(req,res)=>{
        const cursor=usersCollection.find();
        const result=await cursor.toArray();
        res.send(result)
    })

     app.get('/users/:id',async(req,res)=>{
      const id=req.params.id;
      const query={_id:new ObjectId(id)}
      const user=await usersCollection.findOne(query);
      res.send(user)
    })

    // POST route to add a new user
    app.post('/users', async (req, res) => {
      const user = req.body;
      console.log('new user', user);
      
      try {
        const result = await usersCollection.insertOne(user);
        res.send(result);
      } catch (error) {
        console.error("Error inserting user:", error);
        res.status(500).send({ error: "Failed to insert user" });
      }
    });

   

    app.delete('/users/:id',async(req,res)=>{
        const id=req.params.id;
        console.log('please delete',id);
        const query={_id:new ObjectId(id)}
        const result=await usersCollection.deleteOne(query);
        res.send(result)


    })

    app.put('/users/:id',async(req,res)=>{
      const id=req.params.id;
      const user=req.body;
      console.log(updatedUser)
      const filter={_id:new ObjectId(id)}
      const option={upsert:true};

      const updatedUser={
        $set:{
          name:user.name,
          email:user.email
        }
      }

      const result= await usersCollection.updateOne(filter,updatedUser,option);
      res.send(result)
    })
    
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}



// Basic GET route
app.get('/', (req, res) => {
  res.send('Simple CRUD is running!');
});

// Start the server after connecting to the database
connectToDatabase().then(() => {
  app.listen(port, () => {
    console.log(`Simple CRUD server is running on port ${port}`);
  });
}).catch((error) => {
  console.error("Failed to start server:", error);
});
