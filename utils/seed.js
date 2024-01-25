const connection = require('../config/connection');
const { User, Thought } = require('../models');

// Seed data for users
const users = [
    {
      username: "Adam",
      email: "adam@gmail.com",
      thoughts: [],
      friends: [],
      friendCount: '3'
    },
    {
      username: "Bob",
      email: "bob@gmail.com",
      thoughts: [],
      friends: [],
      friendCount: 2
    },
    {
      username: "Cat",
      email: "cat@gmail.com",
      thoughts: [],
      friends: [],
      friendCount: 4
    },
    {
      username: "Doug",
      email: "doug@gmail.com",
      thoughts: [],
      friends: [],
      friendCount: 2
    },
    {
      username: "Frey",
      email: "frey@gmail.com",
      thoughts: [],
      friends: [],
      friendCount: 1
    },
    {
      username: "Gill",
      email: "gill@gmail.com",
      thoughts: [],
      friends: [],
      friendCount: 3
    },
    {
      username: "Hestor",
      email: "hestor@gmail.com",
      thoughts: [],
      friends: [],
      friendCount: 1
    },
  ]

  // Seed data for thoughts
  const thoughts = [
    {
      username: 'Adam',
      thoughtText: 'OMG it is so hot today!',
      createdAt: new Date(),
      reactions: [],
      reactionCount: 1
    },
    {
      username: 'Bob',
      thoughtText: 'Such a nice day to go swimming in the lake!',
      createdAt: new Date(),
      reactions: [],
      reactionCount: 2
    },
    {
      username: 'Cat',
      thoughtText: 'I dont eat mouse, I am their friend',
      createdAt: new Date(),
      reactions: [],
      reactionCount: 1
    },
    {
      username: 'Doug',
      thoughtText: 'Who let the Doug out?',
      createdAt: new Date(),
      reactions: [],
      reactionCount: 3
    },
    {
      username: 'Frey',
      thoughtText: 'Hi, im Frey.',
      createdAt: new Date(),
      reactions: [],
      reactionCount: 2
    },
    {
      username: 'Gill',
      thoughtText: 'No, im not a fish',
      createdAt: new Date(),
      reactions: [],
      reactionCount: 3
    },
    {
      username: 'Hestor',
      thoughtText: 'Its time!',
      createdAt: new Date(),
      reactions: [],
      reactionCount: 1
    },
  ]

  // async function to seeding the users and thoughts data
  const seedDatabase = async () => {
    try {
      console.log('Connected to the database');
  
      // Delete thoughts 
      await Thought.deleteMany({});

      // Then delete user
      await User.deleteMany({});
  
      // Insert users
      await User.insertMany(users);

      // Insert thoughts
      await Thought.insertMany(thoughts);
  
      console.info('Seeding complete! 🌱');
    } catch (error) {
      console.error('Error seeding database:', error);
    } finally {
      // Close the database connection
      await connection.close();
      console.log('Database connection closed.');
    }
  };
  
  // Set up event listeners for connection error
  connection.on('error', (err) => {
    console.error('MongoDB connection error:', err);
  });
  
  connection.once('open', seedDatabase);
  