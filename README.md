# TDL Junior Full Stack Developer Test

Welcome to the TDL Junior Full Stack Developer Test repository. This project consists of a Next.js application, a Node.js API, and a MongoDB database, all orchestrated using Docker Compose.

## Getting Started

Follow these instructions to get the application up and running on your local machine.

### Prerequisites

Make sure you have the following software installed:

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

### Installation

1. Clone the repository:

    ```bash
    git clone <repository-url>
    cd <repository-directory>
    ```

2. Build and start the application:

    ```bash
    docker-compose up --build
    ```

3. Open your browser and navigate to:

    ```
    http://localhost:3000/
    ```

## Project Structure

- `nextjs/`: Contains the Next.js application.
- `api/`: Contains the Node.js API.
- `Dockerfile`: Docker configuration for each service.
- `docker-compose.yml`: Docker Compose configuration file.

## Usage

The application is composed of three main services:

- **Next.js (Frontend)**: Accessible at `http://localhost:3000/`
- **Node.js API**: Accessible at `http://localhost:8000/`
- **MongoDB**: Accessible at `mongodb://localhost:27017/`

### Stopping the Application

To stop the application, use:

```bash
docker-compose down
