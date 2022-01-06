import { Between, getRepository } from "typeorm";
import User from "../../../entities/User";
import { GetNearbyGuaderResponse } from "../../../types/graph";
import { Resolvers } from "../../../types/resolvers";
import privateResolver from "../../../utils/privateResolver";

export const resolvers: Resolvers = {
    Query: {
        GetNearbyGuader: privateResolver(
            async(_, __, {req}): Promise<GetNearbyGuaderResponse> => {
                const user: User = req.user
                const {lastLat, lastLng} = user
                try{
                    const guaders: any[] = await getRepository(User).find({
                        isWalking: true,
                        lastLat: Between(lastLat - 0.05, lastLat + 0.05),
                        lastLng: Between(lastLng - 0.05, lastLng + 0.05)
                    })
                    return{
                        ok: true,
                        error: null,
                        guaders
                    }
                }catch(error){
                    return{
                    ok: false,
                    error: null,
                    guaders: null
                }
                }
            }
        )
    }
}