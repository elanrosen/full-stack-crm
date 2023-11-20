// Import the MongoDB module
const { MongoClient } = require('mongodb');
require('dotenv').config();

// MongoDB connection details
const DB = process.env.DB;
const DB_URL = process.env.DB_URL;

// Function to clear a specific collection from the database
async function clearCollection(collectionName) {
    const client = new MongoClient(DB_URL);
    try {
        await client.connect();
        const db = client.db(DB);
        const collection = db.collection(collectionName);

        // Delete all documents in the specified collection
        const result = await collection.deleteMany({});
        console.log(`${result.deletedCount} documents have been cleared from ${collectionName}.`);
    } catch (error) {
        console.error(`Failed to clear ${collectionName}:`, error);
    } finally {
        await client.close();
    }
}

// Run the script to clear multiple collections
async function clearCollections() {
    try {
        await clearCollection('contacts');
        await clearCollection('documents');
        await clearCollection('emailhistories');
        await clearCollection('leads');
        await clearCollection('meetinghistories');
        await clearCollection('phonecalls');
        await clearCollection('properties');
        await clearCollection('textmsgs');
    } catch (error) {
        console.error('Failed to clear collections:', error);
    }
}
module.exports = clearCollections;

