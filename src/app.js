const express = require('express');
const app = express();
var cors = require('cors');

// use it before all route definitions
const port =  process.env.PORT || 3000 ;
const notificationRouter = require('../src/routes/NotificationsRouter');

app.use(cors({origin: '*'}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/notifications', notificationRouter);

app.all('/', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
   });

// Page 404
app.get('*', function(req, res){
    res.status(404).send('<h1 style="text-align : center ">PAGE INTROUVABLE </h1>');
  });

app.listen(port, ()=>{
    console.log(`lancement de l'api hamilton241-api sur le port : ${port}`);
})