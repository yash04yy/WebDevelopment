// searching for data in mongodb
db.items.find({ price: 2200 })
db.items.find({ price: { $gte: 10000 } })
db.items.find({ price: { $gt: 10000 } })
    // and operator
db.items.find({ price: { $gte: 2000 }, qty: { $gt: 400 } })
    //or operator
db.items.find({ $or: [{ price: { $gte: 2000 } }, { qty: { $gt: 400 } }] })
    //selecting a component
db.items.find({ price: { $gt: 10000 } }, { price: 1 })