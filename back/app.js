var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose')
var indexRouter = require('./api/index');
var usersRouter = require('./api/user');
var mailRouter = require('./api/mail');
var paymentRouter = require('./api/payment');
var Product = require('./api/product')
var Publication = require('./api/publication')
var Categorie = require('./api/categorie')

const passport = require('passport');
const ejs = require('ejs');

const paypal = require('paypal-rest-sdk');

require('dotenv').config()

paypal.configure({
  'mode': 'sandbox', //sandbox or live
  'client_id': 'ASuNsF6Qz_ZbQbEiZWdLkDg7o99axdgskBj4rAndK_tFOZtk4JmYYb7MzUMfU6xWAqpEdzlYiOgiicRj',
  'client_secret': 'EMK43qF05tmQh1nGZD4b5aouPc0t4qO48sWdiFXaUCkswDrAoR8TrnIZB6XrPUWDghF5POXsWOUi_E5h'
});
var app = express();


var server = require('http').Server(app);
var io = require('socket.io')(server);


//mongoDb connexion
mongoose.set('useCreateIndex', true)
mongoose
  .connect(process.env.DB_CONNEXION_STRING, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log('DB Connected!'))
  .catch(err => {

    console.log("DB Connection err" + err.message);
  });

app.use('/uploads', express.static('uploads'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => res.render('index'));

//CORS bypass
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//initializes the passport configuration.
app.use(passport.initialize());
//imports our configuration file which holds our verification callbacks and things like the secret for signing.

require('./config/passport-config')(passport);


app.post('/pay', (req, res) => {
  const create_payment_json = {
    "intent": "sale",
    "payer": {
      "payment_method": "paypal"
    },
    "redirect_urls": {
      "return_url": "http://localhost:3000/success",
      "cancel_url": "http://localhost:3000/cancel"
    },
    "transactions": [{
      "item_list": {
        "items": [{
          "name": "Red Sox Hat",
          "sku": "001",
          "price": "25.00",
          "currency": "USD",
          "quantity": 1
        }]
      },
      "amount": {
        "currency": "USD",
        "total": "25.00"
      },
      "description": "Hat for the best team ever"
    }]
  };

  paypal.payment.create(create_payment_json, function (error, payment) {
    if (error) {
        throw error;
    } else {
        for(let i = 0;i < payment.links.length;i++){
          if(payment.links[i].rel === 'approval_url'){
            res.redirect(payment.links[i].href);
          }
        }
    }
  });
  
  });


  app.get('/success', (req, res) => {
    const payerId = req.query.PayerID;
    const paymentId = req.query.paymentId;
  
    const execute_payment_json = {
      "payer_id": payerId,
      "transactions": [{
          "amount": {
              "currency": "USD",
              "total": "25.00"
          }
      }]
    };
  
    paypal.payment.execute(paymentId, execute_payment_json, function (error, payment) {
      if (error) {
          console.log(error.response);
          throw error;
      } else {
          console.log(JSON.stringify(payment));
          res.send('Success');
      }
  });
  });
  
  app.get('/cancel', (req, res) => res.send('Cancelled'));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/mail', mailRouter);
app.use('/buy', paymentRouter);
app.use('/product', Product);
app.use('/publication', Publication);
app.use('/categorie', Categorie);


//This simply adds socket.io to res in our event loop
app.use(function (req, res, next) {
  res.io = io;
  next();
});


socketEvents = require('./socketEvents')
socketEvents(io)


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = { app: app, server: server };
