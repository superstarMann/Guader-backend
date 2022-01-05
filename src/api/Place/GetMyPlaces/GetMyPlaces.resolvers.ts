import User from "../../../entities/User.entity"
import { GetMyPlacesResponse } from "../../../types/graph";
import { Resolvers } from "../../../types/resolvers";
import privateResolver from "../../../utils/privateResolver";

export const resolvers: Resolvers = {
    Query:{
        GetMyPlaces: privateResolver(
            async( _, __, {req} ): Promise<GetMyPlacesResponse> => {
                try{
                    const user = await User.findOne(
                        { id: req.user.id },
                        { relations: ["places"] }
                        );
                        if (user) {
                            return {
                              ok: true,
                              places: user.places,
                              error: null
                        };
                    }else{
                        return{
                            ok: false,
                            error: 'User not Found',
                            places: null
                        }
                    }
                }catch(error){
                    return{
                        ok: false,
                        error: null,
                        places: null
                    }
                }
            }
        )
    }
}