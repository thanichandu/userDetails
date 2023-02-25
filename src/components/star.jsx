import React from 'react'

export default function Star({starArray}) {


  return (
    <>
    <h1>Starred Messages</h1>
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
                starArray.map((eachObj,index) => (

                    <tr>
                        <td>{eachObj.id}</td>
                        <td>{eachObj.first_name}</td>
                        <td>{eachObj.last_name}</td>
                        <td>{eachObj.email}</td>
                        <td>{eachObj.gender}</td>
                        <td>{eachObj.ip_address}</td>
                        {/* <td className="btn"><i className="fa fa-trash"
                            data-id={eachObj.id} onClick={() => sendRemoveList(eachObj.id,index)}
                            onMouseOver={handleDeleteMouseOver}
                            onMouseOut={handleMouseDown}
                            style={{ color: (isDeleteMoused) ? "red" : "" }}></i></td>

                        <td className="btn"><i className="fa fa-star"
                         onClick={() => sendStarList(eachObj.id,index)}
                          style={{ color: (isStarMoused) ? "yellow" : "" }}></i></td> */}
                    </tr>

                ))
            }
        </table>
    </>
  )
}
