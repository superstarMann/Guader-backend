import privateResolver from "../../../utils/privateResolver";
import { Resolvers } from "../../../types/resolvers";

export const resolvers: Resolvers = {
    Query: {
        GetMyProfile: privateResolver(async (
            _, __, {req}
        ) => {
            const {user} = req;
            return{
                ok: true,
                error: null,
                user
            }
        })
    }
}