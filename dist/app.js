"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_yoga_1 = require("graphql-yoga");
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const shema_1 = __importDefault(require("./shema"));
const decodeJWT_1 = require("./utils/decodeJWT");
class App {
    constructor() {
        this.middlewares = () => {
            this.app.express.use((0, cors_1.default)());
            this.app.express.use((0, morgan_1.default)("dev"));
            this.app.express.use((0, helmet_1.default)());
            this.app.express.use(this.jwt);
        };
        this.jwt = async (req, res, next) => {
            const token = req.get("x-jwt");
            if (token) {
                const user = await (0, decodeJWT_1.decodeJWT)(token);
                if (user) {
                    req.user = user;
                }
                else {
                    req.user = undefined;
                }
            }
            next();
        };
        this.pubSub = new graphql_yoga_1.PubSub();
        this.pubSub.ee.setMaxListeners(99);
        this.app = new graphql_yoga_1.GraphQLServer({
            schema: shema_1.default,
            context: req => {
                const { connection: { context = null } = {} } = req;
                return {
                    req: req.request,
                    pubSub: this.pubSub,
                    context
                };
            }
        });
        this.middlewares();
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map