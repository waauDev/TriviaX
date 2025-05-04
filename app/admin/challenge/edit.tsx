import { SimpleForm,  required, TextInput, ReferenceInput,  NumberInput, SelectInput, Edit } from "react-admin";

export const ChallengeEdit = ()=>{
    return(
        <Edit>
            <SimpleForm >
                <TextInput source="question" validate={required()}  label="Titulo"/>
                <SelectInput
                    source="type"
                    choices={[
                        {id:"SELECT",
                         name:"SELECCION"
                        },
                        {id:"ASSIST",
                            name:"ASISTIR"
                           },
                    ]}  validate={required()}
                />
                <ReferenceInput source="lessonId" reference="lessons"/>
                <NumberInput source="order" validate={required()} label="Orden" />
            </SimpleForm>
        </Edit>
    )
};