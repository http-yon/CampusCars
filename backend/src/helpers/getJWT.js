import jwt from 'jsonwebtoken';
const generateJwt =  (uid= '') =>{
    return new Promise ((resolve, reject)=>{
        const payload = {uid};

        jwt.sign(payload,process.env.JWT, {
            expiresIn : '5h'
        }, (err, token)=>{
            if (err){
                console.log(err);
                reject ('Error al generar jwt')
            } else {
                resolve (token)
            }
        })
    })
}
export default generateJwt;