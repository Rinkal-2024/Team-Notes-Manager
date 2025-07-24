# Team Notes Manager (MERN Stack)

This is a full-stack Notes Management application built using the MERN Stack (MongoDB, Express.js, React.js, Node.js). It allows users to create, view, update, and delete team notes with timestamps.

## Stack Used

- **Frontend:** React.js
- **Backend:** Node.js, Express.js
- **Database:** MongoDB

## Features

- Create a new note (title + description)
- List all notes
- Edit an existing note
- Delete a note
- Show "Created At" time
- Show "Updated At" time only after a note has been modified
- Responsive and clean user interface
- Modular code structure (separated by components, routes, controllers, etc.)

## Setup Instructions

### Backend

1. Navigate to the backend folder:
```bash
cd server
```
2. Copy .env.example to .env

```bash
cp .env.example .env
```

3. Compile and run the project
```bash
npm i 
npm run format
npm start
```

### Frontend

1. Navigate to the client folder:
```bash
cd client
```
2. Copy .env.example to .env

```bash
cp .env.example .env
```

3. Compile and run the project
```bash
npm i 
npm run dev
```

