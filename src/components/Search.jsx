import React, { useState } from 'react'
import "../App.css";
import Child from './Child';

export default function Search({ searchTerm, setSearchTerm, usersData, sendRemoveList, sendStarList }) {







  const [select, setSelectTerm] = useState('');



  const handleOnChange = (event) => {

    event.preventDefault()

    const val = event.target.value;

    setSearchTerm(val)
  }
  const handleSelect = (event) => {

    event.preventDefault()

    const val = event.target.value;

    setSelectTerm(val)
  }
  const updatedArray = usersData.filter((eachObj) => (eachObj.first_name.toLowerCase().startsWith(searchTerm.toLowerCase()) ||
    eachObj.last_name.toLowerCase().startsWith((searchTerm.toLowerCase())) ||
    eachObj.ip_address.toLowerCase().startsWith((searchTerm.toLowerCase()))))

  const filterData = select ? updatedArray.filter((eachObj) => (eachObj.gender.toLowerCase() === select)) : updatedArray;





  return (
    <>
      <div className='search-component'>
        <input type="text" placeholder='enter any text' onChange={handleOnChange} />
        <select onChange={handleSelect}>
          <option value="">All</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
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
          filterData.map((eachObj, index) => (

            <tr>
              <td>{eachObj.id}</td>
              <td>{eachObj.first_name}</td>
              <td>{eachObj.last_name}</td>
              <td>{eachObj.email}</td>
              <td>{eachObj.gender}</td>
              <td>{eachObj.ip_address}</td>
              {/* <td className="btn"><i className="fa fa-trash"
                            data-id={eachObj.id}  onClick={() => sendRemoveList(eachObj.id,index)}
                            ></i></td> */}
              <Child rowId={eachObj.id} index={index} sendRemoveList={sendRemoveList} sendStarList={sendStarList} />

              {/* <td className="btn"><i className="fa fa-star"
                onClick={() => {
                  sendStarList(eachObj.id, index, singleStarredRecord,
                    (singleStarredRecord === false) ? (setSingleStarredRecord(true)) : (setSingleStarredRecord(false)))
                }} ></i></td> */}
            </tr>
          ))
        }
      </table>

    </>
  )
}






