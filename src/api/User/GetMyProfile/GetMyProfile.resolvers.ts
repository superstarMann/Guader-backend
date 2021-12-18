import { Resolvers } from "../../../types/resolvers";

export const resolvers: Resolvers = {
    Query: {
        GetMyProfile:async(_, args, {req}) => {
            const {user} = req;
            return{
                ok: true,
                error: null,
                user
            }
        }
    }
}