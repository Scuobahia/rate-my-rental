const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Post, Tenant, Comment, Rating, Properties } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
   Properties.findAll({
      attributes: {}
   })
      .then(dbPropertyData => res.json(dbPropertyData))
      .catch(err => {
         console.log(err)
      });
});

router.get('/:id', (req, res) => {
   Properties.findOne({
      attributes: [],
   })
      .then(dbPropertyData => {
         if (!dbPropertyData) {
            res.status(404).json({ message: 'No property found with this id' });
            return;
         }
         res.json(dbPropertyData);
      })
      .catch(err => {
         console.log(err);
         res.status(500).json(err);
      });
});

router.post('/', withAuth, (req, res) => {
   Properties.create({
      // update
   })
      .then(dbPropertyData => {
         if (!dbPropertyData) {
            res.status(404).json({ message: 'No property found with this id' });
            return;
         }
         res.json(dbPropertyData);
      })
      .catch(err => {
         console.log(err);
         res.status(500).json(err);
      });
});

router.put('/', withAuth, (req, res) => {
   Properties.update({
      // update
   })
      .then(dbPropertyData => {
         if (!dbPropertyData) {
            res.status(404).json({ message: 'No property found with this id' });
            return;
         }
         res.json(dbPropertyData);
      })
      .catch(err => {
         console.log(err);
         res.status(500).json(err);
      });
});

router.delete('/:id', withAuth, (req, res) => {
   Properties.destroy({
      where: {
         id: req.params.id
      }
   })
      .then(dbPropertyData => {
         if (!dbPropertyData) {
            res.status(404).json({ message: 'No property found with this id' });
            return;
         }
         res.json(dbPropertyData);
      })
      .catch(err => {
         console.log(err);
         res.status(500).json(err);
      });
});

module.exports = router;