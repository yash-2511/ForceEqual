# Target Account Matching System

## Overview

The Target Account Matching System is a backend solution designed to match and score target companies based on certain criteria. It provides a RESTful API to authenticate users, fetch a list of target accounts with match scores, and update the status of a company's target match.

### Tech Stack:
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **API Design**: RESTful API

## Features

- **User Authentication**: Secure login system with JWT-based authentication.
- **Target Account Matching**: Fetch target accounts with their corresponding match scores.
- **Update Target Status**: Allows updating the status of target companies to reflect changes in the match status.
- **RESTful API**: A clean, scalable API that handles user authentication and company account matching.

## Installation

cd backend
npm install


### Prerequisites

- **Node.js**: Ensure Node.js is installed on your machine. If not, download and install from [here](https://nodejs.org/).
- **MongoDB**: Set up a local MongoDB database or use a cloud-based service like MongoDB Atlas.

### Steps to Run the Project

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/yourusername/target-account-matching-system.git
   cd target-account-matching-system
