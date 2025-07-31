# GreenSteps – Personal Carbon Footprint Calculator

## 🌱 Project Overview

**GreenSteps** is a web-based application designed to help individuals assess and reduce their daily carbon footprint. It takes into account various lifestyle factors such as:

- Travel and transportation
- Electricity usage
- Diet and food habits
- Water consumption

The tool provides a detailed breakdown of carbon emissions and presents the data through clear and interactive charts. It also offers actionable suggestions and eco-friendly habits to empower users in minimizing their environmental impact.

---

## 📦 Tech Stack

- **Frontend**: React, Tailwind CSS, Shadcn/UI, TypeScript
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Build Tool**: Vite

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm (Node Package Manager)
- ## 🗃️ MongoDB Integration (Simulated)

Due to time constraints, MongoDB is simulated using:

- `mock_db.json` — sample data simulating MongoDB documents with users like Ravi, Sita, and Venkat.
- `models/footprintData.js` — Mongoose schema representing carbon footprint structure.
- `api-example.js` — a simple mock API using Express.js to serve JSON data.

This simulation helps visualize how real backend integration would work in future updates.


### Installation

```bash
# Clone the repository
git clone <YOUR_GIT_REPOSITORY_URL>

# Navigate into the project directory
cd greensteps

# Install dependencies
npm install

# Start the development server
npm run dev
