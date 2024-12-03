import React, { useEffect, useState } from "react";
import "./dashboard.css";
import axios from "axios";
import TableRow from "../../components/TablRow/TableRow";


const Dashboard = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(
          `https://api.freeapi.app/api/v1/public/randomusers?page=${page}&limit=100`
        );
        if (res.status === 200) {
          setData(res.data.data.data);
        }
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    }
    fetchData();
  }, [page]);

  const goBackward = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
    }
  };

  const goForward = () => {
    if (page < 5) {
      setPage((prev) => prev + 1);
    }
  };

  return (
    <div className="dashboard_main">
      <table className="tableBody">
        <thead className="table_header">
          <tr >
            <th>Gender</th>
            <th>Location</th>
            <th>Email</th>
            <th>DOB</th>
            <th>Picture</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 &&
            data.map((ele, index) => <TableRow ele={ele} key={index} />)}
        </tbody>
      </table>

      <div className="bottom_pagination_main">
        <div className="pagination_box">
          <button onClick={goBackward}>{"<"}</button>
          <div>{page}</div>
          <button onClick={goForward}>{">"}</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
