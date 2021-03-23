import * as dotenv from "dotenv";

// this will look for a file in root of project called dot env(.env)
const envFound = dotenv.config(); 

if (!envFound) {
    throw new Error("Cannot find a .env file!");
}

export default {
    mysql: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_SCHEMA  
    },
    // this will make the port num a number and not a string - its using base 10 to make this happen
    port: parseInt(process.env.PORT, 10)
}

