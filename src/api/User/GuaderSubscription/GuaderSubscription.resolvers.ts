export const resolvers = {
    Subscription:{
        GuaderSubscription:{
            subscribe: (_, __, {pubSub}) =>{
                return pubSub.asyncIterator("hi")
            }
        }
    }
}