import { NextResponse } from "next/server"
import mongoose from "mongoose"
import { Message } from "@/db/messageSchema";

async function connecttoDatabase () {
     try {
     await mongoose.connect(process.env.MONGO_PASS)
    console.log('connected to db');
      
     }
     catch (err) {
        console.log('There is an error')
     }
}

connecttoDatabase()
export async function POST(req,res) {

    const payload = await req.json()
    if(!payload.name || !payload.email || !payload.subject || !payload.message){
        return NextResponse.json({result: "Empty fields found"})
    }
    let message = new Message({
        name : payload.name,
        email : payload.email,
        subject : payload.subject,
        message : payload.message
    })
    let savedData  = await message.save()
    return NextResponse.json({result : payload})
}