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
function generateDummyMeeting(leads, contacts) {

    // Randomly select leads and contacts for the meeting
    const randomLead = leads[Math.floor(Math.random() * leads.length)];
    const randomContact = contacts[Math.floor(Math.random() * contacts.length)];

    return {
        agenda: faker.lorem.sentence(),
        attendees: [randomContact._id], // Add contact ObjectId
        attendeesLead: [randomLead._id], // Add lead ObjectId
        location: faker.address.city(),
        related: faker.random.word(),
        dateTime: getRandomDateWithinPast90Days(),
        notes: faker.lorem.paragraph(),
        createdBy: new mongoose.Types.ObjectId('64d33173fd7ff3fa0924a109')
    };
}

// Function to insert contacts into the database
async function insertMeetings(numContactsToInsert) {
    const client = new MongoClient(DB_URL);
    try {
        await client.connect();
        await client.connect();
        const db = client.db(DB);
        const leadsCollection = db.collection('leads');
        const contactsCollection = db.collection('contacts');
        const meetingsCollection = db.collection('meetinghistories');

        // Fetch lead and contact ObjectIds
        const leads = await leadsCollection.find({}, { projection: { _id: 1 } }).toArray();
        const contacts = await contactsCollection.find({}, { projection: { _id: 1 } }).toArray();

        if (leads.length === 0 || contacts.length === 0) {
            throw new Error("No leads or contacts found in the database");
        }

        for (let i = 0; i < numContactsToInsert; i++) {
            const dummyMeeting = generateDummyMeeting(leads, contacts);
            try {
                // Validate each contact against the schema
                // await contactSchema.validate(dummyContact);
                await meetingsCollection.insertOne(dummyMeeting);
            } catch (error) {
                console.error('Validation or Insertion Error:', error);
            }
        }
    } finally {
        await client.close();
    }
}

module.exports = insertMeetings;