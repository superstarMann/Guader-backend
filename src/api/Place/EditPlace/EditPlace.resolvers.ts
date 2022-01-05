import { cleanNullArgs } from "../../../utils/cleanNullArgs";
import { Place } from "../../../entities/Place.entity";
import User from "../../../entities/User.entity";
import { EditPlaceMutationArgs, EditPlaceResponse } from "../../../types/graph";
import { Resolvers } from "../../../types/resolvers";
import privateResolver from "../../../utils/privateResolver";

export const resolvers: Resolvers = {
    Mutation: {
        EditPlace: privateResolver(
            async(
                _, args: EditPlaceMutationArgs, {req}
            ): Promise<EditPlaceResponse> => {
                const user: User = req.User
                try{
                    const place = await Place.findOne({id: args.placeId})
                    if(place){
                        if(place.userId === user.id){
                            const notNull = cleanNullArgs(args);
                            await Place.update({id: args.placeId}, {...notNull});
                            return{
                                ok: true,
                                error: null
                            }
                        }else{
                            return{
                                ok: false,
                                error: "Not Authorized"
                            }
                        }
                    }else{
                        return{
                            ok: false,
                            error: 'Place not Found'
                        }
                    }
                }catch(error){
                    return{
                        ok: false,
                        error: error.message
                    }
                }
            }
        )
    }
}