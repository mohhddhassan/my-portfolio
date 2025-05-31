
# [Built Portfolio With GitHub](https://github.com/mohhddhassan/my-portfolio)

---

# Developer Portfolio

#### Are you struggling to create a professional portfolio website? Look no further! Use this Developer Portfolio template and create your very own personalized portfolio today.

✅ Deployed using **[Vercel](https://vercel.com)** for seamless, production-ready hosting.

This portfolio is designed to be user-friendly and easily customizable, making it perfect for both developers and freelancers.

---

# Demo :movie_camera:

![Portfolio Demo](./public/demo/porfolio.gif)

## View live preview [here](https://my-portfolio-git-main-mohamed-hussain-ss-projects.vercel.app/)


---

# What's New in v1.1.0 🛠️

- ✅ Improved overall design and layout for a more polished and professional appearance
- 🧪 Fixed Contact section functionality (now working smoothly)
- 🐛 Squashed several minor bugs for better performance
- 🚀 Confirmed deployment via **Vercel**

---

## Table of Contents :scroll:

- [Sections](#sections-bookmark)
- [Demo](#demo-movie_camera)
- [Installation](#installation-arrow_down)
- [Getting Started](#getting-started-dart)
- [Usage](#usage-joystick)
- [Deployment](#deployment-rocket)
- [Tutorials](#tutorials-wrench)
  - [Gmail App Password Setup](#gmail-app-password-setup)
  - [Create a Telegram Bot](#create-a-telegram-bot)
  - [Fetching Blog from dev.to](#fetching-blog-from-devto)
- [Packages Used](#packages-used-package)

---

# Sections :bookmark:

- HERO SECTION
- ABOUT ME
- EXPERIENCE
- SKILLS
- PROJECTS
- EDUCATION
- BLOG
- CONTACTS

---

# Installation :arrow_down:

### You will need to download Git and Node to run this project:

- [Git](https://git-scm.com/downloads)
- [Node](https://nodejs.org/en/download/)

Check if they’re installed:

```bash
node --version
git --version
````

---

# Getting Started \:dart:

### Fork and Clone the repo

```bash
git clone https://github.com/<YOUR GITHUB USERNAME>/developer-portfolio.git
cd developer-portfolio
```

### Install dependencies

```bash
npm install
# or
yarn install
```

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

---

### Running with Docker Compose

```bash
docker-compose up --build
```

Then go to [http://localhost:3000](http://localhost:3000)

---

### Building the Docker Image

```bash
docker build -t nextjs-app -f Dockerfile.dev .
docker run -p 3000:3000 nextjs-app
```

Visit [http://localhost:3000](http://localhost:3000) to see it running.

---

# Usage \:joystick:

Create a new `.env` file from `.env.example`.

```env
NEXT_PUBLIC_GTM=
NEXT_PUBLIC_APP_URL=
TELEGRAM_BOT_TOKEN=
TELEGRAM_CHAT_ID=
GMAIL_PASSKEY=
EMAIL_ADDRESS=
```

### Customize data in the [`utils/data`](https://github.com/said7388/developer-portfolio/tree/main/utils/data) folder:

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
  resume: "https://drive.google.com/file/d/1eD9WcQmp7tewUDfJgUJ9-UcOzCW7LFU4/view?usp=drive_link",
};
```

---

# Deployment \:rocket:

### Deploying to Vercel:

1. Sign up or log in to [Vercel](https://vercel.com/).
2. Click on **"New Project"** and import your GitHub repo.
3. Add environment variables from your `.env` file.
4. Click **Deploy** – Vercel auto-detects and builds the app.

📦 **Vercel redeploys automatically** when you push new changes!

### Deploying to Netlify:

1. Sign up at [Netlify](https://www.netlify.com/).
2. Choose **"New site from Git"** and link your GitHub repo.
3. Set up environment variables.
4. Deploy site!

---

# Tutorials \:wrench:

## Gmail App Password Setup

* Enable 2-Step Verification in your Google account
* Generate an App Password under "Security" → "App Passwords"
* Save and use it in `GMAIL_PASSKEY`

## Create a Telegram Bot

* Use `@BotFather` on Telegram to generate a bot token
* Send your bot a message and get your `chat_id` via:

  ```
  https://api.telegram.org/bot<BOT_TOKEN>/getUpdates
  ```

## Fetching Blog from dev.to

* Set `devUsername` in `utils/data.js`
* Ensure your dev.to posts are public

---

# Packages Used \:package:

| Package                | Description                 |
| ---------------------- | --------------------------- |
| @emailjs/browser       | For sending emails via JS   |
| @next/third-parties    | Next.js plugin support      |
| axios                  | HTTP client                 |
| lottie-react           | Animation rendering         |
| next                   | React framework             |
| nodemailer             | Email sending via Node      |
| react, react-dom       | React core                  |
| react-fast-marquee     | Marquee animations          |
| react-icons            | Icon pack                   |
| react-google-recaptcha | Google captcha integration  |
| react-toastify         | Toast notifications         |
| sharp                  | Image processing            |
| sass                   | CSS preprocessor            |
| tailwindcss            | Utility-first CSS framework |

---

# FAQ:

### ❓ `next` not recognized?

Run:

```bash
npm install -g next
```

Then use:

```bash
npm run dev
```

---

```

Let me know if you want a downloadable `.md` file or want to push it straight to your repo via CLI.
```
