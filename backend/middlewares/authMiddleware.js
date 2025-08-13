import jwt from 'jsonwebtoken';
import expressAsyncHandler from 'express-async-handler';
import User from '../model/userModel.js';

export const protect = expressAsyncHandler(async (req, res,next) => {
    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try {
            // Get token from header
            token = req.headers.authorization.split(' ')[1];

            // Verify Token
            const decoded = jwt.verify(token,process.env.JWT_SECRETE)

            // Get User from the Token
            req.user = await User.findById(decoded.id).select('-password');
            next();

        } catch (error) {
            console.log(error.message);
            res.status(401);
            throw new Error('NOT Authorized');
        }
    }

    if(!token){
        res.status(401);
        throw new Error('NOT Authorized, No Token');
    }
})