"use client"

import {Admin,  Resource} from "react-admin";
import simpleRestProvider from "ra-data-simple-rest"
import { CourseList } from "./course/list";
import { CourseCreate } from "./course/create";
import { CourseEdit } from "./course/edit";
import { UnitList } from "./unit/list";
import { UnitCreate } from "./unit/create";
import { UnitEdit } from "./unit/edit";
import { LessonList } from "./lesson/list";
import { LessonCreate } from "./lesson/create";
import { LessonEdit } from "./lesson/edit";
import { ChallengeList } from "./challenge/list";
import { ChallengeCreate } from "./challenge/create";
import { ChallengeEdit } from "./challenge/edit";
import { ChallengeOptionList } from "./challengeOption/list";
import { ChallengeOptionCreate } from "./challengeOption/create";
import { ChallengeOptionEdit } from "./challengeOption/edit";

const dataProvider = simpleRestProvider("/api");

const App = () =>{
    return(
    <Admin dataProvider={dataProvider}>
        <Resource
         name="courses"
         list={CourseList}
         create={CourseCreate}
         edit={CourseEdit}
         recordRepresentation={"title"}
         options={{label:"Cursos"}}
         >
        </Resource>

        <Resource
         name="units"
         list={UnitList}
         create={UnitCreate}
         edit={UnitEdit}
         recordRepresentation={"title"}
         options={{label:"Unidades"}}
         >
        </Resource>

        <Resource
         name="lessons"
         list={LessonList}
         create={LessonCreate}
         edit={LessonEdit}
         recordRepresentation={"title"}
         options={{label:"Lecciones"}}
         >
        </Resource>

        <Resource
         name="challenges"
         list={ChallengeList}
         create={ChallengeCreate}
         edit={ChallengeEdit}
         recordRepresentation={"question"}
         options={{label:"Preguntas"}}
         >
        </Resource>

        <Resource
         name="challengeOptions"
         list={ChallengeOptionList}
         create={ChallengeOptionCreate}
         edit={ChallengeOptionEdit}
         recordRepresentation={"text"}
         options={{label:"Respuestas"}}
         >
        </Resource>

    </Admin>
    )
}

export default App;