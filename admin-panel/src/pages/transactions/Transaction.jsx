import React from "react";
import { useEffect, useState } from "react";
import { userRequest } from "../../requestMethods";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";

export default function Transaction() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await userRequest.get("orders");
        setOrders(res.data);
      } catch {}
    };
    getOrders();
  }, []);
  const columns = [
    { field: "_id", headerName: "Order Id", width: 420 },
    {
      field: "amount",
      headerName: "Amount",
      width: 400,
      valueGetter: (params) => `₹${params.value}`,
    },

    {
      field: "createdAt",
      headerName: "Date",
      width: 160,
      valueGetter: (params) => {
        const date = new Date(params.value);
        return date.toLocaleDateString();
      },
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={orders}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        getRowId={(row) => row._id}
        checkboxSelection
      />
    </div>
  );
}
