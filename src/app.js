const express = require('express');
const app = express();
const port =  process.env.PORT || 3000 ;
const notificationRouter = require('../src/routes/NotificationsRouter');

app.use(express.json());
app.use('/notifications', notificationRouter);

// Page 404
app.get('*', function(req, res){
    res.status(404).send('<h1 style="text-align : center ">PAGE INTROUVABLE </h1>');
  });

app.listen(port, ()=>{
    console.log(`lancement de l'api hamilton241-api sur le port : ${port}`);
})