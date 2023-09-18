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

async function fetchUniversitiesByLocation5() {
  try {
    await client.connect();

    const db = client.db(dbName);

    const universities = await db
      .collection("Uni")
      .find({ location: { $regex: /pakistan/i } })
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

module.exports = fetchUniversitiesByLocation5;
