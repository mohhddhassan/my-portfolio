# [Built Portfolio With GitHub](https://github.com/mohhddhassan/my-portfolio)

---

# Developer Portfolio

A modern and customizable developer portfolio template built with Next.js.

This portfolio is designed to be simple to set up, easy to customize, and production-ready for developers, students, freelancers, and engineers who want a clean online presence.

Deployed using **[Vercel](https://vercel.com/)**.

---

# Demo

![Portfolio Demo](./public/demo/porfolio.gif)

## Live Preview

[View Portfolio](https://mohamedhussain.dev)

---

# What's New in v1.1.0

* Improved overall design and layout
* Fixed Contact section functionality
* Resolved multiple minor bugs
* Deployment support verified with Vercel

---

# Table of Contents

* [Sections](#sections)
* [Demo](#demo)
* [Installation](#installation)
* [Getting Started](#getting-started)
* [Usage](#usage)
* [Deployment](#deployment)
* [Tutorials](#tutorials)

  * [Gmail App Password Setup](#gmail-app-password-setup)
  * [Create a Telegram Bot](#create-a-telegram-bot)
  * [Fetching Blog from devto](#fetching-blog-from-devto)
* [Packages Used](#packages-used)
* [FAQ](#faq)

---

# Sections

* Hero
* About
* Experience
* Skills
* Projects
* Education
* Blog
* Contact

---

# Installation

You will need the following installed on your system:

* [Git](https://git-scm.com/downloads)
* [Node.js](https://nodejs.org/en/download/)

Verify installation:

```bash
node --version
git --version
```

---

# Getting Started

## Clone the Repository

```bash
git clone https://github.com/<YOUR_GITHUB_USERNAME>/developer-portfolio.git

cd developer-portfolio
```

---

## Install Dependencies

```bash
npm install
```

or

```bash
yarn install
```

---

## Start Development Server

```bash
npm run dev
```

or

```bash
yarn dev
```

Open:

```txt
http://localhost:3000
```

---

# Running with Docker Compose

```bash
docker-compose up --build
```

Then visit:

```txt
http://localhost:3000
```

---

# Building the Docker Image

```bash
docker build -t nextjs-app -f Dockerfile.dev .

docker run -p 3000:3000 nextjs-app
```

Open:

```txt
http://localhost:3000
```

---

# Usage

Create a new `.env` file using `.env.example`.

```env
NEXT_PUBLIC_GTM=
NEXT_PUBLIC_APP_URL=
TELEGRAM_BOT_TOKEN=
TELEGRAM_CHAT_ID=
GMAIL_PASSKEY=
EMAIL_ADDRESS=
```

---

## Customize Portfolio Data

Update the files inside:

```txt
utils/data
```

Example:

```javascript
export const personalData = {
  name: "Mohamed Hussain S",
  profile: "/profile.png",
  designation: "Associate Data Engineer",
  description: "I am Mohamed Hussain...",
  email: "mohhddhassan@gmail.com",
  phone: "+91 77088 67386",
  address: "Chennai, India",
  github: "https://github.com/mohhddhassan",
  linkedIn: "https://www.linkedin.com/in/hussainmohhdd/",
  twitter: "https://twitter.com/said7388",
  leetcode: "https://leetcode.com/u/mohhddhassan/",
  devUsername: "mohhddhassan",
  resume:
    "https://drive.google.com/file/d/1eD9WcQmp7tewUDfJgUJ9-UcOzCW7LFU4/view?usp=drive_link",
};
```

---

# Deployment

## Deploying to Vercel

1. Sign in to [Vercel](https://vercel.com/)
2. Create a new project
3. Import your GitHub repository
4. Add environment variables from `.env`
5. Click Deploy

Vercel automatically redeploys the application whenever new changes are pushed.

---

## Deploying to Netlify

1. Sign in to [Netlify](https://www.netlify.com/)
2. Create a new site from Git
3. Connect your GitHub repository
4. Add environment variables
5. Deploy the application

---

# Tutorials

## Gmail App Password Setup

* Enable 2-Step Verification in your Google Account
* Generate an App Password from:

```txt
Google Account -> Security -> App Passwords
```

* Use the generated password in:

```env
GMAIL_PASSKEY=
```

---

## Create a Telegram Bot

* Open Telegram
* Search for:

```txt
@BotFather
```

* Generate a bot token
* Send a message to your bot
* Retrieve your `chat_id` using:

```txt
https://api.telegram.org/bot<BOT_TOKEN>/getUpdates
```

---

## Fetching Blog from dev.to

* Set your username in:

```javascript
devUsername
```

* Ensure your dev.to posts are public

---

# Packages Used

| Package                | Description                     |
| ---------------------- | ------------------------------- |
| @emailjs/browser       | Email integration               |
| @next/third-parties    | Third-party integration support |
| axios                  | HTTP client                     |
| lottie-react           | Animation rendering             |
| next                   | React framework                 |
| nodemailer             | Email sending                   |
| react                  | React library                   |
| react-dom              | React DOM rendering             |
| react-fast-marquee     | Marquee animation               |
| react-icons            | Icon library                    |
| react-google-recaptcha | Google reCAPTCHA                |
| react-toastify         | Toast notifications             |
| sharp                  | Image optimization              |
| sass                   | CSS preprocessor                |
| tailwindcss            | Utility-first CSS framework     |

---

# FAQ

## `next` command not recognized?

Run:

```bash
npm install -g next
```

Then start the development server again:

```bash
npm run dev
```
