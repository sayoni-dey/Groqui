# 🤖 Groqui

> A production-inspired AI chat application built with **Next.js**, **Node.js**, **MongoDB**, **Redis**, **Clerk**, and **Groq APIs**, featuring multimodal conversations, PDF summarization, authentication, intelligent rate limiting, and a modern ChatGPT-inspired interface.

---

## 📖 Overview

OpenChat is a full-stack AI chat application that replicates the core experience of modern conversational AI platforms while introducing several production-level backend concepts.

The project focuses on building a scalable architecture rather than just connecting an LLM API. It demonstrates:

* Secure authentication
* Intelligent API rate limiting
* Anonymous user management
* Multimodal AI conversations
* PDF summarization
* Streaming AI responses
* Persistent chat history
* Responsive and modern UI

Instead of relying on a single AI model for every task, OpenChat intelligently uses **different Groq models** depending on the use case.

---

# ✨ Features

## 💬 AI Chat

Experience fast conversational AI powered by Groq's ultra-low latency inference.

For normal conversations, OpenChat uses:

**Model**

```
llama-3.1-8b-instant
```

This model was selected because it provides:

* Extremely fast response generation
* Low latency
* Excellent conversational performance
* Better user experience for regular chats

---

## 🖼️ Multimodal Conversations

OpenChat supports multimodal interactions using:

```
qwen/qwen3.6-27b
```

This model is capable of understanding multiple input types.

### Currently Implemented

✅ Image Understanding

Users can upload an image along with a prompt, allowing the AI to:

* Describe images
* Explain screenshots
* Analyze diagrams
* Read text from images
* Answer questions about uploaded images

> **Note:** Although the model supports broader multimodal capabilities, **this project currently implements image inputs only.**

---

## 📄 PDF Summarization

One of the major features of OpenChat is intelligent PDF summarization.

Instead of simply sending an entire PDF to the model, the backend performs:

* PDF extraction
* Text chunking
* Chunk processing
* AI summarization
* Final summary generation

This approach allows larger PDFs to be summarized efficiently while staying within model token limits.

Perfect for summarizing:

* Research papers
* Documentation
* Assignments
* Reports
* Notes

---

## 📝 Formatted AI Responses

AI responses are automatically formatted into readable Markdown.

Supported formatting includes:

* Headings
* Bullet lists
* Numbered lists
* Tables
* Inline code
* Code blocks
* Quotes
* Links
* Bold and italic text

This makes technical explanations significantly easier to read compared to plain text responses.

---

## 🆕 New Chat

Users can instantly start a fresh conversation without affecting previous chats.

Every new conversation is stored independently inside MongoDB, allowing conversations to remain organized.

---

## 🔍 Search Chat

Searching through previous conversations becomes effortless.

The search feature enables users to quickly locate conversations based on their titles or previous interactions instead of manually scrolling through long chat histories.

---

## 🕒 Persistent Chat History

Every authenticated user's conversations are stored securely.

Features include:

* Automatic history saving
* Reopening previous chats
* Continuing old conversations
* Organized chat sessions

---

## 🔒 Authentication with Clerk

Authentication is fully managed using **Clerk**, providing a secure and seamless login experience.

Supported authentication methods:

* Email & Password
* Google Sign-In
* GitHub Sign-In

Additional security features include:

* Email OTP verification
* Secure session handling
* Protected routes
* User profile management

---

## 👤 Flexible Username

Users are free to customize their usernames after authentication.

Unlike many authentication systems that permanently bind usernames to login credentials, OpenChat allows flexible username management while maintaining secure user identities.

---

## 🌙 Theme Switching

Users can switch between:

* 🌞 Light Mode
* 🌙 Dark Mode

The interface updates instantly, allowing users to choose the appearance that best suits their preferences.

---

# ⚡ Intelligent Rate Limiting

OpenChat implements multiple layers of rate limiting to protect the backend and prevent abuse.

## 1. Model-Specific Groq Limits

Each Groq model has its own official API limits.

The backend tracks and enforces these limits based directly on the values published in the Groq documentation.

The following limits are monitored:

### RPM (Requests Per Minute)

Limits how many API requests can be made every minute.

---

### RPD (Requests Per Day)

Limits the total number of requests a model can receive in a single day.

---

### TPM (Tokens Per Minute)

Tracks the number of tokens consumed every minute.

This prevents excessive token usage even if the request count is low.

---

### TPD (Tokens Per Day)

Tracks daily token consumption to ensure usage remains within the model's allowed quota.

---

The rate limiter dynamically applies the correct limits depending on which Groq model is being used.

---

## 2. Anonymous User Protection (Redis)

OpenChat also protects the backend from abuse by unauthenticated visitors.

Anonymous users are tracked using **Redis**.

Current policy:

```
5 requests every 5 hours
```

Once the limit is reached, users must either:

* Wait until the cooldown expires
* Sign in to continue chatting

Using Redis makes this process extremely fast while avoiding unnecessary database queries.

---

# 🛠 Tech Stack

## Frontend

* Next.js
* React
* TypeScript
* Tailwind CSS

---

## Backend

* Node.js
* Express.js

---

## Database

* MongoDB
* Mongoose

---

## Authentication

* Clerk

---

## Caching & Rate Limiting

* Redis

---

## AI Models

### Regular Chat

```
llama-3.1-8b-instant
```

Purpose:

* Fast conversational responses
* Low latency messaging

---

### Multimodal & PDF Summarization

```
qwen/qwen3.6-27b
```

Purpose:

* Image understanding
* PDF summarization
* Multimodal reasoning

---

# 🏗 Project Architecture

```
Frontend (Next.js)

        │
        ▼

Express Backend

        │

 ┌──────────────┬──────────────┬───────────────┐
 │              │              │               |
 ▼              ▼              ▼               ▼ 
Clerk        Redis          MongoDB        Groq Api

```

---

# 🚀 Why This Project?

This project was built to explore how modern AI applications are designed beyond simply calling an LLM API.

Key engineering concepts implemented include:

* Full-stack architecture
* Authentication and authorization
* Persistent chat management
* AI model orchestration
* Model-specific rate limiting
* Redis-based request control
* Multimodal AI integration
* PDF processing pipeline
* Markdown rendering
* Production-inspired backend structure

The result is an application that closely mirrors the architecture and user experience of commercial AI chat platforms while showcasing practical backend engineering concepts.

---

# 📌 Future Improvements

Some planned enhancements include:

* 🎥 Support for additional multimodal inputs such as audio and video
* 📎 Drag-and-drop file uploads
* 📚 Retrieval-Augmented Generation (RAG) using custom knowledge bases
* 🧠 Conversation memory and contextual personalization
* 🌐 Multi-model selection by users
* 📊 Usage analytics dashboard
* ⚙️ Docker and Kubernetes deployment
* ☁️ AWS deployment with CI/CD pipelines
* 🔄 Streaming responses with advanced cancellation and retry support
* 📝 Chat export (PDF/Markdown)
* 📱 Progressive Web App (PWA) support
