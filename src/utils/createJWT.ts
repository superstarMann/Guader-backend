import jwt from 'jsonwebtoken';

export const createJWT = (id: number) => {
    const token = jwt.sign(
        {id}, process.env.JWT_TOKEN || ""
    )
    return token
}