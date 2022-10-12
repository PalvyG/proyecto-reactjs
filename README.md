# GPDudes - A React.js project.

This project was created to be presented as the final installment of the React.js course taken on the learning platform Coderhouse.
Developed by: Pablo Daniel Álvarez Graña.
LinkedIn: https://www.linkedin.com/in/pablo-daniel-%C3%A1lvarez-gra%C3%B1a-842487244/

## About the project

The assignment was to create an E-Commerce, developing its flow, functionalities and user interface.
Style development was not evaluated, but was strongly encouraged.

My take on this project was to develop a Hardware E-Commerce, named GPDudes.


## Technologies implemented

In this E-Commerce, you will find that the base structure was built around React.js with additional use of Javascript - Nonetheless, there are other technologies involved, such as CSS3, SASS and Bootstrap for additional styles, Git for versioning control, and Firebase for data storage.
Next, here is a list of the specific usage each tool was given.

### React.js

- Main structure of the project, built component-oriented and with a Single Page Application workflow.
- Hooks for data saving and updating (useState and useEffect).
- Use of Context for a better and more specific and optimized DOM handling.
- Navigability via `react-router-dom` dependencies.

### Javascript

- Basic and intermediate functions used for specific purposes such as events (e.g. onClicks) and validations (e.g. conditional rendering).
- Definition of variables for its subsequent use in the aforementioned structure.
- Usage of promises (async) for data storage (cart list and purchase orders) and data loading (item list and item detail).

### CSS3, SASS, Bootstrap

- **Bootstrap**: Pre-defined styles for grid and flex layouts, as well as basic HTML5 components (e.g. buttons).
- **CSS3**: Main tool for personalized styles, and ocasional overriddance of unwanted Bootstrap's pre-defined styles.
- **SASS**: Style modularization and logic-based styles, such as variables.

### Firebase

- Data storage (products and purchase orders).

### Git

- Versioning control and commit pushing (to remote GitHub repository).


## Dependencies and Package Management

For package management purposes, the tool selected for usage was npm.js.
As far as dependencies, this project has only 3:
- `react`, which is automatically installed via the `create-react-app` command executed in the console when creating the template for the project.
- `react-router-dom`, used for navigability purposes and previously mentioned in the **React.js** section of **Technologies implemented**.
- `firebase`, used for storage purposes and required for proper **Firestore** implementation.


## Summary

Having specified what the project is about, what its purpose was, and ennumerating all the tools used to develop it, I'd love for you to check it out!
It may be a little basic - but it has all the main features any E-Commerce has: A catalogue of products, their detailed view, a shopping cart, and a process that automatically generates purchase orders.
