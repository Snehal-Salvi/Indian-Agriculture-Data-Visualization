import React from "react";
import { Table } from "@mantine/core";
import agriculturalData from "../data/data.json"; // Importing the agricultural data from a JSON file

export default function YieldAreaData() {
  const cropData = {};

  // Iterate over the agricultural data to group yields and areas by crop name
  agriculturalData.forEach((data) => {
    const {
      "Crop Name": cropName,
      "Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))": cropYield,
      "Area Under Cultivation (UOM:Ha(Hectares))": cropArea,
    } = data;

    // Initialize the crop entry if it doesn't exist
    if (!cropData[cropName]) {
      cropData[cropName] = {
        yields: [],
        areas: [],
      };
    }

    // Add the yield and area to the respective arrays if they are not empty
    if (cropYield !== "" && cropArea !== "") {
      cropData[cropName].yields.push(cropYield);
      cropData[cropName].areas.push(cropArea);
    }
  });

  // Calculate average yield and area for each crop
  const averageData = Object.keys(cropData).map((cropName) => {
    const yields = cropData[cropName].yields;
    const areas = cropData[cropName].areas;

    // Calculate the average yield
    const averageYield =
      yields.reduce((sum, val) => sum + parseFloat(val), 0) / yields.length;

    // Calculate the average area
    const averageArea =
      areas.reduce((sum, val) => sum + parseFloat(val), 0) / areas.length;

    // Return an object with the crop name, average yield, and average area
    return {
      cropName,
      averageYield,
      averageArea,
    };
  });

  // Return the table with the average yield and area data
  return (
    <Table
      horizontalSpacing="xl"
      striped
      highlightOnHover
      withTableBorder
      withColumnBorders
    >
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Crop Name</Table.Th>
          <Table.Th>Average Yield of the Crop between 1950-2020</Table.Th>
          <Table.Th>
            Average Cultivation Area of the Crop between 1950-2020
          </Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {averageData.map((data, index) => (
          <Table.Tr key={index}>
            <Table.Td>{data.cropName}</Table.Td>
            <Table.Td>{data.averageYield.toFixed(2)}</Table.Td>
            <Table.Td>{data.averageArea.toFixed(2)}</Table.Td>
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table>
  );
}
