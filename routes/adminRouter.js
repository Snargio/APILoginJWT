const express = require('express')
const router = express.Router();

const auth = require('../controllers/authController')


router.get('/', auth, (req , res ) => {


   if( req.user.admin ){   
     res.send('esse dado só deve ser visto pelo admin')
   }else{
     res.status(401).send("Not admim: fela da puta não entra, Acces Denied")
   }


})

module.exports = router;
