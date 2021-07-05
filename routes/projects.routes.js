const {Router} = require('express');
const Project = require('../models/Project');
const User = require('../models/User');

const router = Router();


///api/project
router.post('/data', async (req, res)=>{
  try{

    const email = 'puxa561740@gmail.com';
    // const {email} = req.body;
    // console.log(email)

    const user = await User.findOne({email});

    res.json({userId: user.id })

  } catch (e) {
    res.status(500).json({
      message: 'Что то пошло не так !!!!'
    })
  }
});

router.get('/', async (req, res)=>{
  try{
    const project = await Project.find({owner: null})
    res.json(project)
    

  } catch (e) {
    res.status(500).json({
      message: 'Что то пошло не так'
    })
  }
});

router.get('', async (req, res)=>{
  try{
    
    

  } catch (e) {
    res.status(500).json({
      message: 'Что то пошло не так'
    })
  }
});

module.exports = router;