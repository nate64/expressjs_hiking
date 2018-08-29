var express = require('express');
var router = express.Router();
var Hiking = require('../models').Hiking;

var Hiking = [
  { id: 1, title: 'Mt. Oly' },
  { id: 2, title: 'Kings Peak' },
  { id: 3, title: 'Shenanigans' }
]

/* GET movie listings. */
// router.get('/', function(req, res) {
//   Hiking.all()
//     .then( function(hiking) {
//       return res.render('hiking', { hiking: hiking });
//   })
// });

router.get('/:id/edit', function(req, res) {
  Hiking.findById(req.params.id)
    .then( function(hiking) {
      return res.render('edit', { hiking: hiking });
  });
});

/* POST add movie listing */
router.post('/', function(req, res) {
  var title = req.body.title;
  Hiking.create({ title: title })
    .then( function() {
      res.redirect('/hiking');
  });
});

router.delete('/:id', function(req, res) {
  Hiking.findById(req.params.id)
    .then( function(hiking) {
      hiking.destroy()
    })
    .then( function() {
      return res.redirect('/hiking');
  });
});

router.put('/:id', function(req, res) {
  Hiking.update(
    { title: req.body.title },
    { where: { id: req.params.id } }
  )
  .then( function() {
    return res.redirect('/hiking');
  })
});

module.exports = router;