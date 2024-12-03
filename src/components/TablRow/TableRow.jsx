import React from 'react'

const TableRow = ({ele}) => {


    console.log(ele)
  return (
    <tr>

        <td>{ele.gender}</td>
        <td>{ele.location.state}</td>
        <td>{ele.email}</td>
        <td>{ele.dob.date}</td>
        <td>

        <img src={ele.picture.large } alt="picture" />
          
        </td>
     
      
    </tr>
  )
}

export default TableRow
