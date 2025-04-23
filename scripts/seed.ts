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
            title:"Historia",
            imageSrc:"/histo.gif"
        },
        {
            id:2,
            title:"Ciencia",
            imageSrc:"/ciencia.gif"
        },
        {
            id:3,
            title:"Geografía",
            imageSrc:"/geogra.gif"
        },
        
    ]

    )

    await db.insert(schema.units).values([
        {
            id:1,
            courseId:1,
            title:"Sobre Colombia",
            description:"Historia Nacional",
            order:1,
        }
    ]);
    await db.insert(schema.units).values([
        {
            id:2,
            courseId:1,
            title:"Sobre America",
            description:"Hechos historicos ocurridos en el continente Americano",
            order:1,
        }
    ]);
    await db.insert(schema.units).values([
        {
            id:3,
            courseId:1,
            title:"Sobre Mundo",
            description:"Hechos historicos ocurridos en el mundo",
            order:1,
        }
    ]);

    await db.insert(schema.lessons).values([
        {
            id:1,
            unitId:1,
            order:1,
            title:"Época Precolombina",
        },
        {
            id:2,
            unitId:1,
            order:1,
            title:"Época Colonial",
        },
        {
            id:3,
            unitId:1,
            order:1,
            title:"Época Republicana",
        },
    ])

    await db.insert(schema.challenges).values([
        {
            id:1,
            lessonId:1,
            type:"ASSIST",
            order:1,
            question:"¿Cuál de los siguientes pueblos indígenas habitó el altiplano cundiboyacense en la época precolombina?"


        },
        {
            id:2,
            lessonId:1,
            type:"ASSIST",
            order:1,
            question:"¿Qué actividad económica era fundamental para los muiscas durante la época precolombina?"


        },
        {
            id:3,
            lessonId:1,
            type:"SELECT",
            order:1,
            question:"¿En qué región de Colombia se desarrolló la cultura tairona?"


        },
        {
            id:4,
            lessonId:1,
            type:"SELECT",
            order:1,
            question:"¿Cuál era una de las principales características de las viviendas muiscas?"

        }
    ])

    await db.insert(schema.challengeOptions).values([
        {
            
            challengeId:1,
            //imageSrc:"/boy.svg",
            correct:false,
            text:"Quimbayas",
            //audioSrc:"/es_man.mp3"
        },
        {
            
            challengeId:1,
            //imageSrc:"/girl.svg",
            correct:false,
            text:"Taironas",
            //audioSrc:"/es_woman.mp3"
        },
        {
            
            challengeId:1,
            //imageSrc:"/zombie.svg",
            correct:true,
            text:"Muiscas",
            //audioSrc:"/es_robot.mp3"
        },
        {
            
            challengeId:1,
            correct:false,
            text:"Calimas",
            //audioSrc:"/es_man.mp3"
        },
        {
            
            challengeId:2,
            correct:false,
            text:"🐄",
            audioSrc:"/ganaderia.mp3"
        },
        {
            
            challengeId:2,
            correct:true,
            text:"🧂",
            audioSrc:"/comercio_sal.mp3"
        },
        {
            
            challengeId:2,
            correct:false,
            text:"⛏️",
            audioSrc:"/mineria_oro.mp3"
        },
        {
            
            challengeId:2,
            correct:false,
            text:"🚣‍♂️",
            audioSrc:"/navegacion_fluvial.mp3"
        },
        {
            
            challengeId:3,
            correct:false,
            text:"Si",
           // audioSrc:"/es_robot.mp3"
        },
        {
            
            challengeId:3,
            correct:true,
            text:"No se",
            //audioSrc:"/es_robot.mp3"
        },
        {
            
            challengeId:4,
            correct:false,
            text:"Prueba 1"
        },
        {
            
            challengeId:4,
            correct:false,
            text:"Prueba 2"
        },
        {
            
            challengeId:4,
            correct:true,
            text:"Prueba 3"
        },
        {
            
            challengeId:4,
            correct:false,
            text:"Prueba 4"
        },
        
    
    ])


    console.log("Finish  Seeding database");

    } catch (error) {
        console.log(error);
        throw new Error("Problema al seeding database");
    }
}


main();