const {Router} = require('express');
const User = require('../models/User');
const About = require('../models/AboutUser');
const Project = require('../models/Project');
const SocialLinks = require('../models/SocialLinks');
const auth = require('../middleware/auth.middleware');

const router = Router();

//api/user/data/change/aboutUser

router.post(
  '/change/about',
  auth,
  async (req, res) => {
    try{
      //  const changes = await About
    } catch (e) {
      res.status(500).json({
        message: 'Что то пошло не так в дата'
    })
  }
  }
);

router.post(
  '/change/project',
  auth,
  async (req, res) => {
    try{
      //  const changes = await About
    } catch (e) {
      res.status(500).json({
        message: 'Что то пошло не так в дата'
    })
  }
  }
);

router.post(
  '/change/sociallinks',
  auth,
  async (req, res) => {
    try{
      
      const links = await SocialLinks.findOne({owner: req.user.id})
      if(!links) {
        const socialLinks = new SocialLinks({
          ...req.body
        });
        await socialLinks.save();
        const linksNew = await SocialLinks.findOne({owner: req.user.id})
        res.status(201).json({linksNew});
      }
      
      await links.collection.drop();
      const socialLinks = new SocialLinks({
        ...req.body
      });

      await socialLinks.save();
        const linksNew = await SocialLinks.findOne({owner: req.user.id})
        res.status(201).json({linksNew});
      
    } catch (e) {
      res.status(500).json({
        message: 'Что то пошло не так в дата'
    })
  }
  }
);

router.get(
  '/',
  async (req, res) => {
    try{
      let email = req.headers.email ? req.headers.email : 'puxa561740@gmail.com'

      const user = await User.find({ email });
      const links = await SocialLinks.find({owner: user.id});
      const project = await Project.find({owner: user.id});
      const about = await About.find({owner: user.id});

      const data = {
        links,
        project,
        about
      }
      res.status(201).json({data})
    } catch (e) {
      res.status(500).json({
        message: 'Что то пошло не так в дата'
    })
  }
  }
)

module.exports = router;

