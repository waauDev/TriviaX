import { SimpleForm, Create, required, TextInput, ReferenceInput,  BooleanInput } from "react-admin";

export const ChallengeOptionCreate = ()=>{
    return(
        <Create>
            <SimpleForm >
                <TextInput source="text" validate={required()}  label="Titulo"/>
                <BooleanInput source="correct" label="opcion correcta"/>
                <ReferenceInput source="challengeId" reference="challenges"/>
                <TextInput source="imageSrc"
                validate={[required()]} label="imagen_url"/>
                <TextInput source="audioSrc"
                validate={[required()]} label="audio_url"/>
            </SimpleForm>
        </Create>
    )
};