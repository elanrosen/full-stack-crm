// Import required modules
const { MongoClient } = require('mongodb');
const yup = require('yup');
const faker = require('faker');
const mongoose = require('mongoose');
const { ObjectId } = require('mongodb');
require('dotenv').config();


// MongoDB connection details
const DB = process.env.DB;
const DB_URL = process.env.DB_URL;

// Function to generate a random date within the past 90 days
function getRandomDateWithinPast90Days() {
    const currentDate = new Date();
    const pastDate = new Date(currentDate.getTime() - (90 * 24 * 60 * 60 * 1000)); // 90 days in milliseconds
    return faker.date.between(pastDate, currentDate).toString();
}


function generateDummyEmail(leads) {
    const selectedLead = leads[Math.floor(Math.random() * leads.length)];
    const startDate = new Date();
    const endDate = new Date(startDate.getTime() + faker.datatype.number({ min: 1, max: 60 }) * 60000);

    return {
        sender: new ObjectId('64d33173fd7ff3fa0924a109'), // Adjust as needed
        recipient: selectedLead.name,
        subject: faker.lorem.sentence(),
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        message: faker.lorem.paragraphs(),
        createByLead: selectedLead._id,
        createBy: new ObjectId('64d33173fd7ff3fa0924a109'), // Adjust as needed
        timestamp: new Date()
    };
}


// Function to insert contacts into the database
async function insertEmails(numEmailsToInsert) {
    const client = new MongoClient(DB_URL);
    try {
        await client.connect();
        const db = client.db(DB);
        const leadsCollection = db.collection('leads');
        const emailsCollection = db.collection('emailhistories');

        // Fetch lead ObjectIds
        const leads = await leadsCollection.find({}, { projection: { _id: 1, name: 1 } }).toArray();

        for (let i = 0; i < numEmailsToInsert; i++) {
            const dummyEmail = generateDummyEmail(leads);
            try {
                // Insert email into the database
                await emailsCollection.insertOne(dummyEmail);
            } catch (error) {
                console.error('Insertion Error:', error);
            }
        }
    } finally {
        await client.close();
    }
}

module.exports = insertEmails;