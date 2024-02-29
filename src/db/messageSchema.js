const { default: mongoose, model } = require("mongoose");
const messageSchema = new mongoose.Schema({
    name : String,
    email : String,
    subject : String,
    message : String
})

export const Message = mongoose.models.messages || mongoose.model('messages', messageSchema)