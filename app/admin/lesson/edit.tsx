import { SimpleForm, required, TextInput, ReferenceInput,  NumberInput, Edit } from "react-admin";

export const LessonEdit= ()=>{
    return(
        <Edit>
            <SimpleForm >
                <TextInput source="title" validate={required()}  label="Titulo"/>
                <ReferenceInput source="unitId" reference="units"/>
                <NumberInput source="order" validate={required()} label="Orden" />
            </SimpleForm>
        </Edit>
    )
};