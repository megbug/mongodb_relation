import { Schema, SchemaTypes, model } from 'mongoose';

import { User } from './User.js'

const postSchema = new Schema({
    title: String,
    content: String,
    author: [{ type: SchemaTypes.ObjectId, ref: 'User' }]
})

export const Post = model('Post', postSchema);