// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

// create an express app and have it hosted 
require('dotenv').config();
const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

//SETUP API
// - app config
const app = express();
// - middle wares
app.use(cors({origin:true}))
app.use(express.json());


// - api routes
app.get('/', (req,res) => {
    res.status(200).send("hello world")
})

app.post('/payments/create', async(req,res) => {
    
    // console.log('Payment request receiveedd', total);
    try{
        const total = req.query.total;
        // console.log(typeof total)
        if(parseInt(total) === 0){
            throw new Error("Total can't be 0")
        }
        
        const paymentIntent = await stripe.paymentIntents.create({
            amount: total, //submits unit of currency
            currency: "usd"
        });
    
        res.status(201).send({
            clientSecret: paymentIntent.client_secret,
        })

    }catch(e){
        res.status(401).send({
            e
        })
    }
})

// - listen command
exports.api = functions.https.onRequest(app); //setup needed for backend express running on a cloud function