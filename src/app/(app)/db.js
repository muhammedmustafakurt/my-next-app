const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://han:Mu.28062003@cluster0.tbg6o.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
let client;

async function connectToDB() {
  if (!client) {
    client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    try {
      await client.connect();
      console.log("MongoDB'ye başarıyla bağlanıldı!");
    } catch (err) {
      console.error("MongoDB'ye bağlanırken hata oluştu:", err);
    }
  }
  return client.db("product"); // Veritabanı isminizi girin
}

module.exports = connectToDB;
