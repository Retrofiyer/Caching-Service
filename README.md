<div>
    <h1>Caching Microservice</h1>
</div>

## About The Project

The Caching Service microservice is designed to enhance the performance of your applications by caching results of frequent queries to databases or external APIs. By using this service, you can significantly reduce the load on your primary data sources and improve response times for end users. The service is built with a focus on efficiency and ease of integration, using Redis as the caching layer.

## Table of Contents

<ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#overview">Overview</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#configuration">Configuration</a></li>
        <li><a href="#running-the-service">Running the service</a></li>
      </ul>
    </li>
    <li>
      <a href="#contributing">Contributing</a>
    </li>
 </ol>

## Overview

The Caching Service is a lightweight microservice built with Node.js that provides an easy-to-use RESTful API for caching and retrieving data. It supports various use cases, including caching database query results or API responses, and helps improve the overall performance and scalability of your application.

## Features

<div>
  <ul>
      <li> <b>Store Cache:</b> Save key-value pairs in the cache with an optional expiration time.</li>
      <li> <b>Retrieve Cache:</b> Retrieve data from the cache using the stored key.</li>
      <li> <b>Configurable Expiry:</b> Set custom expiration times for cached data to ensure fresh results.</li>
  </ul>
</div>


## Built With

[![Node.js][nodejs.com]][nodejs-url]
[![Docker][docker.com]][docker-url]

<!-- GETTING STARTED -->
## Getting Started

## Prerequisites

Before you begin, make sure you have the following tools installed on your machine:

- **Node.js 20 or higher** - [Download Node](https://nodejs.org/en/download/package-manager)
- **Redis** - [Download Redis](https://redis.io/downloads/)

If you don't have any of these tools installed, follow the provided links to install them.


## Installation

1.- Clone the repository
   ```sh
   git clone https://github.com/Retrofiyer/Caching-Service.git
   cd Caching-Service
   ```
2.- Build project using node.js
 ```sh
   npm install
   ```

## Configuration

First create a file with the name `.env` in the root project.

Using Windows:

```sh
    echo > .env
   ```

Using Linux:

```sh
    touch .env
   ```

The configuration for the Exchange Service is located in `.env`. Below is an example configuration:

 ```sh
    REDIS_URL=Your-Redis-URL
   ```

## Running the service

  ```sh
    npm start
   ```

## Contributing

I would like you to contribute to this project. Whether it's fixing a bug, adding a new feature or improving the documentation, your help is always welcome. Please email me at `sebitas5225@gmail.com` with all the details for improvement.

<!-- LINKS & IMAGES -->

[docker.com]: https://img.shields.io/badge/Docker-black?style=for-the-badge&logo=docker&logoColor=white
[docker-url]: https://www.docker.com/
[nodejs.com]: https://img.shields.io/badge/Node.js-black?style=for-the-badge&logo=node.js&logoColor=white
[nodejs-url]: https://nodejs.org/
[swagger.com]: https://img.shields.io/badge/Swagger-black?style=for-the-badge&logo=swagger&logoColor=white
[swagger-url]: https://swagger.io/
