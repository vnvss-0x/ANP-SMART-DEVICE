# ANP-SMART-DEVICE Management System

## Overview

This repository contains the code for the ANP-SMART-DEVICE Management System, developed as part of my final year project at the Agence Nationale des Ports (ANP). The system is designed to efficiently manage and monitor IT devices within the organization.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

## Features

- Real-time monitoring of IT devices
- Comprehensive inventory management
- Maintenance request management
- User authentication and authorization
- Detailed reporting and analytics
- Administrative and employee views

## Technologies Used

- **Frontend:** ReactJS, Tailwind CSS, Font Awesome, Flowbite
- **Backend:** PHP, Laravel
- **Database:** MySQL
- **Tools:** Visual Studio Code, Postman, MySQL Workbench

## Installation

### Prerequisites

- Node.js
- Composer
- PHP
- MySQL/SQLite or any supported database by Laravel

### Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/vnvss-0x/ANP-SMART-DEVICE.git
   cd ANP-SMART-DEVICE
   ```

2. **Install backend dependencies:**
   ```bash
   composer install
   ```

3. **Install frontend dependencies:**
   ```bash
   cd frontend
   npm install
   ```

4. **Set up the database:**
   - Copy the example environment file and modify it:
     ```bash
     cd ..
     cp .env.example .env
     ```
   - Configure the database connection in the `.env` file.

5. **Run migrations and seeders:**
   ```bash
   php artisan migrate
   php artisan db:seed
   ```

6. **Start the development servers:**
   - Open a new terminal in the project directory and start the backend server:
     ```bash
     php artisan serve
     ```
   - Open another terminal in the project directory and start the frontend server:
     ```bash
     cd frontend
     npm run dev
     ```

## Usage

### Admin Interface

- **Login:** Access the admin login page and enter your credentials.
- **Manage Devices:** View, add, update, and delete IT devices.
- **Manage Employees:** View, add, update, and delete employee information.
- **Maintenance Requests:** View and manage maintenance requests from employees.

### Employee Interface

- **Login:** Access the employee login page and enter your credentials (default: `admin` | `admin1234`).
- **Device Information:** View the list of IT devices assigned.
- **Maintenance Requests:** Submit maintenance requests for any device issues.

## Screenshots

### Login Page
![Login Page](path/to/login-page-screenshot.png)

### Admin Dashboard
![Admin Dashboard](path/to/admin-dashboard-screenshot.png)

### Device Management
![Device Management](path/to/device-management-screenshot.png)

### Maintenance Requests
![Maintenance Requests](path/to/maintenance-requests-screenshot.png)

### Employee Dashboard
![Employee Dashboard](path/to/employee-dashboard-screenshot.png)

## Contributing

We welcome contributions! Please read our [Contributing Guide](CONTRIBUTING.md) to get started.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
