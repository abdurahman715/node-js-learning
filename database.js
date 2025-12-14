const { MongoClient } = require("mongodb");
const url = "mongodb+srv://Muhammed:kl53j5868@cluster0.m6axrlu.mongodb.net/";
const client = new MongoClient(url);
const dbName = "helloworld";
async function main() {
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("user");
  return "done";
}
main()
  .then(console.log)
  .catch(console.err)
  .finally(() => client.close());
