const router = require('express').Router();

const tenantRoutes = require('./tenant-routes.js');
const postRoutes = require('./post-routes');
const commentRoutes = require('./comment-routes');
const properyRoutes = require('./property-route');
const landlordRoutes = require('./landlord-routes');

router.use('/tenants', tenantRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);
router.use('/properties', properyRoutes);
router.use('/landlords', landlordRoutes);

module.exports = router;