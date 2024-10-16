# Traffic Light System Simulation
# Overview
This project is a web-based simulation of a traffic light system for a four-road junction. The system controls the traffic lights at the junction, sequencing through green, yellow, and red lights with customizable timing. Users can adjust the duration of the green light, while the yellow and red lights are automatically managed based on the simulation's logic.

The project is built using Angular (TypeScript, HTML, and CSS), with a responsive layout to ensure usability across both desktop and mobile devices.

# Features
1. Light Sequence Logic:
   The yellow light is fixed at 1 second.
   The green light can be customized by the user (default: 5 seconds).
   The red light's duration is automatically adjusted based on the other lights.
2. User Interactivity: Users can change the green light duration dynamically using the input field and  button provided in the UI.
3. Responsive Design: The application works seamlessly on both desktop and mobile devices.
Real-time Visualization: The UI displays traffic lights for all directions, updating in real time as the lights transition between red, yellow, and green.

#  Technologies Used
Frontend Framework: Angular
Languages: TypeScript, HTML, CSS
Responsive Design: CSS media queries for mobile and desktop compatibility
State Management: Logic handled in TypeScript using intervals and setTimeout
Accessibility: Basic ARIA roles and accessible keyboard navigation for interactive elements

# How It Works
Light Timing Logic
1. Yellow Light: Fixed at 1 second for all directions.
2. Green Light: Starts at 5 seconds (configurable). Users can change this using an input field.
3. Red Light: Automatically calculated to ensure all directions are synchronized properly.

# The lights follow a sequence where:

1. The green light is active in one direction.
2. After the green light, the yellow light is shown for 1 second.
3. The light then transitions to red, and the next direction turns green.
4. Before each new green light appears, the previous green direction turns yellow for 1 second.

# Light Cycle Example
1. South Light turns green for 5 seconds (or the custom user duration).
2. South Light turns yellow for 1 second before turning red.
3. East Light turns yellow for 1 second and then green for 5 seconds.
4. The cycle continues, switching between all four directions.

# Setup Instructions

Prerequisites
Node.js (v14.x or higher)
Angular CLI (v12.x or higher)

# Installation
Clone the repository:

``` git clone <repository-url> ```

Navigate to the project directory:

``` cd traffic-light-simulation ```

Install the dependencies:

``` npm install ```

Run the development server:

``` ng serve ```

Open your browser and navigate to http://localhost:4200/.