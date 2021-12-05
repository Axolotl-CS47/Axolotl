const path = require('path');
const express = require('express');
const app = express();
// const port = process.env.Port;
const apiRouter = require('./apiRouter.js');
const PORT = 3000;
 

//parses request body to json format
app.use(express.urlencoded({extended:true}));
app.use(express.json());


app.use(express.static(path.resolve(__dirname, '../client')));

//route-handler
app.use('/api', apiRouter);

//catch-all error route handler
app.use((req, res) => res.status(404).send('This is not the page you\'re looking for'));

//global error handler
app.use((err, req, res, next) =>{
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error', 
    status: 500, 
    message: { err: 'An error occurred blahblahblah this is the global error handler' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
module.exports = app;





