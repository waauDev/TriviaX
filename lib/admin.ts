import {auth} from "@clerk/nextjs/server"

const adminIds = [
    "user_2uWLWHsQpHhRdd206jdisty2FPH",
    "user_2w4NhigRaAtULAYVmQOVbIFkX6v"
]

export const isAdmin = async()=>{
    const {userId} = await auth()
    

    if(!userId){
        return false;
    }

    return adminIds.indexOf(userId) !== -1;
    

}