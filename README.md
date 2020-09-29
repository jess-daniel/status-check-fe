# Status Check Frontend

## Information

Status Check is a full stack web application that allows users to monitor the status of an API and recieve notifications if it goes down. Users can either interact with the application through the web interface or a CLI tool.

See [Backend Documentation](https://github.com/jess-daniel/node_status_check_be/) for details on the API.

See [CLI Documentation](https://github.com/jess-daniel/status-check-cli) for details on the CLI tool of the project.

### Key Features

- Ability to register and login via Auth0
- Ability to Create, View, Update, and Delete resources

## Tech Stack

#### React, Redux, Auth0

Why did I choose this framework?

- React is a diverse and varied front-end framework with multiple intuitive dependencies/hooks that make for a clean and effective frontend codebase.
- Redux is a flexible and efficient stage management framework that allows a front-end developer to distribute state freely across their application and also gives them the freedom to customize how it may be rendered.
- Auth0 is a flexible and efficient service that handles the authentication and authorization process allowing developers to launch services quickly and securely.

### Styling Library

#### Material-UI

Why did I choose this library?

- Material-UI is a naturally intuitive styling library. It contains built-in responsive elements, flexible styling methods, and overall clear and concise documentation for its numerous features.

#### Front end deployed through Netlify

## Getting started

To get the server running locally:

- Clone this repo
- **yarn install** to install all required dependencies
- Create and add all ENV variables
- **yarn start** to start the local server

#### ENV File Config

- REACT_APP_SERVER_HOST - API Base URL

# Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

## Issue/Bug Request

**If you are having an issue with the existing project code, please submit a bug report under the following guidelines:**

- Check first to see if your issue has already been reported.
- Check to see if the issue has recently been fixed by attempting to reproduce the issue using the latest master branch in the repository.
- Create a live example of the problem.
- Submit a detailed bug report including your environment & browser, steps to reproduce the issue, actual and expected outcomes, where you believe the issue is originating from, and any potential solutions you have considered.

### Feature Requests

We would love to hear from you about new features which would improve this app and further the aims of our project. Please provide as much detail and information as possible to show us why you think your new feature should be implemented.

### Pull Requests

If you have developed a patch, bug fix, or new feature that would improve this app, please submit a pull request. It is best to communicate your ideas with the developers first before investing a great deal of time into a pull request to ensure that it will mesh smoothly with the project.

Remember that this project is licensed under the MIT license, and by submitting a pull request, you agree that your work will be, too.

#### Pull Request Guidelines

- Ensure any install or build dependencies are removed before the end of the layer when doing a build.
- Update the README.md with details of changes to the interface, including new plist variables, exposed ports, useful file locations and container parameters.
- Ensure that your code conforms to our existing code conventions and test coverage.
- Include the relevant issue number, if applicable.

### Attribution

These contribution guidelines have been adapted from [this good-Contributing.md-template](https://gist.github.com/PurpleBooth/b24679402957c63ec426).
