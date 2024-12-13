const express=require('express');
const cors=require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app=express();
require('dotenv').config()
const port=process.env.PORT||5000;

//middleware
app.use(cors());
app.use(express.json());

//assignment10


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.m4uphyt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

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

    const database = client.db("coffesDB");
    const haiku = database.collection("coffeee");

    app.post('/coffee',async(req,res)=>{
        const newCoffee=req.body;
        console.log(newCoffee);

        const result = await haiku.insertOne(newCoffee);
        res.send(result)

    })
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


app.get("/",(req,res)=>{
    res.send("Coffee Making Server is running!")
})

app.listen(port,()=>{
    console.log(`coffee server running at ${port}`)
})