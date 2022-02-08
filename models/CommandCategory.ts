import mongoose from 'mongoose'

const commandItemSchema = new mongoose.Schema({
    name: String,
    description: String,
    usage: String,
    alias: String
});

const commandCategorySchema = new mongoose.Schema({
    name: String,
    items: [commandItemSchema]
});

export default mongoose.models.CommandCategory || mongoose.model('CommandCategory', commandCategorySchema)