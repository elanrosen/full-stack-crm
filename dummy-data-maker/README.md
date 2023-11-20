# Dummy Data Populator for Demo

## Overview
This set of scripts is designed to populate your MongoDB database with dummy data for demonstration purposes. It's particularly useful for simulating a real-world scenario in your database, allowing you to test features and functionality of your application with realistic data. 

## Key Components

- `populateDummyData.js`: The main script that orchestrates the process of populating the database with dummy data. It calls other utility scripts to clear existing collections and insert dummy records into various collections like Contacts, Leads, Calls, Emails, and Meetings.

- `clearCollections.js`: A utility script to clear existing data from specified collections in the database. This ensures a fresh start before inserting the dummy data.

- `insertContacts.js`: This script generates and inserts dummy contact information into the database, ensuring each entry adheres to a predefined schema.

- `utils/`: This directory contains various utility scripts to insert specific types of records (e.g., calls, emails, meetings) into the database.

## Usage

1. **Setting Up Environment Variables**: 
   Make sure to set up your MongoDB connection details in your environment. The variables `DB` and `DB_URL` should be defined with your database name and connection URL respectively.

2. **Installing Dependencies**: 
   You'll need to install the necessary Node.js modules such as `mongodb`, `yup`, `faker`, `mongoose`, etc. Use `npm install <module_name>` to install them.

3. **Running the Script**:
   Execute `populateDummyData.js` to start the process. This script will sequentially clear existing data in collections and then populate them with dummy data.

4. **Monitoring the Progress**:
   The script logs messages to the console to inform you about the progress, including the completion of each step and any errors encountered.

## Customization

- **Modifying Data Generation**: 
  You can customize the data generation logic in `insertContacts.js` and other utility scripts. This allows you to tailor the dummy data to better fit your application's needs.

- **Schema Adjustments**:
  Modify the `contactSchema` defined in `insertContacts.js` to align with your database schema requirements.

## Notes

- The scripts use MongoDB's native driver for Node.js to interact with the database.
- Error handling is incorporated to catch and log any issues during the data population process.
- This tool is intended for development and testing environments only. Do not use it on a production database.

---

Remember to backup your database before running these scripts, especially if you are using an existing database with real data.