import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import { ClientSideRowModelModule } from "ag-grid-community";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { ModuleRegistry } from "ag-grid-community";

// Register required AG Grid modules
ModuleRegistry.registerModules([ClientSideRowModelModule]);

const PlanningGrid = () => {
  const [rowData, setRowData] = useState([
    { store: "Store A", sku: "SKU 123", salesUnits: 10, price: 5 },
    { store: "Store B", sku: "SKU 456", salesUnits: 20, price: 8 },
    { store: "Store C", sku: "SKU 789", salesUnits: 15, price: 12 },
    { store: "Store D", sku: "SKU 101", salesUnits: 25, price: 6 },
    { store: "Store E", sku: "SKU 102", salesUnits: 18, price: 10 },
    { store: "Store F", sku: "SKU 103", salesUnits: 30, price: 7 },
    { store: "Store G", sku: "SKU 104", salesUnits: 22, price: 9 },
    { store: "Store H", sku: "SKU 105", salesUnits: 12, price: 11 },
    { store: "Store I", sku: "SKU 106", salesUnits: 28, price: 5 },
    { store: "Store J", sku: "SKU 107", salesUnits: 35, price: 4 },
  ]);

  const columnDefs = [
    { field: "store", headerName: "Store" },
    { field: "sku", headerName: "SKU" },
    { field: "salesUnits", headerName: "Sales Units", editable: true },
    {
      field: "salesDollars",
      headerName: "Sales Dollars",
      valueGetter: (params) => params.data.salesUnits * params.data.price,
    },
  ];

  return (
    <div className="ag-theme-alpine" style={{ height: 500, width: "100%" }}>
      <AgGridReact rowData={rowData} columnDefs={columnDefs} />
    </div>
  );
};

export default PlanningGrid;
