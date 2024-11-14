const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

app.use(cors());
app.use(express.json());

console.log(process.env.DB_USER);

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
    // Connect the client to the server
    await client.connect();
    const database = client.db("coffesDB");
    const haiku = database.collection("coffeee");

    app.get('/coffee',async(req,res)=>{
        const cursor=haiku.find();
        const result=await cursor.toArray();
        res.send(result);
    })

    app.get('/coffee/:id',async(req,res)=>{
        const id=req.params.id;
        const query={_id:new ObjectId(id)};
        const result=await haiku.findOne(query);
        res.send(result)
    })

    app.put(`/coffee/:id`,async(req,res)=>{
        const id=req.params.id;
        const filter={_id:new ObjectId(id)};
        const options={upsert:true};
        const updatedCoffee=req.body;

        const Coffee={
            $set:{
                name:updatedCoffee.name,
                quantity:updatedCoffee.quantity,
                supplier:updatedCoffee.supplier,
                taste:updatedCoffee.taste,
                details:updatedCoffee.details,
                category:updatedCoffee.category,
            }
        }

        const result=await haiku.updateOne(filter,Coffee,options);
        res.send(result)
    })

    // Endpoint to add a new coffee
    app.post('/coffee', async (req, res) => {
      const newCoffee = req.body;
      console.log(newCoffee);
      const result = await haiku.insertOne(newCoffee);
      res.send(result);
    });

    app.delete('/coffee/:id',async(req,res)=>{
        const id=req.params.id;
        const query={_id:new ObjectId(id)}
        const result=await haiku.deleteOne(query);
        res.send(result);
    })

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
  }
}

run().catch(console.dir);

// Root endpoint
app.get('/', (req, res) => {
  res.send('Coffee maker server running');
});

app.listen(port, () => {
  console.log(`Coffee server running on port ${port}`);
});
