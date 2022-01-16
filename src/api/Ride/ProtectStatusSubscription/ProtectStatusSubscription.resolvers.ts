import { withFilter } from "graphql-yoga";
import User from "../../../entities/User";

export const resolvers = {
    Subscription:{
        ProtectStatusSubscription: {
            subscribe: withFilter(
                (_, __, {pubSub}) => pubSub.asyncIterator("protectUpdate"),
                (payload, _, {context}) => {
                    const user: User = context.user
                    const {
                        ProtectStatusSubscription: {passengerId, guaderId}
                    } = payload;
                    return user.id === passengerId || user.id === guaderId
                }
            )
        }
    }
}