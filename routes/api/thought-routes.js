const router = require('express').Router();
const {
    getAllThought,
    getThoughtById,
    createThought,
    updateThought,
    createReaction, 
    deleteReaction,
    deleteThought
} = require('../../controllers/thought-controller');

// /api/thoughts
router
    .route('/')
    .get(getAllThought); // get all thoughts 


// /api/thoughts/<thoughtId>
router
    .route('/:thoughtId')
    .get(getThoughtById) // get single thought by id 
    .put(updateThought); // update a thought 


// /api/thoughts/<userId>
router
    .route('/:userId')
    .post(createThought); // create a thought 

// /api/thoughts/<userId>/<thoughtId>
router
    .route('/:userId/:thoughtId')
    .put(createReaction) // create a reaction to a thought 
    .delete(deleteThought); // delete a thought 


// /api/thoughts/:userId/:thoughtId/:reactionId    
router
    .route('/:userId/:thoughtId/:reactionId') 
    .delete(deleteReaction);  // delete a reaction

module.exports = router; 