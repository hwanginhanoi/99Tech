
# 99Tech Problem 5
## Description
This project is a simple CRUD backend built with Express and TypeScript. It uses MySQL as the database and Prisma as the ORM. The codebase structure is inspired by Springboot.

## Prerequisites
- Node.js
- Docker
- Docker Compose

## Setup

### 1. Install dependencies
```bash
npm install
```

### 2. Configure environment variables
Create a `.env` file in the root directory and add the following:
```
DATABASE_URL="mysql://root:password@localhost:3306/user"
```

### 3. Set up MySQL with Docker Compose
Create a `docker-compose.yml` file with the following content:
```yaml
version: '3.8'

services:
  mysql:
    image: mysql:8.0
    container_name: mysql
    environment:
      MYSQL_ROOT_PASSWORD: password
      MYSQL_DATABASE: user
    ports:
      - "3306:3306"
```

Start the MySQL container:
```bash
docker-compose up -d
```

### 4. Generate Prisma client and migrate the database
```bash
npx prisma generate
npx prisma migrate dev --name init
```

## Running the Application
```bash
npm run dev
```

The application will be running at `http://localhost:3000`.

## API Endpoints

### Create User
- **Method**: POST
- **URL**: `/api/users`
- **Body**:
  ```json
  {
    "name": "Test"
  }
  ```

### Get All Users
- **Method**: GET
- **URL**: `/api/users`

### Get User by ID
- **Method**: GET
- **URL**: `/api/users/:id`

### Update User
- **Method**: PUT
- **URL**: `/api/users/:id`
- **Body**:
  ```json
  {
    "name": "Test"
  }
  ```

### Delete User
- **Method**: DELETE
- **URL**: `/api/users/:id`

## Testing with Postman
You can use the provided Postman collection to test the API endpoints. Import the collection into Postman and use the following requests:
- Create User
- Get All Users
- Get User by ID
- Update User
- Delete User
