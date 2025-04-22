# 🚀 Automated CI/CD Pipeline with Google Cloud Build & GKE
This project demonstrates how to build, containerize, and deploy a full-stack Todo App to Google Kubernetes Engine (GKE) with an automated CI/CD pipeline using Google Cloud Build Triggers.

![GCP_PROJECT drawio](https://github.com/user-attachments/assets/c91d3c4a-17b3-4a54-8a8e-4ab307837648)


## 📍 Overview
This app is a simple full-stack Todo Tracker built with React (Frontend) and Django (Backend).
It is deployed on GKE, and the CI/CD pipeline is fully automated using Google Cloud services.
Any changes made in the GitHub repository automatically trigger a build and deploy pipeline.

### 🎯 Features:
 - ✅ Full-stack Todo app with CRUD functionality
 - ✅ Containerized using Docker
 - ✅ Deployed on GKE with a LoadBalancer service
 - ✅ GitHub → Cloud Build Trigger → Artifact Registry → GKE (CI/CD)

### 🛠️ Tech Stack:
 - ⚙️ Backend: Django, Django REST Framework
 - 🎨 Frontend: React.js
 - 🐳 Containers: Docker

### ☁️ Cloud Services:
 - Google Cloud Build
 - Google Artifact Registry
 - Google Kubernetes Engine (GKE)
