import React from 'react'

export default function Delete({trash,sendRecycleList}) {
  return (
    <>
    <h1>Deleted Records</h1>
      <table style={{ width: "100%" }}>
            <tr>
                <th>id</th>
                <th>first_name</th>
                <th>last_name</th>
                <th>email</th>
                <th>gender</th>
                <th>ip_address</th>
            </tr>

            {
                trash.map((eachObj,index) => (

                    <tr>
                        <td>{eachObj.id}</td>
                        <td>{eachObj.first_name}</td>
                        <td>{eachObj.last_name}</td>
                        <td>{eachObj.email}</td>
                        <td>{eachObj.gender}</td>
                        <td>{eachObj.ip_address}</td>
                        <td onClick={() => sendRecycleList(eachObj.id,index)}><i class="fa fa-refresh"></i></td>
                    </tr>

                ))
            }
        </table>
    </>
  )
}
