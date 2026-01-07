1. Problem Statement & Solution Overview
Problem Statement

Millions of local trains in India run late every day, yet commuters rarely receive accurate, real-time updates or actionable route alternatives. This uncertainty leads to delays, missed connections, overcrowded stations, and inefficient travel.

Solution Overview

We will build a web application that provides real-time train status, delay predictions, and alternative route suggestions to help commuters make informed decisions.
Our solution integrates mock real-time train data, user-friendly dashboards, and intelligent routing logic to deliver a simplified, reliable experience.

Goal of the Project

To develop a functional MVP that enables users to:

View real-time train arrival/delay information

Receive alternative travel routes

Make faster, more informed commute decisions

2. Scope & Boundaries
In Scope (This 4-Week Sprint)

User authentication (Signup/Login with JWT)

Real-time train data integration (mock API)

Dashboard with:

Current train status

Delay predictions

Simple alternate-route suggestions

Basic UI pages (Home, Login, Dashboard)

Frontend–Backend integration

Testing & cloud deployment

Out of Scope (Future Enhancements)

Official Indian Railways API integration

Mobile app version

Advanced machine learning predictions

Crowd-density heatmap

Metro/bus integration

3. Team Roles & Responsibilities (3 Members)
Role	Team Member	Responsibilities
Full-Stack Lead	Member A	Project structure, backend APIs, DB schema, major feature integration, code reviews
Frontend & UX Developer	Member B	UI design, React components, routing, dashboard pages, API integration on UI
Backend, Testing & Deployment Engineer	Member C	Authentication, real-time data service, unit tests, integration tests, CI/CD, deployment
4. Technologies & Tools
Frontend

React.js

TailwindCSS

Axios

React Router

Backend

Node.js

Express.js

MongoDB (Mongoose)

JWT Authentication

DevOps & Tools

Git & GitHub

GitHub Actions (CI/CD)

Docker (optional)

Deployment: Render / Vercel / Netlify

Postman / Bruno for API testing

5. Sprint Timeline (4 Weeks)
Week 1 — Setup & Design

Project planning & environment setup

GitHub repo + folder structure

HLD/LLD preparation

UI wireframes & user flow

Database schema finalization

Authentication boilerplate

Deliverables:

Approved designs

Functional project scaffold

Authentication routes planned

Week 2 — Core Feature Development

Build authentication APIs

Build mock train data API

Core UI components (Navbar, Dashboard layout)

Train status cards & layout

Basic alternate route logic

Deliverables:

Working Auth system

Initial dashboard view

API endpoints functional

Week 3 — Integration & Testing

Connect frontend with backend

Real-time data refresh using polling

API error handling

Unit tests for backend

CI/CD pipeline setup

Deliverables:

Integrated full-stack app

70–80% of MVP features complete

Automated testing workflows

Week 4 — Finalization & Deployment

UI improvements & final touches

Complete route suggestion logic

Manual end-to-end testing

Final deployment to cloud

Documentation + sprint retrospective

Deliverables:

Fully functional MVP

Live deployment link

Documentation & demo-ready product

6. MVP (Minimum Viable Product)
Must-Have Functionalities

User login/signup with JWT

Dashboard showing:

Train name/number

Real-time arrival/departure info (mocked)

Delay estimation

Basic alternative route suggestions

Responsive UI

Stable backend with live deployment

7. Functional Requirements

Users must be able to register, log in, and authenticate securely.

The system must fetch and display live (mock) train data.

Dashboard must show train delay, ETA, and status.

System must provide alternate route suggestions.

Data on the dashboard must refresh every 10–15 seconds.