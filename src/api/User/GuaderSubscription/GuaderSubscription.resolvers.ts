import { withFilter } from "graphql-yoga";
import User from "../../../entities/User";

export const resolvers = {
    Subscription:{
        GuaderSubscription:{
            subscribe: withFilter(
                (_, __, {pubSub}) => pubSub.asyncIterator("guaderUpdate"),
                (payload, _, {context}) => {
                    const user: User = context.currentUser;
                    const {
                        GuaderSubscription: {
                            lastLng: guaderLastLng,
                            lastLat: guaderLastLat
                        }
                    } = payload;
                    const {lastLng: userLastLng, lastLat: userLastLat} = user;
                    return(
                        guaderLastLat >= userLastLat + 0.05 &&
                        guaderLastLat >= userLastLat - 0.05 &&
                        guaderLastLng >= userLastLng + 0.05 &&
                        guaderLastLng >= userLastLng + 0.05
                    )
                }
            )
        }
    }
}