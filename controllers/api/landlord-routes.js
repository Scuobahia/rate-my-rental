const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Post, Tenant, Comment, Rating, Properties, Landlord } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
   Landlord.findAll({
      attributes: [],
      include: [
         {
            model: Properties,
         },
         {
            model: Tenant,
            // attributes: ['username']
         }
      ]
   })
      .then(dbLandLordData => res.json(dbLandLordData))
      .catch(err => {
         console.log(err);
         res.status(500).json(err);
      });
});

router.get('/:id', (req, res) => {
   Landlord.findOne({
      attributes: [],
      include: [
         {
            model: Properties,
         },
         {
            model: Tenant,
            attributes: ['username']
         }
      ]
   })
      .then(dbLandLordData => {
         if (!dbLandLordData) {
            res.status(404).json({ message: 'No landlord found with this id' });
            return;
         }
         res.json(dbLandLordData);
      })
      .catch(err => {
         console.log(err);
         res.status(500).json(err);
      });
});

router.post('/', withAuth, (req, res) => {
   Landlord.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
   })
      .then(dbLandLordData => res.json(dbLandLordData))
      .catch(err => {
         console.log(err);
         res.status(500).json(err);
      });
})

router.put('/:id', withAuth, (req, res) => {
   Landlord.update(req.body, {
        individualHooks: true,
        where: {
          id: req.params.id
        }
   })
      .then(dbLandLordData => {
         if (!dbLandLordData) {
            res.status(404).json({ message: 'No landlord found with this id' });
            return;
         }
         res.json(dbLandLordData);
      })
      .catch(err => {
         console.log(err);
         res.status(500).json(err);
      });
})

router.delete('/:id', withAuth, (req, res) => {
   Landlord.destroy({
      where: {
         id: req.params.id
      }
   })
      .then(dbLandLordData => {
         if (!dbLandLordData) {
            res.status(404).json({ message: 'No Landlord found with this id' });
            return;
         }
         res.json(dbLandLordData);
      })
      .catch(err => {
         console.log(err);
         res.status(500).json(err);
      });
});

module.exports = router;