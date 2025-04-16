# Angular Task Management App

This project was created as a part of a coursework assignment using Angular framework. It provides a user interface and logic for managing entities such as **Person**, **Engaged Person**, and **Task**. All standard CRUD operations are supported for each of these entities.

## Features

- Full CRUD operations for Person, Engaged Person, and Task.
- Validation for date fields when creating or editing an engagement:
  - End date cannot be before the start date.
  - Invalid date inputs are highlighted in red with error messages below the fields.
- Task table supports sorting by priority in both ascending and descending order.
- Visual representation of task status:
  - Status is shown as a row of 10 squares.
  - The number of filled squares (from left to right) corresponds proportionally to the task's status (from 0 to 1).
  - Users can choose the color for filling the squares.

## Technologies Used

- **Angular** (Standalone components with Angular CLI v19.1.8)
- **Node.js JSON Mock Server** for simulating backend data and testing
- **TypeScript**, **HTML**, **CSS**

## Getting Started

1. Clone this repository:
   ```bash
   git clone https://github.com/ipopadic-ip/angular-task-management-app.git
   cd angular-task-management-app

2. Install dependencies:
   ```bash
   npm install

