# Project organization
This project has three layers: application, domain and infrastructure. Each
layer has a role in the software.

## Application layer
The application layer is the top-most layer. It contains configurations and the
entry-point into th. This layer
is the thinnest of the three.

## Domain layer
This is the bulk of the software and thus the largest of the three layers. The
domain is made up of the following constructs

* Models
* Repositories
* Services
* Validators

## Infrastructure layer
Networking, database connections and software configurations go here. Typically,
infrastructure code is only written once and maintained infrequently.
