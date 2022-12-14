const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const ErrorEmailPassword = 'Email or password incorrect';


const {loguinValidate, registerValidate} = require('./validate')


const userController = {
    register: async ( req, res ) => {
         

        const {error} = registerValidate(req.body)
        if (error){ return res.status(400).send(error)}

   

        const selectedUser = await User.findOne({email:req.body.email})
        
        if(selectedUser){
            return res.status(400).send('Email já existente.')
        }

        const user = new User
        ({
             name: req.body.name,
             email: req.body.email,
             password: bcrypt.hashSync(req.body.password) // usando bcrypt.hashSync para criptografia da senha.
        })
 
        try {
            const savedUser = await user.save()
            res.send(savedUser)
        } catch (error) {
            res.status(400).send(error)
        }
     

    },

    login: async ( req, res ) => {


        const {error} = loguinValidate(req.body)
        if (error){ return res.status(400).send(error)}


        const selectedUser = await User.findOne({email:req.body.email})
        
        if(!selectedUser) return res.status(400).send(ErrorEmailPassword)


        const passwordUserMetch = bcrypt.compareSync(req.body.password, selectedUser.password) // aqui estamos usando o compareSync é um método do bcrypt para "descriptografia"
         if (!passwordUserMetch) return res.status(400).send(ErrorEmailPassword)


         const token = jwt.sign({_id: selectedUser._id, admin: selectedUser.admin }, process.env.TOKEN_SECRET ) // está pegando o id e usando como token
         
         res.header('authorization-token', token) // passando o token por meio do header da req.
         res.send("User logged")
    }
}

module.exports =  userController 