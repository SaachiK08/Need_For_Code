const { MongoClient } = require("mongodb");

// Connection URL
const url =
  "mongodb+srv://Zwar:DarkyWarky@zwardb.1makfjy.mongodb.net/";

// Database Name
const dbName = "Nfc_hackathon";

// Create a new MongoClient
const client = new MongoClient(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function fetchUniversitiesByLocation() {
  try {
    // Connect to the MongoDB server
    await client.connect();

    // Use the appropriate database
    const db = client.db(dbName);

    // Get the "Uni" collection and find documents where location contains "india"
    const universities = await db
      .collection("Uni")
      .find({ location: { $regex: /india/i } })
      .toArray();

    if (universities.length === 0) {
      console.log("No universities found in India.");
    } else {
      return universities;
    }
  } catch (err) {
    console.error("Error fetching data:", err);
  } finally {
    client.close();
  }
}

module.exports = fetchUniversitiesByLocation;
