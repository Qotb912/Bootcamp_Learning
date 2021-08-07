const express = require('express');
const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser
}=require('../controllers/user');

const router = express.Router({mergeParams:true});
 
 // import models  
 const User = require('../models/User');
 // import advancedResults
 const advancedResults = require('../middleware/advancedResults');
 const {protect,authorize} = require('../middleware/auth');
 
 router.use(protect); 
 router.use(authorize('admin'));

router
 .route('/')
 .get(advancedResults(User),getUsers)
 .post(createUser);

 router
 .route('/:id')
 .get(getUser)
 .put(updateUser)
 .delete(deleteUser);


 module.exports =router;