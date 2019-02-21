import { Router } from 'express';
var router = Router();

import UserService from "./user-service";

router.post('/signin', function (req, res, next) {  
  let userService = new UserService();
  let result = userService.signIn(req.body);
  result
    .then(response => res.send(response))
    .catch(err => res.status(500).send(err))
});

router.post('/signup', function (req, res, next) {  
  let userService = new UserService();
  let result = userService.signUp(req.body);
  result
    .then(response => res.send(response))
    .catch(err => res.status(500).send(err))
});

router.get('/', function (req, res, next) {
  let userService = new UserService();
  let result = userService.getAll(req.query.page, req.query.pagesize);
  result
    .then(items => res.send({ status: true, data: items }))
    .catch(error => res.status(500).send({ status: false, message: error }));
});

router.get('/checkusername/:username', function (req, res, next) {
  let userService = new UserService();
  let { username } = req.params;
  let result = userService.isUsernameAvailable(username);
  result
    .then(isAvailable => {
      (!isAvailable) ?
        res.send({ status: false, message: "Username is already taken" }) :
        res.send({ status: true });
    })
    .catch(error => {
      res.status(500).send(error)
    });
});

router.get('/:id', function (req, res, next) {
  let userService = new UserService();
  let { id } = req.params;
  let result = userService.get(id);
  result
    .then(user => res.send({ status: true, data: user }))
    .catch(error => res.status(500).send({ status: false, message: error.message || error }));
});

router.post('/', function (req, res, next) {
  let userService = new UserService();
  let result = userService.addUser(req.body);
  result
    .then(response => res.send(response))
    .catch(err => res.status(500).send(err))
});

router.post('/:id', function (req, res, next) {
  let userService = new UserService();  
  let user = { id: req.params.id, ...req.body };
  let result = userService.updateUser(user);
  result
    .then(response => res.send(response))
    .catch(err => res.status(500).send(err))
});

router.post('/updateaddresses/:id', function (req, res, next) {
  let userService = new UserService();  
  let addresses = { id: req.params.id, data: req.body };  
  let result = userService.updateAddressesByUserId(addresses);
  result
    .then(response => res.send(response))
    .catch(err => res.status(500).send(err))
});

router.delete('/:id', function (req, res, next) {
  let userService = new UserService();
  let result = userService.deleteUser(req.params.id);
  result
    .then(response => res.send(response))
    .catch(err => res.status(500).send(err));
});

export default router;
