// Exemple

const jwt = require('jsonwebtoken');

const secret = "9928436422633911854" // secret é a palavra secreta que está sendo passada 


function createToken(){

const user = { 
    id:"20",
    name:"João",
    username:"Joazinho20cm@gmail.com",
    password: "123457"
}

const token = jwt.sign( {id:user.id, name:user.name , username:user.username}, secret, {expiresIn: 60} )

console.log(token);

}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                  *VERIFICAR TOKEN*

function verificToken(token){

try {
     const validData = jwt.verify(token, secret)
     console.log(validData); 
} catch (error) {
     console.log(error);
}




}

verificToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjIwIiwibmFtZSI6Ikpvw6NvIiwidXNlcm5hbWUiOiJKb2F6aW5obzIwY21AZ21haWwuY29tIiwiaWF0IjoxNjY5Njk2MjcxLCJleHAiOjE2Njk2OTYzMzF9.2sVyOAgw5ZpXn0HOKjPZCd4YvVL3guhuGXWpYdtTOTo")