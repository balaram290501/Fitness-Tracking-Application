# Fitness Tracker Microservices Application

This project is a full-stack fitness tracking application built with a modern microservices architecture. It allows users to log their fitness activities, view AI-generated recommendations for improvement, and manage their profiles securely using OAuth2 authentication with Keycloak.

## Features

- **User Authentication:** Secure login and session management using Keycloak and OAuth2 PKCE.
- **Activity Tracking:** Users can add activities (type, duration, calories burned) and view their activity history.
- **AI Recommendations:** After adding an activity, users receive personalized recommendations and suggestions powered by the Gemini API.
- **Microservices Architecture:** 
  - **User Service:** Manages user profiles and authentication.
  - **Activity Service:** Handles activity CRUD operations.
  - **AI Service:** Generates recommendations using the Gemini API.
- **Inter-Service Communication:** 
  - **RabbitMQ** is used for asynchronous messaging between Activity and AI services.
  - **Web Template** is used for communication between User and Activity services.
- **Frontend:** Built with React, Redux, and Material UI for a responsive user experience.
- **Backend:** Java Spring Boot microservices.



## Getting Started

### Prerequisites

- Node.js and npm
- Java 17+ (for backend microservices)
- Spring Boot
- Docker (for RabbitMQ and Keycloak, optional but recommended)

### Running the Application

#### 1. Start Backend Microservices

- Clone the backend repositories for User, Activity, and AI services.
- Configure each service to connect to RabbitMQ and Keycloak.
- Start each service (typically with `./mvnw spring-boot:run`).

#### 2. Start RabbitMQ

You can run RabbitMQ using Docker:

```sh
docker run -d --hostname rabbitmq --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:3-management
```

#### 3. Start Keycloak

You can run Keycloak using Docker:

```sh
docker run -p 8181:8080 -e KEYCLOAK_ADMIN=admin -e KEYCLOAK_ADMIN_PASSWORD=admin quay.io/keycloak/keycloak:24.0.1 start-dev
```

- Import or create a realm named `fitness-oauth2` and a client named `oauth2-pkce-client` with the correct redirect URIs.

#### 4. Start the Frontend

```sh
npm install
npm run dev
```

- The app will be available at [http://localhost:5173](http://localhost:5173).

## Configuration

- **Keycloak endpoints** are configured in [`src/authConfig.js`](src/authConfig.js).
- **API endpoints** are configured in [`src/services/api.js`](src/services/api.js).

## Usage

1. Open the app in your browser.
2. Log in using Keycloak.
3. Add new activities with type, duration, and calories burned.
4. View AI-generated recommendations for each activity.

## Technologies Used

- **Frontend:** React, Redux, Material UI, Vite
- **Backend:** Java Spring Boot (User, Activity, AI services)
- **Authentication:** Keycloak (OAuth2 PKCE)
- **Messaging:** RabbitMQ
- **AI Integration:** Gemini API

---
