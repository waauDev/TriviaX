import "dotenv/config"
import { drizzle } from "drizzle-orm/neon-http"
import {neon} from "@neondatabase/serverless"

import * as schema from "../db/schema"

const sql = neon(process.env.DATABASE_URL!);
//@ts-ignore

const db = drizzle(sql, {schema});

const main = async()=>{
    try {
        
    console.log("Seeding database");
    await db.delete(schema.courses);
    await db.delete(schema.userProgress);
    await db.delete(schema.units);
    await db.delete(schema.lessons);
    await db.delete(schema.challenges);
    await db.delete(schema.challengeOptions);
    await db.delete(schema.challengeProgress);


   
    console.log("Finish  reseting database");

    } catch (error) {
        console.log(error);
        throw new Error("Problema al seeding database");
    }
}


main();