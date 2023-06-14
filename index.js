import mongoose from 'mongoose';

import { Post } from './model/Post.js';
import { User } from './model/User.js';

await mongoose.connect('mongodb://localhost:27017/relation-mongodb');

const user1 = await User.create(
    {
        name: 'Leela Turanga',
        age: 26
    }
);

const user2 = await User.create(
    {
        name: 'Philip J. Fry',
        age: 25
    }
);

const user3 = await User.create(
    {
        name: 'Bender Bending Rodriguez',
        age: 24,
    }
);

const post1 = await Post.create({
    title: 'How to deal with being a mutant',
    content: "It's tough"
});

await post1.author.push(user1);
await post1.save()

const post2 = await Post.create({
    title: 'How to do space delivery',
    content: 'You just do it, without risking the crew or the spaceship!'
});

await post2.author.push(user1);
await post2.save()

const post3 = await Post.create({
    title: 'My best friend is a robot',
    content: 'You should look out for one, too'
});

await post3.author.push(user2);
await post3.save()

const post4 = await Post.create({
    title: 'I got freezed',
    content: 'I miss my dog'
});

await post4.author.push(user2);
await post4.save()

const post5 = await Post.create({
    title: 'I love money and beer',
    content: 'You never can have enough money and beer'
});

await post5.author.push(user3);
await post5.save()

const post6 = await Post.create({
    title: 'My best friend is a human',
    content: 'You should get one, too'
});

await post6.author.push(user3);
await post6.save()


await mongoose.disconnect(); 