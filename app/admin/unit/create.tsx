import { SimpleForm, Create, required, TextInput, ReferenceInput,  NumberInput } from "react-admin";

export const UnitCreate = ()=>{
    return(
        <Create>
            <SimpleForm >
                <TextInput source="title" validate={required()}  label="Titulo"/>
                <TextInput source="description" validate={required()} label="Descripcion"/>
                <ReferenceInput source="courseId" reference="courses"/>
                <NumberInput source="order" validate={required()} label="Orden" />
            </SimpleForm>
        </Create>
    )
};