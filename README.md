# Ron Smithey Financial Services Website

## Project Overview
This repository contains the source code for the Ron Smithey Financial Services website. The website aims to provide a professional online presence for the client, showcasing their services and engaging with prospective customers.

## Tech Stack
- **Frontend:** React, Bootstrap
- **Backend:** Typescript, React, Next.js
- **VCS:** Git and GitHub
- **Deployment:** Vercel

## Team Members
<b>Aidan Anderson</b><br/>
aidananderson2@csus.edu<br/>
Frontend/Backend Developer - Team Lead<br/>

<b>Ethan Millward</b><br/>
ethanmillward@csus.edu<br/>
Frontend Developer<br/>

<b>Adam Truett</b><br/>
adamtruett@csus.edu<br/>
Frontend Developer<br/>

<b>Ahmed Khalaf</b><br/>
akhalaf@csus.edu<br/>
Frontend/Backend Developer<br/>

## Client Info:
- Name: Ron Smithey Financial Services
- Email: ron.smithey@lpl.com

<br/>
<hr>

## Setting up the Project

<b>Please feel free to reach out to us for further instruction on how to set up the project or for any troubleshooting</b><br/>
<b>This project is NOT ready for production level deployment. If you would like to deploy our project, please get in contact with us</b>

Ensure that the latest versions of node.js and npm are installed. You can install both with nvm (Node Version Manager) following this guide:<br/>
https://nodejs.org/en/download

Clone this git repository using git clone to any IDE of your choice.

Run the following commands in the root folder to properly install the project for development:

```bash
npm install
```
Installs all required project dependencies

```bash
npx primsa migrate dev
```

Runs all prisma migrations and pushes them to the connected development database

```bash
npx prisma generate
```

Generates the prisma client, necessary for querying the database

## Setting up database and authentication

Next, you need to set up the ".env" file. This file is a simple text file that contains all the secret keys used to connect to various services.
For example, authentication with Google & GitHub and connection to the Neon Postgres Database.
For security, this file should never be published to a publicly accessible repository.

For guides on how to set up authentication with Google and a Neon Postgres Database please see the links below:<br/>
https://developers.google.com/identity/protocols/oauth2<br/>
https://neon.tech/docs/get-started-with-neon/connect-neon<br/>

Once everything is set up, you can run the following to seed the database:

```bash
npx prisma db seed
```

## Running the development server

Once your .env file is set up correctly, you will be able to run the development server.

```bash
npm run dev
```

Running this command will start the development server at:<br/>
http://localhost:3000

## Deploy on Vercel

The easiest way to deploy the app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
