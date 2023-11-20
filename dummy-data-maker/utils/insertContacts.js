// Import required modules
const { MongoClient } = require('mongodb');
const yup = require('yup');
const faker = require('faker');
const mongoose = require('mongoose');
require('dotenv').config();

const { ObjectId } = require('mongodb');
// Define the schema using yup
const contactSchema = yup.object({
    firstName: yup.string(),
    lastName: yup.string(),
    title: yup.string(),
    email: yup.string().email(),
    phoneNumber: yup.number().positive().integer(),
    mobileNumber: yup.number().positive().integer(),
    physicalAddress: yup.string(),
    mailingAddress: yup.string(),
    preferredContactMethod: yup.string(),
    // 2.Lead Source Information
    leadSource: yup.string(),
    referralSource: yup.string(),
    campaignSource: yup.string(),
    // 3. Status and Classifications
    leadStatus: yup.string(),
    leadRating: yup.number().positive().integer(),
    leadConversionProbability: yup.string(),
    // 4. Property of Interest
    interestProperty: yup.array().of(yup.mixed().test(
        'is-object-id', 'each item in the array must be a valid ObjectId',
        value => mongoose.Types.ObjectId.isValid(value))),
    // 5. History:
    notesandComments: yup.string(),
    // 6. Tags or Categories
    tagsOrLabelsForcategorizingcontacts: yup.string(),
    // 7. Important Dates:
    birthday: yup.date().nullable(),
    anniversary: yup.date().nullable(),
    keyMilestones: yup.string(),
    // 8. Additional Personal Information
    dob: yup.string(), // if this is a date, use yup.date()
    gender: yup.string(),
    occupation: yup.string(),
    interestsOrHobbies: yup.string(),
    // 9. Preferred Communication Preferences:
    communicationFrequency: yup.string(),
    preferences: yup.string(),
    // 10. Social Media Profiles:
    linkedInProfile: yup.string().url(),
    facebookProfile: yup.string().url(),
    twitterHandle: yup.string(),
    otherProfiles: yup.string(),
    // 11. Lead Assignment and Team Collaboration:
    agentOrTeamMember: yup.string(),
    internalNotesOrComments: yup.string(),
    createBy: yup.mixed().test(
        'is-object-id', 'createBy must be a valid ObjectId',
        value => mongoose.Types.ObjectId.isValid(value)),
    deleted: yup.boolean().default(false),
});

// MongoDB connection details
const DB = process.env.DB;
const DB_URL = process.env.DB_URL;

// Generate dummy contact data
function generateDummyContact() {
    const linkedInProfile = `https://www.linkedin.com/in/${faker.internet.userName()}`;
    const facebookProfile = `https://www.facebook.com/${faker.internet.userName()}`;

    return {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        title: faker.name.title(),
        email: faker.internet.email(),
        phoneNumber: faker.datatype.number({ min: 1000000000, max: 999999999999 }),
        mobileNumber: faker.datatype.number({ min: 1000000000, max: 999999999999 }),
        physicalAddress: faker.address.streetAddress(),
        mailingAddress: faker.address.secondaryAddress(),
        preferredContactMethod: faker.random.arrayElement(['Email', 'Phone', 'Mail']),
        // 2.Lead Source Information
        leadSource: "",
        referralSource: "",
        campaignSource: "",
        // 3. Status and Classifications
        leadStatus: "",
        leadRating: faker.datatype.number({ min: 1, max: 10 }), // Random number between 1 and 10
        leadConversionProbability: "",
        // 5. History:
        notesandComments: "",
        // 6. Tags or Categories
        tagsOrLabelsForcategorizingcontacts: "",
        // 7. Important Dates::
        birthday: faker.date.past(30), // Random past date
        anniversary: faker.date.past(10), // Random past date
        keyMilestones: "",
        // 8. Additional Personal Information
        dob: faker.date.past(50), // Random past date for date of birth
        gender: faker.random.arrayElement(['Male', 'Female', 'Other']),
        occupation: "",
        interestsOrHobbies: "",
        // 9. Preferred  Communication Preferences:
        communicationFrequency: faker.random.arrayElement(['Daily', 'Weekly', 'Monthly']),
        preferences: "",
        // 10. Social Media Profiles:
        linkedInProfile: linkedInProfile,
        facebookProfile: facebookProfile,
        twitterHandle: "",
        otherProfiles: "",
        // 11. Lead Assignment and Team Collaboration:
        agentOrTeamMember: "",
        internalNotesOrComments: "",
        createBy: new ObjectId('64d33173fd7ff3fa0924a109'),
        deleted: false,
        __v: 0,
        // ... add any custom fields you may have
    };
}

// Function to insert contacts into the database
async function insertContacts(numContactsToInsert) {
    const client = new MongoClient(DB_URL);
    try {
        await client.connect();
        const db = client.db(DB);
        const collection = db.collection('contacts');

        for (let i = 0; i < numContactsToInsert; i++) {
            const dummyContact = generateDummyContact();
            try {
                // Validate each contact against the schema
                await contactSchema.validate(dummyContact);
                await collection.insertOne(dummyContact);
            } catch (error) {
                console.error('Validation or Insertion Error:', error);
            }
        }
    } finally {
        await client.close();
    }
}

module.exports = insertContacts;
