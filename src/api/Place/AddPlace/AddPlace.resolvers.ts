import { Place } from "../../../entities/Place.entity";
import User from "../../../entities/User.entity";
import { AddPlaceMutationArgs, AddPlaceResponse } from "../../../types/graph";
import { Resolvers } from "../../../types/resolvers";
import privateResolver from "../../../utils/privateResolver";

export const resolvers: Resolvers = {
    Mutation:{
        AddPlace: privateResolver(
            async( _, args: AddPlaceMutationArgs, {req} ):Promise<AddPlaceResponse> => {
                const user: User = req.user;
                 try{
                    await Place.create({ ...args, user}).save();
                     return{
                         ok: true,
                         error: null
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