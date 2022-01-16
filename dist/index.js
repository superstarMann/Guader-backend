"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const typeorm_1 = require("typeorm");
const app_1 = __importDefault(require("./app"));
const ormConfig_1 = require("./ormConfig");
const decodeJWT_1 = require("./utils/decodeJWT");
const PORT = process.env.PORT || 4000;
const PLAYGROUND_ENDPOINT = "/playground";
const GRAPHQL_ENDPOINT = "/graphql";
const SUBSCRIPTION_ENDPOINT = '/subscription';
const appOptions = {
    port: PORT,
    playground: PLAYGROUND_ENDPOINT,
    endpoint: GRAPHQL_ENDPOINT,
    subscriptions: {
        path: SUBSCRIPTION_ENDPOINT,
        onConnect: async (connectionParams) => {
            const token = connectionParams["x-jwt"];
            if (token) {
                const user = await (0, decodeJWT_1.decodeJWT)(token);
                if (user) {
                    return {
                        currentUser: user
                    };
                }
            }
            throw new Error("No JWT. Can't subscribe");
        }
    }
};
const handleAppStart = () => {
    console.log("it works!!!");
};
(0, typeorm_1.createConnection)(ormConfig_1.connectiionOptions).then(() => {
    app_1.default.start(appOptions, handleAppStart);
}).catch(error => console.log(error));
//# sourceMappingURL=index.js.map