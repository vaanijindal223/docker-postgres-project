# Containerized Web Application with PostgreSQL using Docker Compose and Macvlan
# NAME : VAANI JINDAL
# SAP: 500119144
# BATCH : 2

## 1. Introduction

This project demonstrates the containerization and deployment of a web application using Docker technologies. The application consists of a Node.js backend connected to a PostgreSQL database. Docker Compose is used to orchestrate the containers, while Docker networking concepts such as Macvlan and bridge networking are demonstrated.

The objective of the project is to understand containerized deployment, service orchestration, persistent storage, and networking using Docker.

---

# 2. Project Objectives

The main objectives of this project are:

- Design a containerized web application
- Use PostgreSQL as the database
- Implement backend API using Node.js
- Build Docker images using Dockerfiles
- Use Docker Compose for multi-container orchestration
- Demonstrate container networking concepts
- Implement persistent storage using Docker volumes

---

# 3. Project Architecture

The system architecture consists of two containers:

1. Backend Container (Node.js + Express)
2. Database Container (PostgreSQL)

The backend communicates with the PostgreSQL container through a Docker network.

---

# 5. Backend Implementation

The backend is implemented using Node.js and Express.

The backend server connects to the PostgreSQL database using the `pg` library and provides an API endpoint.

Example API endpoint:

This endpoint queries the database and returns the current time from PostgreSQL.

---

# 6. Dockerfile Implementation

## Backend Dockerfile

The backend Dockerfile builds the Node.js application container.

Key steps include:

- Using the Node.js base image
- Installing dependencies
- Copying application files
- Exposing port 3000

---

## Database Dockerfile

The PostgreSQL container is built using the official PostgreSQL image and configured using environment variables.

---

# 7. Docker Compose Configuration

Docker Compose is used to run multiple containers together.

The configuration defines:

- Backend service
- Database service
- Docker network
- Persistent volumes

Docker Compose command used:


---

# 8. Container Build Process

The following screenshot shows the container build process and service initialization.

![Docker Build](project%20images/a.png)

---

# 9. Container Execution

The containers are started using Docker Compose.

The backend container starts the Node.js server and connects to PostgreSQL.

![Container Startup](project%20images/b.png)

---

# 10. Running Containers

The following screenshot shows the running containers using the `docker ps` command.

![Running Containers](project%20images/c.png)

---

# 11. Docker Network Inspection

Docker networks allow containers to communicate with each other.

The network inspection command used:


Screenshot:

![Network Inspect](project%20images/d.png)

---

# 12. Container IP Address

Each container receives an IP address within the Docker network.

Screenshot showing container details:

![Container IP](project%20images/e.png)

---

# 13. Volume Persistence Test

Docker volumes are used to persist database data even when containers are stopped or restarted.

Screenshot showing volume persistence:

![Volume Persistence](project%20images/f.png)

---

# 14. Macvlan Network Creation

Macvlan networking allows containers to appear as physical devices on the network.

Command used:


Screenshot:

![Macvlan Network](project%20images/g.png)

---

# 15. Application Output

The backend successfully connects to PostgreSQL and returns the database timestamp.

Example output:


Screenshot:

![Application Output](project%20images/h.png)

---

# 16. Image Size Comparison

| Image | Approx Size |
|------|-------------|
| Node.js Base Image | ~350 MB |
| PostgreSQL Image | ~300 MB |

Using optimized Docker builds helps reduce image size and improve deployment performance.

---

# 17. Macvlan vs Ipvlan Comparison

| Feature | Macvlan | Ipvlan |
|--------|--------|--------|
| IP per Container | Yes | Yes |
| Performance | High | Very High |
| Isolation | Strong | Moderate |
| Complexity | Moderate | Higher |

---

# 18. GitHub Repository

Project repository:


Screenshot:

![Application Output](project%20images/h.png)

---

# 16. Image Size Comparison

| Image | Approx Size |
|------|-------------|
| Node.js Base Image | ~350 MB |
| PostgreSQL Image | ~300 MB |

Using optimized Docker builds helps reduce image size and improve deployment performance.

---

# 17. Macvlan vs Ipvlan Comparison

| Feature | Macvlan | Ipvlan |
|--------|--------|--------|
| IP per Container | Yes | Yes |
| Performance | High | Very High |
| Isolation | Strong | Moderate |
| Complexity | Moderate | Higher |

---

# 18. GitHub Repository

# 19. Conclusion

This project successfully demonstrates the deployment of a containerized web application using Docker technologies.

Key achievements include:

- Multi-container application architecture
- Docker Compose orchestration
- PostgreSQL database integration
- Persistent storage using Docker volumes
- Container networking implementation
- Macvlan network creation
- Source control using Git and GitHub

This project provides a strong foundation for understanding containerized application deployment and modern DevOps practices.

