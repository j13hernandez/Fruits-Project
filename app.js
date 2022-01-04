const { MongoClient } = require('mongodb');
// Replace the uri string with your MongoDB deployment's connection string.
const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);
async function run() {
  try {
    await client.connect();
    const database = client.db('fruitsDB');
    const fruits = database.collection('fruits');
    // create a document to insert
    const doc = [
      {
        name: 'Blueberry',
        score: 9,
        review: 'Great blueberries!',
      },
      {
        name: 'Orange',
        score: 8,
        review: 'Enjoyable, but I wish there were more.',
      },
      {
        name: 'Apple',
        score: 5,
        review: 'Apples are ok.',
      },
      {
        name: 'raisins',
        score: 3,
        review: 'EWW!',
      },
    ];
    // insert the document into the collection
    const result = await fruits.insertMany(doc);
    console.log(`${result.insertedCount} document was inserted.`);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
