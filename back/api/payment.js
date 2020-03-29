const stripeSecretKey = process.env.STRIPE_SECRET_KEY
const router = require('express').Router()
const stripe = require('stripe')(stripeSecretKey)


router.post('/purchase', (req, res) => {

    let total = req.body.total


    stripe.charges.create({
      amount: total,
      source: req.body.stripeTokenId,
      currency: 'usd'
    }).then(function () {
      console.log('Charge Successful')
      res.json({ message: 'Successfully purchased items' })
    }).catch(function () {
      console.log('Charge Fail')
      res.status(500).end()
    })
  
});


module.exports = router;