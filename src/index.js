const express = require("express");
const bodyParser = require("body-parser");

//const {sendBasicEmail} = require('./services/email-service');

const {PORT} = require('./config/serverConfig');

const TicketController = require('./controllers/ticket-controller');

const jobs = require('./utils/job');

const setupAndStartServer = async()=> {
      const app = express();

      app.use(bodyParser.json());
      app.use(bodyParser.urlencoded({extended:true}));

      app.post('/api/v1/tickets',TicketController.create);


      app.listen(PORT,()=> {
        console.log(`Server started at ${PORT}`);
        jobs();
      //  sendBasicEmail(
      //    'support@admin.com',
      //    'sksingh8278@gmail.com',
      //    'This is a testing email',
      //    'Hey, how are you I hope you like the support'
      //  );
      });
}

setupAndStartServer();