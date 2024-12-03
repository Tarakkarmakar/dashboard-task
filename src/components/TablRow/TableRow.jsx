import React from 'react'

const TableRow = ({ele}) => {


    console.log(ele)
  return (
    <tr>
    <td>{ele.gender || "N/A"}</td>
    <td>{ele.location?.state || "N/A"}</td>
    <td>{ele.email || "N/A"}</td>
    <td>{ele.dob?.date || "N/A"}</td>
    <td>
      {ele.picture?.large ? (
        <img src={ele.picture.large} alt="User" />
      ) : (
        "No Picture"
      )}
    </td>
  </tr>
  )
}

export default TableRow
