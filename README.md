# Fire Kitchen

<details>
  <summary>Table of Contents</summary>
  <ul>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
</details>

## About the Project

This is a full-stack blog app where you find and share food recipes. I have built this with [React.js](https://react.dev/) and [ASP.NET Web API](https://dotnet.microsoft.com/en-us/apps/aspnet). Unlike my other projects, I have used [React Query](https://tanstack.com/query/latest/docs/framework/react/overview) instead of React Redux this time. Also, I have used [Bootstrap](https://getbootstrap.com/) for styling.
This is a full-stack blog app where you find and share food recipes. I have built this with [React.js](https://react.dev/) and [ASP.NET Web API](https://dotnet.microsoft.com/en-us/apps/aspnet). Unlike my other projects, I have used [React Query](https://tanstack.com/query/latest/docs/framework/react/overview) instead of React Redux this time. Also, for styling I have used [Bootstrap](https://getbootstrap.com/).

## Built with

[![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://react.dev/)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![React Query](https://img.shields.io/badge/React_Query-FF4154?style=for-the-badge&logo=ReactQuery&logoColor=white)
![.NET](https://img.shields.io/badge/.NET-512BD4.svg?style=for-the-badge&logo=dotnet&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)
![SQL](https://img.shields.io/badge/Microsoft%20SQL%20Server-CC2927.svg?style=for-the-badge&logo=Microsoft-SQL-Server&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3.svg?style=for-the-badge&logo=Bootstrap&logoColor=white)

## Get Started

### Prerequisites

To able to run this project you will need Node.js installed on your computer.

### Installation

Install the requirements for the "frontend" folder below:

```sh
npm install react react-dom
npm install react-router-dom
npm install @tanstack/react-query
npm install bootstrap
```

To able to customize Bootstrap and use it, go to `frontend/src` directory in your terminal and write this:

```sass
sass main.scss main.css
```

## Usage

Enter your connection string for SQL Database connection and your Cloudinary information for image upload in `appsettings.json` file.

```json
  "ConnectionStrings": {
    "FireKitchen": "recipes-database-connection-string",
    "FireKitchenAuth": "auth-database-connection-string"
  },
  "Cloudinary": {
    "CloudName": "your_cloudinary_cloudname",
    "ApiKey": "your_cloudinary_api-key",
    "ApiSecret": "your_cloudinary_api-secret"
  }
```

After these changes, open "Package Manager Console" and add these migrations to create tables and update the database.

```pm
Add-Migration "Initial migration" -Context "AppDbContext"
Update-Database -Context "AppDbContext"
Add-Migration "Create auth db" -Context "AppAuthDbContext"
Update-Database -Context "AppAuthDbContext"
```

Finally, you must have both servers up and running to app work.

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

MIT License

Copyright (c) 2024 Rhayaden

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Contact

Mert Evirgen - rhayaden@gmail.com<br><br>
[![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/mert-evirgen-99ba8a271/)

Project Link: [https://github.com/rhayaden/fire-kitchen](https://github.com/rhayaden/fire-kitchen)
