import { withFilter } from "graphql-yoga";
import { Chat } from "../../../entities/Chat";
import User from "../../../entities/User";

export const resolver = {
    Subscription: {
        MessageSubscription: {
            subscribe: withFilter(
                (_, __, {pubSub}) => pubSub.asyncIterator("newChatMessage"),
                async (payload, _, {context}) => {
                    const user: User = context.user;
                    const {
                        MessageSubscription: {
                            chatId
                        }
                    } = payload;
                    try{
                        const chat = await Chat.findOne({id: chatId});
                        if(chat){
                            return chat.guaderId === user.id || chat.passengerId === user.id
                        }else{
                            return false
                        }
                    }catch(error){
                        return false
                    }
                }
            )
        }
    }
}