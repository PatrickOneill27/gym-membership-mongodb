# Gym Membership Database

## Overview

A MongoDB-based Gym Membership Management System developed to demonstrate database design, schema validation, CRUD operations, indexing, and aggregation pipelines.

The project stores and manages gym members, memberships, and subscription tiers while enforcing data integrity through MongoDB validation rules and providing analytical reporting through aggregation queries.

## Features

* MongoDB database design
* JSON Schema validation
* CRUD operations
* Index creation and optimization
* Aggregation pipelines
* Business reporting and analytics
* Data integrity enforcement

## Technologies Used

* MongoDB
* MongoDB Compass
* MongoDB Shell (mongosh)

## Database Collections

### Members

Stores member information including:

* Member ID
* First Name
* Last Name
* Email
* Join Date
* Emergency Contact

### Memberships

Stores membership details including:

* Membership ID
* Member ID
* Subscription Tier
* Status
* Start Date
* End Date

### Subscription Tiers

Stores available membership plans including:

* Tier ID
* Tier Name
* Monthly Cost
* Benefits

## Functionality

### CRUD Operations

* Create new member records
* Read and filter membership data
* Update membership details and status
* Delete membership records

### Indexing

Indexes were implemented to improve query performance and demonstrate database optimization techniques.

### Aggregation Pipelines

The project includes aggregation queries to:

* Count memberships by status
* Analyse active memberships
* Join membership and subscription tier data
* Generate business reports

## Skills Demonstrated

* NoSQL Database Design
* MongoDB
* Schema Validation
* CRUD Operations
* Aggregation Pipelines
* Database Indexing
* Query Optimisation
* Data Modelling

## Future Improvements

Potential future enhancements include:

* Trainer management
* Class booking functionality
* Personal training sessions
* Gym room management
* Flask web application frontend
* Dashboard analytics and reporting

## Author

Patrick O'Neill

Computer Science Graduate with interests in software development, databases, backend systems, and IT infrastructure.

