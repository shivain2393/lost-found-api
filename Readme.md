
# Lost and Found API

The Lost & Found API is a backend service built with **Express.js** and **SQLite**, designed to help users report and retrieve lost and found items efficiently. Users can submit details about lost or found belongings, retrieve item lists, and match lost items with similar found ones. The API ensures smooth management of lost and found reports while maintaining data integrity, security, and efficiency.

**This project includes:**

- Endpoints for reporting, retrieving, and matching lost and found items.
- Schema validation to ensure proper data input.
- Error handling to manage invalid inputs and failures.
- Modular code structure for maintainability and scalability.

## Tech Stack
- **Backend Framework**: Express.js (Node.js)
- **Database**: SQLite
- **Language**: TypeScript
- **Validation**: Schema validation using Zod
- **Version Control**: Git & GitHub

## Setup Instructions for Running Locally
1. Clone the Repository

    ```
    git clone https://github.com/shivain2393/lost-found-api.git
    ```
2. Install Dependencies
    ```
    npm install
    ```
3. Configure Environment Variables
    - Copy Copy the sample environment file and rename it to `.env`:
        ```
        cp .env.sample .env
        ```
    - Open the `.env` file and update any necessary values (if required).
4. Start the Development Server
    ```
    npm run dev
    ```
    - This will start the server in development mode. The API will be accessible at `http://localhost:<PORT>` (default is 3000 if not specified).