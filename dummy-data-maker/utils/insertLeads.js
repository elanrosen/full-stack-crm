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

// Define the schema using yup

// Generate dummy contact data
function generateDummyLead() {

    return {
        leadName: faker.name.findName(),
        leadEmail: faker.internet.email(),
        leadPhoneNumber: faker.phone.phoneNumber(),
        leadAddress: faker.address.streetAddress(),
        leadSource: "",
        leadStatus: "",
        leadSourceDetails: "",
        leadCampaign: "",
        leadSourceChannel: "",
        leadSourceMedium: "",
        leadSourceCampaign: "",
        leadSourceReferral: "",
        leadAssignedAgent: "",
        leadOwner: "",
        leadCreationDate: faker.date.past(),
        leadConversionDate: faker.date.past(),
        leadFollowUpDate: faker.date.future(),
        leadFollowUpStatus: faker.random.arrayElement(['Pending', 'Completed', 'Not Scheduled']),
        leadNotes: faker.lorem.paragraph(),
        leadCommunicationPreferences: faker.random.arrayElement(['Email', 'Phone', 'Mail']),
        leadScore: faker.datatype.number({ min: 1, max: 100 }),
        leadNurturingWorkflow: faker.random.word(),
        leadEngagementLevel: faker.random.arrayElement(['Low', 'Medium', 'High']),
        leadConversionRate: faker.datatype.number({ min: 0, max: 100 }),
        leadNurturingStage: faker.random.arrayElement(['Cold', 'Warm', 'Hot']),
        leadNextAction: faker.random.words(),
        createBy: new ObjectId('64d33173fd7ff3fa0924a109'),
        deleted: false,
    };
}

// Function to insert contacts into the database
async function insertLeads(numContactsToInsert) {
    const client = new MongoClient(DB_URL);
    try {
        await client.connect();
        const db = client.db(DB);
        const collection = db.collection('leads');

        for (let i = 0; i < numContactsToInsert; i++) {
            const dummyLead = generateDummyLead();
            try {
                await collection.insertOne(dummyLead);
            } catch (error) {
                console.error('Validation or Insertion Error:', error);
            }
        }
    } finally {
        await client.close();
    }
}

module.exports = insertLeads;