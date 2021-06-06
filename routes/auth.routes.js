const {Router} = require('express');
const jwt = require('jsonwebtoken');
const {check, validationResult} = require('express-validator');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const config = require('config');

const router = Router();

// /api/auth/register
router.post(
  '/regiter',
  [
    check('email', 'Wrong email').isEmail(),
    check('password', 'Password must be at least 8 characters and num').isLength({min: 8}).matches(/\d/)
  ],
  async (req, res) => {
  try{
    const errors = validationResult(req);

    if (!errors.isEmpty()){
      return res.status(400).json({
        errors: errors.array(),
        message: 'Некоректные данные при регистрации'
      })
    }

    const {email, password, confirmPassword} = req.body

    const candidate = await User.findOne({email})

    if(!candidate) {
      return res.status(400).json({
        message: 'Такой пользователь существует'
      })
    }

    if(password===confirmPassword) {
      return res.status(400).json({
        message: 'Пароли не совподают'
      })
    }

    const hachedPassword = await bcrypt.hash(password, 15)

    const user = new User({
      email,
      password: hachedPassword,
    })

    await user.save()

    res.status(201).json({message: 'Пользователь создан'})
     

  } catch (e) {
    res.status(500).json({
      message: 'Что то пошло не так'
    })
  }
});

// /api/auth/login
router.post(
  '/login', 
  [
    check('email', 'Wrong email').normalizeEmail().isEmail(),
    check('password', 'Enter password').exists()
  ],
  async (req, res) => {
  try {

    const errors = validationResult(req);

    if (!errors.isEmpty()){
      return res.status(400).json({
        errors: errors.array(),
        message: 'Некоректные данные при входе '
      })
    }

    const {email, password} = req.body

    const user = await User.findOne({email});

    if(!user) {
      return res.status(400).json({message: 'Пользователь с таким email не найден'})
    }

    const isMatch = await bcrypt.compare(password, user.password) 

    if(!isMatch) {
      res.status(400).json({message: 'Неверный пароль'})
    }

     const token = jwt.sign(
       {userId: user.id},
       config.get('jwtSecretKey'),
       {expiresIn: '1h'}
     )

     res.json({token, userId: user.id })

  } catch (e) {
    res.status(500).json({
      message: 'Что то пошло не так'
    })
  }
});

module.exports = router