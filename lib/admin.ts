import {auth} from "@clerk/nextjs/server"

const adminIds = [
    // triviaX : user_2w4NhigRaAtULAYVmQOVbIFkX6v
    "user_2uWLWHsQpHhRdd206jdisty2FPH_123",
    "user_2w4NhigRaAtULAYVmQOVbIFkX6v"
]

export const isAdmin = async ()=>{
    const {userId} = await auth();
    

    if(!userId){
        return false;
    }

    return adminIds.indexOf(userId) !== -1;
    

}