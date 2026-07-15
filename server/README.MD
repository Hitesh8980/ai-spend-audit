# AI Spend Audit - Backend

## Overview

AI Spend Audit is a backend service that analyzes SaaS subscriptions, identifies cost optimization opportunities, generates AI-powered recommendations, and stores audit reports.

---

## Tech Stack

- Node.js
- Express.js
- Supabase
- OpenRouter AI
- Axios

---

## Features

- SaaS audit generation
- Pricing recommendations
- Monthly & annual savings calculation
- AI-generated audit summary
- Save audit to database
- Share audit by ID
- Lead capture
- Input validation

---

## Installation

```bash
npm install
```

Run the server:

```bash
npm run dev
```

---

## Environment Variables

Create a `.env` file.

```env
PORT=7000

SUPABASE_URL=

SUPABASE_ANON_KEY=

OPENROUTER_API_KEY=
```

---

## API Endpoints

### Generate Audit

POST

```
/api/audit
```

### Get Shared Audit

GET

```
/api/share/:id
```

### Save Lead

POST

```
/api/leads
```

---

## Author

Hitesh Sharma