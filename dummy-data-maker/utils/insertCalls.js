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

// Generate dummy contact data
function generateDummyCall(leads) {
    const selectedLead = leads[Math.floor(Math.random() * leads.length)];
    const startDate = new Date(getRandomDateWithinPast90Days());
    const minutesToAdd = faker.datatype.number({ min: 0, max: 70 });
    const endDate = new Date(startDate.getTime() + minutesToAdd * 60000);

    return {
        sender: new ObjectId('64d33173fd7ff3fa0924a109'),
        recipient: selectedLead.name, // Use name from the selected lead
        callDuration: faker.datatype.number({ min: 1, max: 60 }) + ' minutes',
        callNotes: faker.lorem.paragraph(),
        phoneNumber: selectedLead.phoneNumber, // Use phone number from the selected lead
        startDate: startDate.toString(),
        endDate: endDate.toString(),
        createByLead: selectedLead._id, // Use ObjectId from the selected lead
        createBy: new ObjectId('64d33173fd7ff3fa0924a109'),
    };
}


// Function to insert contacts into the database
async function insertCalls(numContactsToInsert) {
    const client = new MongoClient(DB_URL);
    try {
        await client.connect();
        const db = client.db(DB);
        const leadsCollection = db.collection('leads');
        const phoneCallsCollection = db.collection('phonecalls');

        // Fetch lead ObjectIds
        // Fetch lead ObjectIds and ensure it's an array
        const leads = await leadsCollection.find({}, { projection: { _id: 1, name: 1, phoneNumber: 1 } }).toArray();

        for (let i = 0; i < numContactsToInsert; i++) {
            const dummyCall = generateDummyCall(leads);
            try {
                // Validate each contact against the schema
                // await contactSchema.validate(dummyContact);
                await phoneCallsCollection.insertOne(dummyCall);
            } catch (error) {
                console.error('Validation or Insertion Error:', error);
            }
        }
    } finally {
        await client.close();
    }
}

module.exports = insertCalls;
