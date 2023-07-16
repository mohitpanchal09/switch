import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import { useLocation } from "react-router-dom";
import { userRequest } from "../requestMethods";
import "./Orders.css";
export default function Orders() {
  const location = useLocation();
  const id = location.pathname.split("/")[3];
  // console.log(id);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await userRequest.get("/orders/find/" + id);
        setOrders(res.data);
      } catch {}
    };
    getOrders();
  }, []);
  console.log(orders);
  return (
    <div>
      <Announcement />
      <Navbar />
      <div className="container">
        <table>
          <tr>
            <th>Order Id</th>
            {/* <th>User Id</th> */}
            <th>Amount</th>
          </tr>
          {orders.map((order) => (
            <tr key={order._id}>
              <td>{order._id}</td>
              {/* <td>{order.userId}</td> */}
              <td>₹{order.amount}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}
