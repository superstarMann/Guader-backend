import { Verification } from "../../../entities/Verification.entity";
import { PhoneVerificationMutationArgs, PhoneVerificationResponse } from "src/types/graph";
import { Resolvers } from "../../../types/resolvers";
import { sendVerificationSMS } from "../../../utils/sendSMS";

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
                const newVerification = await Verification.create({
                    payload: phoneNumber,
                    target: "PHONE"
                }).save()
                console.log(newVerification)
                await sendVerificationSMS(newVerification.payload, newVerification.key)
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