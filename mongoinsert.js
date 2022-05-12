// Inserting data in mongodb
//show dbs
//use Yash
//show collections
db.items.insertOne({ name: " poco x3", price: 2200, qty: 402, sold: 100 })
db.items.find()
db.items.insertMany([{ name: "Realme 20", price: 2300, qty: 460, sold: 150 }, { name: "Redmi note 4", price: 13000, qty: 300, sold: 10 }])
db.items.deleteOne({ price: 2200 })