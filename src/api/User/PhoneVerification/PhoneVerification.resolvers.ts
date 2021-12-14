import { Verification } from "../../../entities/Verification.entity";
import { PhoneVerificationMutationArgs, PhoneVerificationResponse } from "src/types/graph";
import { Resolvers } from "src/types/resolvers";

export const resolvers: Resolvers ={
    Mutation: {
        PhoneVerification: async(
            _, args: PhoneVerificationMutationArgs
        ): Promise<PhoneVerificationResponse> =>{
            const {phoneNumber} = args
            try{
                const existingVerification = await Verification.findOne({payload: phoneNumber});
                if(existingVerification){
                    existingVerification.remove();
                }
                return{
                    ok: true,
                    error: null
                }
            }
            catch(error){
                return{
                    ok: false,
                    error: error.message
                }
            }
        }
    }
}