# Node.js Chat Application

This is a simple chat application built using Node.js, Express, and Socket.IO. It allows users to join a chat room, send messages, and see messages from other users in real-time.

## Installation
Clone the repository:
git clone <repository-url>

Navigate to the project directory:
cd <project-directory>

Install dependencies:
npm install

Usage
Start the server:
npm start


Open your web browser and navigate to http://localhost:5000 (or the appropriate URL if you've configured a different port).
Enter your username and join the chat room.
Start chatting with other users!

Dependencies
Express: Fast, unopinionated, minimalist web framework for Node.js.
Socket.IO: Enables real-time bidirectional event-based communication.
Cors: Middleware for Express.js to enable CORS (Cross-Origin Resource Sharing) with various options.
Configuration

The server listens on port 5000 by default. You can change the port by setting the PORT environment variable.
Features

Real-time messaging: Messages are sent and received instantly using Socket.IO.
User join/leave notifications: When a user joins or leaves the chat, all connected users are notified.
Cross-origin resource sharing (CORS) is enabled to allow requests from any origin.
