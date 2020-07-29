const functions = require('firebase-functions');
const app = require('express')();
const admin = require('firebase-admin');
admin.initializeApp();
const db = admin.firestore();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });


const getAllProducts = (request, response) => {
  db.collection("product").where('isactive', '==', true).get()
  .then((data) => {
    if(data.empty) {
      return response.json({error: "There is no data"})
    }
    const products = [] 
    data.forEach(doc => {
      products.push(doc.data())
    })
    return response.json(products)
  })
  .catch((err) => {
    console.error(err);
    return response.status(500).json({ error: err});
  });
}

app.get('/products', getAllProducts);
exports.api = functions.https.onRequest(app);