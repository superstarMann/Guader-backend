import {GraphQLServer} from'graphql-yoga';
import cors from 'cors'
import helmet from 'helmet'
import logger from 'morgan';
import schema from './shema';
import { decodeJWT } from './utils/decodeJWT';
import {Response, NextFunction} from 'express'

class App {
    public app: GraphQLServer;
    constructor() {
      this.app = new GraphQLServer({
        schema,
        context: req => {
          return{
            req: req.request
          }
        }
      });
      this.middlewares();
    }
    private middlewares = (): void => {
      this.app.express.use(cors());
      this.app.express.use(logger("dev"));
      this.app.express.use(helmet());
      this.app.express.use(this.jwt)
    };

    private jwt = async (req, res: Response, next: NextFunction): Promise<void> => {
      const token = req.get("x-jwt");
      if(token){
        const user = await decodeJWT(token);
        if(user){
          req.user = user;
        }else{
          req.user = undefined
        }
      }
      next();
    }
  }
  
  export default new App().app;