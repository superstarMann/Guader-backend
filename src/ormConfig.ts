import {ConnectionOptions} from 'typeorm'

export const connectiionOptions: ConnectionOptions ={
    type:"postgres",
    database: "guader-backend",
    synchronize: true,
    logging: true,
    entities: ["entities/**/*.*"],
    host: process.env.DB_ENDPOINT,
    port: 1234,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD
}

