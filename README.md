# Node API Service Skeleton
I assume you use VS Code as your primary editor.

# Scripts
The supported npm scripts are:
* `build` compiles TypeScript
* `clean` removes the directories `./dist` and `./logs`.
* `test` runs Jest
* `lint` runs ESLint

# Project organization
This project follows the guidelines outlines in [Domain Driven Design][1]. The
source code is split into three main directories: application, domain and
infrastructure. Each directory represents a layer of abstraction.

## Application layer
The Application layer is the entry-point into the app. It is the least reuseable
layer of the three and therefore it ought to be thin and simple. Make sure your
code is the minimum required to get your configured and running.

## Domain layer
The bulk of the software lives here. This is where your business logic will
live. The domain is typically made up of the following constructs:

* Models
* Repositories
* Services
* Validators

Most of your time will be spent here.

## Infrastructure layer
This is the place for fundamental system code. This includes networking,
database connection, email service configuration and so on. You'll probably
write code here just once.

This layer must be devoid of all business-logic otherwise it just becomes
another Domain layer. As such, this layer will also be thin, but not as thin as
the Application layer.

And, because it's the bottom layer, it's also the most reuseable and therefore
you'll probably factor out this entire directory into its own Node package.

[1]: https://martinfowler.com/tags/domain%20driven%20design.html
