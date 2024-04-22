# stan-tv-coding-challenge
Front End coding challenge for Stan

## Setup Instructions

1. Clone the repository: `git clone https://github.com/marcoalfonso/stan-tv-coding-challenge.git`
2. Install dependencies: `npm install`
3. Start the development server: `npm start`
4. Open the application in your browser at `http://localhost:9000/`

## Running Tests

To run the unit tests, execute the following command:

```
npm test
```

This will run the Jest test suite and provide the test results.

## Technical and architectural choices

1. **TypeScript**: Typescript is used to ensure type safety, improve code maintainability, and catch potential errors during development rather than at runtime.

2. **Babel**: Babel is used to transpile the TypeScript code to JavaScript that can be executed in modern browsers, ensuring wide compatibility.

3. **Webpack**: Webpack is used to bundle the application code, assets, and dependencies into a distributable package. This will allow for efficient asset loading, code splitting, and other optimization techniques.

4. **Jest**: Jest is used as the testing framework as it provides a comprehensive set of features for unit testing, including snapshot testing, code coverage, and mocking capabilities.

5. **React**: React is used as the UI library due to its component-based approach, performance optimizations, and rich ecosystem of tooling and libraries.

## Improvements with additional time

Some potential improvements and areas for further development with more time:

1. **State Management**: If the application grows in complexity I would incorporate Redux for state management.

2. **Accessibility**: I would put more focus on accessibility features, such as screen reader support, and proper ARIA attributes, to ensure the application is inclusive and usable by a wide range of users.

3. **Testing Coverage**: I would expand the test suite to include more comprehensive integration and end-to-end tests, ensuring the overall functionality and user flows are thoroughly covered.

4. **Deployment and CI/CD**: I would set up a continuous integration and continuous deployment (CI/CD) pipeline to automate the build, testing, and deployment processes, ensuring the application is always up-to-date and reliably deployed.

5. **Documentation and Developer Experience**: I would invest more time in creating detailed documentation, including code conventions, and developer guidelines, to improve the overall developer experience and make the codebase more maintainable in the long run.

