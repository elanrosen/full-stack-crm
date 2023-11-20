// populateDummyData.js

// Require the necessary modules
const clearCollections = require('./utils/clearCollections');
const insertCalls = require('./utils/insertCalls');
const insertContacts = require('./utils/insertContacts');
const insertEmails = require('./utils/insertEmails');
const insertLeads = require('./utils/insertLeads');
const insertMeetings = require('./utils/insertMeetings');

// A function to populate all dummy data
async function populateDummyData() {
    try {
        await clearCollections();
        console.log('Collections cleared');


        await insertContacts(63);
        console.log('Contacts inserted');
        
        await insertLeads(32);
        console.log('Leads inserted');

        await insertCalls(85);
        console.log('Calls inserted');


        await insertEmails(72);
        console.log('Emails inserted');


        await insertMeetings(28);
        console.log('Meetings inserted');

        console.log('All dummy data populated successfully');
    } catch (error) {
        console.error('Error populating dummy data:', error);
    }
}

// Execute the function
populateDummyData();
