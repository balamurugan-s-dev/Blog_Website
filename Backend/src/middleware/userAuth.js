import jwt from 'jsonwebtoken'
import env from '../config/envConfig.js';

const userAuth = async(req, res, next) => {
    const {token} = req.cookies;

    if(!token) {
        return res.status(403).json({status:false, message: "Not authenticated"})
    }

    const tokenverify = jwt.verify(token, env.JWT_SECRET)
    if(!tokenverify){
        return res.status(403).json({stauts:false, message: "Not authenticated"})
    }

    next()
}

export default userAuth