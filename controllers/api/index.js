const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const postRoutes = require('./post-routes');
const commentRoutes = require('./comment-routes');
const propPage = require('./property-route');
const landlordPage = require('./landlord-routes');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);
router.use('/properties', propPage);
router.use('/landlords', landlordPage);

module.exports = router;