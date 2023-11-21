# Overview of My CRM Project

This project is a Customer Relationship Management (CRM) system, developed to manage various aspects of customer interactions and internal tasks. Built using React for the frontend and an Express backend, the system interacts with a MongoDB database, ensuring efficient handling of data and user requests.

## Personal Objectives

**Familiarize with MongoDB:** Gain practical experience in using MongoDB for database operations.
**Advance Server-Side Programming Skills:** Develop expertise in implementing more complex server functionalities.
**Advance Server-Side Programming Skills:** Enhance UI Development: Build a user interface that is both functional and visually appealing, leveraging advanced UI design principles.

## Project Demonstration

I've prepared a demonstration for those interested in witnessing the CRM in action:

- **Video Demo:** [Watch the Video Demo](https://youtu.be/hs5Pfrr3fOM?si=60yPNClNSrpSBFu1)
- **AWS Deployment:** [Explore the CRM Demo on AWS](https://main.d3g16lag4ur1pf.amplifyapp.com/auth/sign-in)

## Features

### Login Authentication
<p align="center">
  <img src="readme_images/login.png" alt="Login Page" width="500">
</p>

### Dashboards
- **Admin and User Dashboards**: Central hubs displaying overviews of activities and metrics.
<p align="center">
  <img src="readme_images/dashboard.png" alt="Dashboard Page" width="500">
</p>

### Leads Management
- **Tracking and Managing Leads**: View, add, and manage potential customers or clients.
- **Lead Interaction Tracking**: Linking to tasks, meetings, or communication histories.



### Contacts Management
- **Contact Information Storage**: Manage details about people or companies in contact with the business.
- **CRUD Operations**: Integrated with the `leads` collection in the database.
<p align="center">
  <img src="readme_images/contacts.png" alt="Contacts Page" width="500">
</p>
<p align="center">
  <img src="readme_images/add_contact.png" alt="Email Send Page" width="500">
</p>

### Task Management
- **Task Tracking**: Manage tasks or assignments, with assignment options to contacts or leads.

### Meeting Management
- **Meeting Organization**: Link meetings to contacts or users, with detailed viewing options.

### Call Logs
- **Phone Call Records**: Maintain details of phone calls, linked to contacts or leads.

### Email History
- **Email Communication Tracking**: Store and view sent and received emails, linked to contacts.

### Calendar
- **Event Scheduling**: Integrates with task and meeting management for upcoming events or tasks.
<p align="center">
  <img src="readme_images/calendar.png" alt="Email Send Page" width="500">
</p>

<p align="center">
  <img src="readme_images/add_calendar.png" alt="Email Send Page" width="500">
</p>

### Document Management
- **Document Storage**: Manage documents related to contacts or other CRM entities.
<p align="center">
  <img src="readme_images/documents.png" alt="Email Send Page" width="500" style="border: 2px solid #000;">
</p>

### Reporting and Analytics
- **Data Insights**: Aggregate data from various CRM parts to provide reports and analytics.

### User Management
- **Account and Permission Management**: Create, update, or delete user accounts with role-based access control.

## React.js Project Installation Guide

### Getting Started

This guide details the steps to install and run the React.js project from the GitHub repository: real-estate-frontend.

### Prerequisites

Ensure these tools are installed:

1. **Node.js and npm**:
   - **Download Node.js**: Visit [Node.js](https://nodejs.org/) and download the LTS version.
   - **Install Node.js**: Run the downloaded installer and follow the prompts. Ensure npm is included.
   - **Verify Installation**: Open a terminal and run `node -v` and `npm -v` to check the installation.

2. **MongoDB Compass** (Optional):
   - Download MongoDB Compass or create an account on MongoDB Atlas.

### Frontend Installation

1. **Download Project**:
   - Download the project ZIP from GitHub or another source.

2. **Extract ZIP**:
   - Extract the ZIP to a preferred directory.

3. **Open Terminal**:
   - Open a terminal or command prompt.

4. **Navigate to Project**:
   - Use `cd path/to/project-directory`.

5. **Install Dependencies**:
   - In the project directory, run `npm install` or `yarn install`.

6. **Start Development Server**:
   - Run `npm start` or `yarn start`.

7. **Change baseUrl**:
   - In the project directory, open `constant.js` and change `baseUrl` to your backend server URL (e.g., `http://127.0.0.1:5001/`).

8. **Access Application**:
   - Open a browser and navigate to `http://localhost:3000`.

### Backend Installation

1. **Download Backend Project**:
   - Download the backend project ZIP from a source.

2. **Extract and Navigate**:
   - Follow steps 2 and 4 as above for the backend project.

3. **Install Dependencies**:
   - In the backend project directory, run `npm install` or `yarn install`.

4. **Configure Database**:
   - Create a `.env` file in the project directory.
   - Add `DB_URL = [your MongoDB URL]` and `DB = [your MongoDB Database Name]`.

5. **Start Server**:
   - Run `npm start`.

6. **Open Application**:
   - Navigate to `http://localhost:3000`.

### Default Admin Access

(not functional on AWS deployment)
- **Email**: admin@gmail.com
- **Password**: admin123

### Support

Contact us for any setup difficulties or questions.
