import { Router } from 'express';
var router = Router();

/* GET Users page. */
router.get('/', function(req, res, next) {
  res.render('users', { title: 'Users' });
});

export default router;
