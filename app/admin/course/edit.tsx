import { SimpleForm, Create, required, TextInput } from "react-admin";

export const CourseEdit = ()=>{
    return(
        <Create>
            <SimpleForm >
                <TextInput source="id" validate={required()}  label="Id"/>
                <TextInput source="title" validate={required()}  label="Titulo"/>
                <TextInput source="imageSrc" validate={required()} label="Imagen"/>
            </SimpleForm>
        </Create>
    )
};