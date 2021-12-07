const apiRouter = require('express').Router();
const dataController = require('./dataController.js');
const path = require('path');

// sends post requests of new user to controller for ENTRY INTO the database and returns a response as a property (welcome) on the res.locals object
apiRouter.post('/',
  dataController.postData,
  (req, res) => {
    console.log('the POST router is hit')
    return res.status(200).json(res.locals.data)
  }
);

// apiRouter.get('./indexMap.js', express.static)

// sends requests for existing users to the controller to PULL their info from the database and returns the data as a property (user) on the res.locals object
// apiRouter.get('/loadMap',
//   dataController.getMap,
//   (req, res) => {
//     // console.log(req)
//     console.log('the GETMAP router is hit')
//     // return res.status(200).sendFile(path.resolve(__dirname, '../client/indexMap.html'));
//     return res.status(302).sendFile(path.resolve(__dirname, '../client/indexMap.html'));
//     // res.status(200).json(res.locals.data)
//     // return res.status(307).redirect(path.resolve(__dirname, '../client/indexMap.html'));
//     // return res.redirect(307, '../client/indexMap.js');
//     // return res.send('HelloWorld');
//   }
// );


// sends requests for existing users to the controller to PULL their info from the database and returns the data as a property (data) on the res.locals object
apiRouter.get('/',
  dataController.getData,
  (req, res) => {
    console.log('the GET router is hit')
    return res.status(200).json(res.locals.data)
  }
);

// sends requests for existing users to the controller to update their info from the database and returns the UPDATE data as a property (user) on the res.locals object
apiRouter.patch('/',
  dataController.getData,
  dataController.updateData,
  (req, res) => {
    console.log('the PATCH router is hit')
    return res.status(200).json(res.locals.data)
  }
);

// sends requests for existing users to the controller to DELETE their info from the database and returns a message as a property (goodbye) on the res.locals object
apiRouter.delete('/',
  dataController.deleteData,
  (req, res) => {
    console.log('the DELETE router is hit')
    return res.status(200).json(res.locals.data)
  }
);

module.exports = apiRouter;
