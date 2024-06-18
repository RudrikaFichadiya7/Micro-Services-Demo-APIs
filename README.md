# Micro-Services-Demo-APIs

This project demonstrates a basic microservice architecture with an API Gateway, User Service, and Product Service. Each service is implemented using Node.js with Express, a minimal and flexible Node.js web application framework.

## Components

1. **API Gateway**: Routes requests to the appropriate microservice.
2. **User Service**: Manages user-related operations.
3. **Product Service**: Manages product-related operations.

## Requirements

- Node.js
- npm (Node package manager)

## Setup

### 1. Clone the Repository

```sh
[git clone https://github.com/yourusername/microservice-demo.git](https://github.com/RudrikaFichadiya7/Micro-Services-Demo-APIs.git)
cd Micro-Services-Demo-APIs
```

### 2. Install Dependencies

Navigate to each service directory and install the dependencies using `npm`.

```sh
cd api-gateway
npm install
cd ../user-service
npm install
cd ../product-service
npm install
```

### 3. Run the Services

#### Start the User Service

```sh
cd user-service
node app.js
```

The User Service will run on port `5001`.

#### Start the Product Service

```sh
cd product-service
node app.js
```

The Product Service will run on port `5002`.

#### Start the API Gateway

```sh
cd api-gateway
node app.js
```

The API Gateway will run on port `3000`.

## Usage

### User Service

#### Get All Users

```sh
curl -X GET http://localhost:3000/users
```

#### Add a New User

```sh
curl -X POST [http://localhost:3000/users](http://localhost:3000/users) -H "Content-Type: application/json", "x-tenant-id: tenant1" -d '{"name": "Tenant1User", "email": "tenant1User@yopmail.com"}'
```

### Product Service

#### Get All Products

```sh
curl -X GET http://localhost:5000/products -H "x-tenant-id: tenant1"
```

#### Add a New Product

```sh
curl -X POST http://localhost:5000/products -H "Content-Type: application/json", "x-tenant-id: tenant1" -d '{"name": "Tenant1Product", "price": "20", "owner": "666ae573354f1883ce531068"}'
```

## File Structure

```
Micro-Services-Demo-APIs/
├── api-gateway/
│   ├── app.js
│   └── package.json
├── user-service/
│   ├── controllers
│   │   ├── productController.js
│   ├── models
│   │   ├── Product.js
│   ├── routes
│   │   ├── productRoutes.js
│   ├── app.js
│   └── package.json
├── product-service/
│   ├── controllers
│   │   ├── userController.js
│   ├── models
│   │   ├── User.js
│   ├── routes
│   │   ├── userRoutes.js
│   ├── app.js
│   └── package.json
└── README.md
```

## Conclusion

This project provides a simple example of how to set up a microservice architecture using Node.js. The API Gateway handles incoming requests and routes them to the appropriate service, allowing the User Service and Product Service to operate independently.

Feel free to expand this project by adding more features, improving error handling, and incorporating more advanced concepts such as service discovery and load balancing.

---
