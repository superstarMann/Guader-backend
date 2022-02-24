import Place from "../../../entities/Place";
import User from "../../../entities/User";
import { AddPlaceMutationArgs, AddPlaceResponse } from "../../../types/graph";
import { Resolvers } from "../../../types/resolvers";
import privateResolver from "../../../utils/privateResolver";

export const resolvers: Resolvers = {
    Mutation:{
        AddPlace: privateResolver(
            async( _, args: AddPlaceMutationArgs, {req} ):Promise<AddPlaceResponse> => {
                const user: User = req.user;
                 try{
                   const newPlace = await Place.create({ ...args, user}).save();
                   if(newPlace){
                       return{
                           ok: true,
                           error: null,
                           placeId: newPlace.id
                       }
                   }else{
                       return{
                           ok: false,
                           error: `Create Place Failed`,
                           placeId: null
                       }
                   }
                 }catch(error){
                     return{
                         ok: false,
                         error: error.message,
                         placeId: null
                     }
                 }
            }
        )
    }
}