import { Chat } from "../../../entities/Chat";
import { Message } from "../../../entities/Message";
import User from "../../../entities/User";
import { SendMessageMutationArgs, SendMessageResponse } from "../../../types/graph";
import { Resolvers } from "../../../types/resolvers";
import privateResolver from "../../../utils/privateResolver";

export const resolvers: Resolvers = {
    Mutation: {
        SendMessage: privateResolver(
            async(
                _, args:SendMessageMutationArgs, {req, pubSub}
            ): Promise<SendMessageResponse> => {
                const user: User = req.User
                try{
                    const chat = await Chat.findOne({id: args.chatId});
                    if(chat){
                        if(chat.passengerId === user.id || chat.guaderId === user.id){
                            const message = await Message.create({
                                text: args.text,
                                chat,
                                user
                            }).save()
                            pubSub.publish("newChatMessage", {MessageSubscription: message})
                            return{
                                ok: true,
                                error: null,
                                message
                            }
                        }else{
                            return{
                                ok: false,
                                error: `Unauthorized`,
                                message: null
                            }
                        }
                    }else{
                        return{
                            ok: false,
                            error: `Chat not found`,
                            message: null
                        }
                    }
                }catch(error){
                    return{
                        ok: false,
                        error: error.message,
                        message: null
                    }
                }
            }
        )
    }
}