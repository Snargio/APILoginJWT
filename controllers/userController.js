const User = require('../models/User');
const bcrypt = require('bcryptjs');
const ErrorEmailPassword = 'Email or password incorrect';

const userController = {
    register: async function ( req, res ){
         
        const selectedUser = await User.findOne({email:req.body.email})
        
        if(selectedUser){
            return res.status(400).send('Email já existente.')
        }

        const user = new User
        ({
             name: req.body.name,
             email: req.body.email,
             password: bcrypt.hashSync(req.body.password) // usando hashSync para criptografia da senha.
        })
 
        try {
            const savedUser = await user.save()
            res.send(savedUser)
        } catch (error) {
            res.status(400).send(error)
        }
     

    },

    login: async function  ( req, res ){

        const selectedUser = await User.findOne({email:req.body.email})
        
        if(!selectedUser) return res.status(400).send(ErrorEmailPassword)


        const passwordUserMetch = bcrypt.compareSync(req.body.password, selectedUser.password) // aqui estamos usando o compareSync é um método do bcrypt para "descriptografia"
         if (!passwordUserMetch) return res.status(400).send(ErrorEmailPassword)


        res.send("User logged")
    }
}

module.exports =  userController 