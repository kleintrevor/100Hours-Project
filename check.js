
const MongoClient = require('mongodb').MongoClient;

const uri = "mongodb+srv://trevorklein:Winter%40%401@mod.hckgiq0.mongodb.net/?retryWrites=true&w=majority&appName=MoD";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(async (err) => {
  if (err) {
    console.error(err);
    return;
  }

  const db = client.db("test"); // Replace "test" with your actual database name
  const count = await db.collection("users").find({ department: "Make & Pack" }).count();
  console.log("Number of users in Make & Pack department:", count); // Display the count
  // ... (your other script logic)

  client.close();
});