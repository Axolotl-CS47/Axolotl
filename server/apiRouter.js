const apiRouter = require('express').Router();
const dataController = require('./dataController.js');

// sends post requests of new user to controller for ENTRY INTO the database and returns a response as a property (welcome) on the res.locals object
apiRouter.post('/',
  dataController.postData,
  (req, res) => {
    console.log('the post router is hit')
    res.status(200).json(res.locals.data)
  }
);

// sends requests for existing users to the controller to PULL their info from the database and returns the data as a property (user) on the res.locals object
apiRouter.get('/',
  dataController.getData,
  (req, res) => {
    console.log('the get router is hit')
    res.status(200).json(res.locals.data)
  }
);

// sends requests for existing users to the controller to update their info from the database and returns the UPDATE data as a property (user) on the res.locals object
apiRouter.patch('/',
  dataController.getData,
  dataController.updateData,
  (req, res) => {
    console.log('the patch router is hit')
    res.status(200).json(res.locals.data)
  }
);

// sends requests for existing users to the controller to DELETE their info from the database and returns a message as a property (goodbye) on the res.locals object
apiRouter.delete('/',
  dataController.deleteData,
  (req, res) => {
    console.log('the delete router is hit')
    res.status(200).json(res.locals.data)
  }
);

module.exports = apiRouter;
