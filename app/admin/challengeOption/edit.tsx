import { SimpleForm,  required, TextInput, ReferenceInput,  BooleanInput, Edit } from "react-admin";

export const ChallengeOptionEdit = ()=>{
    return(
        <Edit>
            <SimpleForm >
                <TextInput source="text" validate={required()}  label="Titulo"/>
                <BooleanInput source="correct" label="opcion correcta"/>
                <ReferenceInput source="challengeId" reference="challenges"/>
                <TextInput source="imageSrc"
                label="imagen_url"/>
                <TextInput source="audioSrc"
                 label="audio_url"/>
            </SimpleForm>
        </Edit>
    )
};