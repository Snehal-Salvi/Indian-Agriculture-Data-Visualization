# Indian Agriculture Data Visualization

This project is a React application that visualizes Indian agriculture data. It uses Mantine's UI components to display tables of crop production, average yield, and cultivation area.

## Deployment

Access the deployed application here:
`https://6651aecf9c181f1ae48e1666--bejewelled-torrone-615072.netlify.app/`

## Screenshots

- **Crop with Maximum and Minimum Production Data Table:**

![Crop with Maximum and Minimum Production Data Screenshot 1](/public/production-data.png)
![Crop with Maximum and Minimum Production Data Screenshot 2](/public/production-data_2.png)
![Crop with Maximum and Minimum Production Data Screenshot 3](/public/production-data_3.png)
![Crop with Maximum and Minimum Production Data Screenshot 4](/public/production-data_4.png)
![Crop with Maximum and Minimum Production Data Screenshot 5](/public/production-data_5.png)
![Crop with Maximum and Minimum Production Data Screenshot 6](/public/production-data_6.png)

- **Average Yield and Cultivation Area of the Crop Table:**

![Average Yield and Cultivation Area](/public/yeild-area-data.png)

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Component Details](#component-details)
- [Approach](#approach)
- [Technologies Used](#technologies-used)
- [Authors](#authors)

## Features

- Displays data on crops with maximum and minimum production for each year.
- Shows average yield and cultivation area for crops between 1950-2020.
- Utilizes Mantine UI components for a modern and responsive design.

## Installation

To run this project locally, follow these steps:

1. Clone the repository.
2. Navigate to the project directory:

```
cd manufac-assg
```

3. Install the necessary dependencies:

```
yarn install
```

4. Run the project.

```
yarn start
```

5. Open your browser and navigate to `http://localhost:3000` to view the app.

## Component Details

### 1. Production Data Table

- **Description:** This component displays information about crop production, including the crop with maximum and minimum production for each year.
- **Source:** The data is sourced from a JSON file located at `src/data/data.json`.
- **Functionality:** It processes the agricultural data to determine the crops with maximum and minimum production for each year and presents this information in a table format.
- **Technologies:** It utilizes React for building the user interface and Mantine's Table component for styling and layout and pagination.
- **File:** `src/components/ProductionData.js`

### 2. Yield and Area Data Table

- **Description:** This component presents average yield and cultivation area data for crops between 1950-2020.
- **Source:** Similar to the Production Data Table, the data is sourced from a JSON file located at `src/data/data.json`.
- **Functionality:** It calculates the average yield and cultivation area for each crop based on the available data and displays this information in a tabular format.
- **Technologies:** It also uses React for the user interface and leverages Mantine's Table component for styling and structure.
- **File:** `src/components/YieldAreaData.js`

## Approach

1. **Problem Understanding:**

   - Identified the need to visualize Indian agriculture data.
   - Defined specific requirements for data visualization.

2. **Technology Selection:**

   - Chose React.js for frontend development due to its flexibility.
   - Selected Mantine UI library for styling and UI components.

3. **Project Setup:**

   - Initialized a new React project.
   - Installed dependencies including Mantine UI.

4. **Data Acquisition:**

   - Sourced agricultural data from reliable sources.
   - Organized data into a structured format (JSON).

5. **Component Development:**

   - Created separate React components for data visualization.
   - Implemented logic to process and display data accurately.
   - Styled components using Mantine UI and custom CSS.

6. **Testing and Debugging:**

   - Conducted unit tests on components.
   - Tested application functionality and UI behavior.
   - Debugged any issues encountered during testing.

7. **Documentation and Deployment:**
   - Wrote a README file with setup and usage instructions.
   - Documented purpose and functionality of each component.

## Technologies Used

- React.js
- HTML
- CSS
- Javascript
- Mantine v7 library

## Authors

- [@Snehal](https://github.com/Snehal-Salvi)
