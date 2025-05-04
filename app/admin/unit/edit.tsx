import { SimpleForm,  required, TextInput, ReferenceInput,  NumberInput, Edit } from "react-admin";

export const UnitEdit = ()=>{
    return(
        <Edit>
            <SimpleForm >
                <NumberInput source="id" validate={required()}  label="Id"/>
                <TextInput source="title" validate={required()}  label="Titulo"/>
                <TextInput source="description" validate={required()} label="Descripcion"/>
                <ReferenceInput source="courseId" reference="courses"/>
                <NumberInput source="order" validate={required()} label="Orden" />
            </SimpleForm>
        </Edit>
    )
};