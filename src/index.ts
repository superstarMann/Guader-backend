
import { Options } from "graphql-yoga";
import app from "./app";

const PORT: string | number = process.env.PORT || 4000 ;
const PLAYGROUND_ENDPOINT: string = '/playground';
const GRAPHQL_ENDPOINT: string = '/graphql';

const appOptions: Options = {
    port: PORT,
    playground: PLAYGROUND_ENDPOINT,
    endpoint: GRAPHQL_ENDPOINT   
}

const handleAppStart = () => {
    console.log("it works!!!")
}

app.start(appOptions, handleAppStart)