import User from "../entities/User.entity";
import jwt from 'jsonwebtoken';

export const decodeJWT = async(token: string): Promise<User | undefined> => {
    try{
        const decoded: any = jwt.verify(token, process.env.JWT_TOKEN || "");
        const {id} = decoded
        const user = await User.findOne({id})
        return user;
    }catch(error){
        return undefined
    }
}