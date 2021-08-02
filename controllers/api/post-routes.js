const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Post, Tenant, Comment, Rating } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
    Post.findAll({
        attributes: [
            'id',
            'post_url',
            'title',
            'created_ at',
            // [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = rating.post_id)'), 'rating_count']
        ],
        // order: [['created_at', 'DESC']],
        include: [/* Include Models */
            {
                model: Comment,
            },
            {
                model: Tenant,
            }
        ]
    })
        .then(dbPostData => res.json(dbPostData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/:id', (req, res) => {
    Post.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'post_url',
            'title',
            'created_ at',
            // [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = rating.post_id)'), 'rating_count']
        ],
        // order: [['created_at', 'DESC']],
        include: [/* Include Models */
            {
                model: Comment,
            },
            {
                model: Tenant,
            }
        ]
    })
        .then(dbPostData => {
            if (!dbPostData) {
                res.status(404).json({ message: 'No post found with this id' });
                return;
            }
            res.json(dbPostData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.post('/', (req, res) => {
    Post.create({ // might need updating
        title: req.body.title,
        post_url: req.body.post_url,
        user_id: req.body.user_id
    })
        .then(dbPostData => res.json(dbPostData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// 

// router.put('/upvote', (req, res) => {
//     // custom static method created in models/Post.js
//     Post.upvote(req.body, { Rating, Comment, User })
//         .then(updatedRateData => res.json(updatedRateData))
//         .catch(err => {
//             console.log(err);
//             res.status(500).json(err);
//         });
// });

router.put('/:id', (req, res) => {
    Post.update(
        {
            title: req.body.title
        },
        {
            where: {
                id: req.params.id
            }
        }
    )
        .then(dbPostData => {
            if (!dbPostData) {
                res.status(404).json({ message: 'No post found with this id' });
                return;
            }
            res.json(dbPostData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.delete('/:id', (req, res) => {
    Post.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbPostData => {
            if (!dbPostData) {
                res.status(404).json({ message: 'No post found with this id' });
                return;
            }
            res.json(dbPostData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;