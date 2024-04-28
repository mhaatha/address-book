# Address-Book MySQL as Database (CLI)
Address-Book is a simple project that aims to organize contacts and put them into a cluster or group.

## Description
In this project you can create, edit, view or delete Contacts, GroupContacts and Clusters. This project uses NodeJS technology as the runtime and MySQL as the database. In this project, we use 3 relational tables which you can see below:

## Database Table
![alt text](https://github.com/mhaatha/address-book/blob/main/image/drawSQL-image-export-2024-04-26.png?raw=true)

## Features
- Add Contact by entering data such as name, phoneNumber, company and email.
- Update and delete Contact.
- See the list of the Contact and what Clusters they have.
- Can add new Groups or Clusters, edit, show and delete them.
- Can add a GroupContact containing contactId and clusterId.
- Update and delete GroupContact.
- Deleting a Clusters or Contact will delete the GroupContact which contains the deleted contactId or clusterId.

## Prerequisites
Make sure you have installed the prerequisites below on your computer:
- Node.js - [(Download & Install Node.js)](https://nodejs.org/en/download) to run the project.
- MySQL - [(Download & Install MySQL)](https://dev.mysql.com/downloads/mysql/) as a database.

## Installation
- Clone this repository:
```
https://github.com/mhaatha/address-book.git
cd address-book/src/
```

## Usage
- Run the application to see the available command:
```
node index.js help 
or
node index.js
```
