import {ConnectionOptions} from 'typeorm'

export const connectiionOptions: ConnectionOptions ={
    type:"postgres",
    database: "guader",
    synchronize: true,
    logging: true,
    entities: ["entities/**/*.*"],
    host: process.env.DB_ENDPOINT,
    port: 5432,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD
}

