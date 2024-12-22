const express=require('express');
const cors=require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();
const app=express();
app.use(cors());
const port=process.env.PORT||5000;



const uri = "mongodb+srv://rahmansaif413:saifrahman@cluster0.m4uphyt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");

    const database=client.db('milestone11');
        const jobsCollection=database.collection('conceptual');
        const bidsCollection=database.collection('bids');

    app.get('/jobs',async(req,res)=>{
        const result=await jobsCollection.find().toArray();
        res.send(result);

    })

  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})

app.get('/',(req,res)=>{
    res.send('Hello World!');
})

