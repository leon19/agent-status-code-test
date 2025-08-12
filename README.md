# Agent Status Code test

## User Story

As a Call Center System, I need to track the status of agents (e.g., `Available`, `Busy`, `Offline`) so that I can efficiently find an
available agent to route an incoming call to.

## Requirements

- A dynamodb table to store agent statuses
- An API endpoint to update agent statuses
- An API endpoint to retrieve all the agents filtering by status

## Get Started

The goal is to assess the candidate's technical skills, problem-solving approach, communication, and collaborative spirit. The focus is on
their thought process, not just on completing the exercise.

You can implement the application using any HTTP framework or even lambdas and API Gateway.

We provide a scaffolded project with a very basic starting point for NestJS or express. You can use it or start from scratch.

## Installation

```shell
git clone https://github.com/leon19/agent-status-code-test
npm install
```

### Run localstack for local development

```shell
docker compose up
```

## Running the Application

There is an `.env` file preconfigured for local development. You can change the values if needed.

### Express

```shell
npm run dev:express
```

It will run the `src/app/express.ts` listening on port `3000`.

```shell
npm run dev:nestjs
```

It will run the `src/app/nestjs/nestjs.ts` listening on port `3000`.
