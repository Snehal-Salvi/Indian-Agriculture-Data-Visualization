import React, { useState } from "react";
import { Table, Pagination } from "@mantine/core";

import agriculturalData from "../data/data.json"; // Importing the agricultural data from a JSON file

export default function ProductionData() {
  // Reduce function to process the agricultural data and group it by year
  const groupedData = agriculturalData.reduce((acc, curr) => {
    const {
      Year,
      "Crop Name": cropName,
      "Crop Production (UOM:t(Tonnes))": cropProduction,
    } = curr;

    // Extract the year from the "Year" field
    const year = Year.match(/\d{4}/)[0];

    // Initialize the year in the accumulator if not already present
    if (!acc[year]) {
      acc[year] = { maxProduction: -Infinity, minProduction: Infinity };
    }

    // Update the maximum production and corresponding crop name for the year
    if (cropProduction > acc[year].maxProduction) {
      acc[year].maxProduction = cropProduction;
      acc[year].maxProductionCrop = cropName;
    }

    // Update the minimum production and corresponding crop name for the year
    if (cropProduction < acc[year].minProduction) {
      acc[year].minProduction = cropProduction;
      acc[year].minProductionCrop = cropName;
    }

    return acc; // Return the updated accumulator
  }, {});

  // Map the processed data to table rows
  const rows = Object.entries(groupedData);

  // State for pagination
  const [activePage, setPage] = useState(1);
  const itemsPerPage = 12;

  // Calculate the start and end indices for the current page
  const startIndex = (activePage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Filter the rows based on the current page
  const currentPageRows = rows.slice(startIndex, endIndex).map(([year, data], index) => (
    <Table.Tr key={index}>
      <Table.Td>{year}</Table.Td>
      <Table.Td>{data.maxProductionCrop}</Table.Td>
      <Table.Td>{data.minProductionCrop}</Table.Td>
    </Table.Tr>
  ));

  // Return the table with the processed data and pagination
  return (
    <div>
      <Table
        horizontalSpacing="xl"
        striped
        highlightOnHover
        withTableBorder
        withColumnBorders
      >
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Year</Table.Th>
            <Table.Th>Crop with Maximum Production in that Year</Table.Th>
            <Table.Th>Crop with Minimum Production in that Year</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{currentPageRows}</Table.Tbody>
      </Table>
      <div className="center-content">
      <Pagination
        total={Math.ceil(rows.length / itemsPerPage)}
        page={activePage}
        onChange={setPage}
        withEdges
      />
    </div>
    </div>
  );
}