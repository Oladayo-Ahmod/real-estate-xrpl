### Project Description

**Real Estate Tokenization Platform on XRP Ledger**

This project is a web application built with Next.js and Bootstrap that allows users to tokenize real estate properties on the XRP Ledger. The platform enables users to register, verify properties, and tokenize them, converting real estate assets into Non-Fungible Tokens (NFTs) on the blockchain. The backend is powered by Express.js and interacts with the XRP Ledger using the `xrpl` library.

### README

# Real Estate Tokenization Platform

This project allows users to tokenize real estate properties on the XRP Ledger. Users can register, verify properties, and tokenize them into NFTs.

## Features

- User Registration and Authentication
- Property Verification
- Tokenization of Real Estate Properties on the XRP Ledger
- RESTful API with JWT Authentication

## Technologies Used

- Next.js
- Bootstrap
- Express.js
- MongoDB
- JWT for Authentication
- XRPL (XRP Ledger Library)

## Prerequisites

- Node.js
- MongoDB
- Ripple Testnet Account (for XRP Ledger interactions)

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/oladayo-ahmod/real-estate-xrpl.git
cd real-estate-xrpl
```

### Install Dependencies

```bash
# For the backend
cd backend
npm install

# For the frontend
cd ../frontend
npm install
```

### Environment Variables

Create a `.env` file in the `backend` directory with the following content:

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
XRP_SEED=your_xrp_seed
```

### Run the Backend Server

`cd backend`
`npm start`

### Run the Backend Server

```bash
cd backend
npm start
```

This will start the backend server on `http://localhost:5000`.

### Run the Frontend

```bash
cd ../frontend
npm run dev
```

This will start the Next.js development server on `http://localhost:3000`.

### How to Use

1. **Register a New User**:
   - Visit `http://localhost:3000/register` to create a new account.

2. **Login**:
   - Visit `http://localhost:3000/login` to log in with your credentials.

3. **Add a Property**:
   - After logging in, navigate to the `Add Property` page to add a new property.

4. **Verify a Property**:
   - You will be redirected to verify your property on `http://localhost:3000/verify-property` page.

5. **Tokenize a Property**:
   - Once verified, navigate to the `http://localhost:3000/tokenize-property` page to tokenize the property. The property will be converted into an NFT on the XRP Ledger.

### API Endpoints

- **Register**: `POST /api/users/register`
- **Login**: `POST /api/users/login`
- **Add Property**: `POST /api/properties/add`
- **Verify Property**: `POST /api/properties/verify`
- **Tokenize Property**: `POST /api/properties/tokenize`



### Troubleshooting

- **CORS Issues**: Ensure that the backend server has CORS enabled for the frontend URL.
- **Environment Variables**: Verify that all required environment variables are correctly set in the `.env` file.
- **MongoDB Connection**: Ensure that your MongoDB server is running and the connection string in the `.env` file is correct.

### Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

### License

This project is licensed under the MIT License.

---

By following these instructions, you should be able to set up and run the Real Estate Tokenization Platform on your local machine. If you encounter any issues or have questions, feel free to open an issue on the GitHub repository.
