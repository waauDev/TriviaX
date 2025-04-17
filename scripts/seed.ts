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


    await db.insert(schema.courses).values([
        {
            id:1,
            title:"Ciencia",
            imageSrc:"/roten.gif"
        },
        {
            id:2,
            title:"Español",
            imageSrc:"/es.svg"
        },
        {
            id:3,
            title:"Frances",
            imageSrc:"/fr.svg"
        },
        
    ]

    )

    await db.insert(schema.units).values([
        {
            id:1,
            courseId:1,
            title:"Las ilogicas",
            description:"Preguntas que no tienen logica",
            order:1,
        }
    ]);

    await db.insert(schema.lessons).values([
        {
            id:1,
            unitId:1,
            order:1,
            title:"Sobre la vida",
        },
        {
            id:2,
            unitId:1,
            order:1,
            title:"Sobre animales",
        },
    ])

    await db.insert(schema.challenges).values([
        {
            id:1,
            lessonId:1,
            type:"SELECT",
            order:1,
            question:"¿Existe el sentido de la vida o es solo una excusa elegante para procrastinar? 🛋️📚✨"


        },
        {
            id:2,
            lessonId:1,
            type:"SELECT",
            order:1,
            question:"¿Las vacas se preguntan por qué los humanos beben su leche? 🐄🥛🤨"


        }
    ])

    await db.insert(schema.challengeOptions).values([
        {
            id:1,
            challengeId:1,
            imageSrc:"/man.svg",
            correct:true,
            text:"el Hombre",
            audioSrc:"/es_man.mp3"
        },
        {
            id:2,
            challengeId:1,
            imageSrc:"/woman.svg",
            correct:false,
            text:"la mujer",
            audioSrc:"/es_woman.mp3"
        },
        {
            id:3,
            challengeId:1,
            imageSrc:"/robot.svg",
            correct:false,
            text:"el robot",
            audioSrc:"/es_robot.mp3"
        },
    
    ])


    console.log("Finish  Seeding database");

    } catch (error) {
        console.log(error);
        throw new Error("Problema al seeding database");
    }
}


main();