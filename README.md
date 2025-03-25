# Music Discovery App - Technical Exercise

## Overview

Welcome to the Parallel Learning technical exercise! This 45-minute session will assess your full-stack development skills using a music discovery application. The exercise is designed to evaluate:

1. **Code Reading & Comprehension**: How you approach and understand existing code
2. **Problem Solving**: How you implement new features
3. **Technical Communication**: How you explain your thought process and decisions
4. **Architecture Decisions**: How you make trade-offs in a time-constrained environment

The application uses the following technologies:

- **Frontend**: React with TypeScript, React Query
- **Backend**: NestJS
- **Database**: SQLite with Prisma ORM
- **Data**: Kaggle dataset of songs with various audio features

Source:

- [Kaggle: Spotify Song Attributes](https://www.kaggle.com/datasets/joebeachcapital/30000-spotify-songs/data)

## Exercise Structure (45 minutes total)

### Part 1: Code Reading Exercise (15 minutes)

You'll review an existing feature in the application: the playlist recommendation system. This component analyzes a user's existing playlists and suggests songs based on audio features like danceability, energy, and tempo.

**Your task:**

1. Review the actions in the frontend, relative to Playlists and Songs
2. Identify any potential bugs, edge cases, or performance issues
3. Document at least 2-3 improvements you would make
4. Be prepared to explain how the recommendation algorithm currently works

**What we're looking for:**

- How you navigate and understand unfamiliar code
- Your ability to identify potential issues in both frontend and backend systems
- How you communicate technical concepts

### Part 2: Live Coding Challenge (25 minutes)

Building on the same application, you'll implement a little recommendation system for the song catalog.

**Your task:**

1. Introduce a ranking algorithm for recommended songs to add to playlists
2. Implement the corresponding backend API endpoint(s)
3. Ensure your solution handles loading states and potential errors

**Requirements:**

- The search should update results as the user types (with debouncing)
- The filtering should allow for range selection of numeric values
- The solution should be performant when dealing with thousands of songs

**What we're looking for:**

- How you structure frontend components and backend services
- Your approach to state management and API design
- How you handle asynchronous operations and potential edge cases
- Code quality and organization under time constraints

### Part 3: Discussion & Reflection (5 minutes)

We'll end with a brief discussion about your implementation:

- What trade-offs did you make given the time constraints?
- How would you improve your solution with more time?
- What would be your approach to scaling this feature for millions of songs?

## Getting Started

1. The CodeSandbox environment is pre-configured with all necessary dependencies
2. The database is pre-populated with song data
3. Basic API endpoints for fetching songs and playlists are already implemented
4. Spend a few minutes familiarizing yourself with the project structure before diving in

## Evaluation Criteria

We'll evaluate your performance based on:

1. **Code Quality**: Clean, readable, and maintainable code
2. **Problem Solving**: How you approach and solve technical challenges
3. **Technical Decisions**: Your ability to make appropriate trade-offs
4. **Communication**: How you explain your thought process and decisions
5. **Full-Stack Knowledge**: Your understanding of both frontend and backend development
