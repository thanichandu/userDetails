import React,{useState} from 'react'
import "../App.css";
// import Child from './Child';

export default function Search({ searchTerm, setSearchTerm, usersData,sendRemoveList,sendStarList}) {


  const [isDeleteMoused, setDeleteMouseOver] = useState(false);
  const [isStarMoused, setStarMouseOver] = useState(false);

  const handleDeleteMouseOver = () => {
    setDeleteMouseOver(true)
  }
  // const handleStarMouseOver = () => {

  //   (isStarMoused === false) ? (setStarMouseOver(true)) : (setStarMouseOver(false))

  // }
  const handleMouseDown = () => {
    setDeleteMouseOver(false);
  }
  // const handleOnclickTrash = (event) => {
  //   // event.target.value = props.id;
  //   console.log("trash id:" + event.target.value);
    
  // }



  const [select,setSelectTerm] = useState('');
  // const [filterData,setFilterData] = useState([]);



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
  const filterData = select ? updatedArray.filter((eachObj) => (eachObj.gender.toLowerCase() === select)): updatedArray;


  


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
                filterData.map((eachObj,index) => (

                    <tr>
                        <td>{eachObj.id}</td>
                        <td>{eachObj.first_name}</td>
                        <td>{eachObj.last_name}</td>
                        <td>{eachObj.email}</td>
                        <td>{eachObj.gender}</td>
                        <td>{eachObj.ip_address}</td>
                        <td className="btn"><i className="fa fa-trash"
                            data-id={eachObj.id} onClick={() => sendRemoveList(eachObj.id,index)}
                            onMouseOver={handleDeleteMouseOver}
                            onMouseOut={handleMouseDown}
                            style={{ color: (isDeleteMoused) ? "red" : "" }}></i></td>

                        <td className="btn"><i className="fa fa-star"
                         onClick={() => sendStarList(eachObj.id,index)}
                          style={{ color: (isStarMoused) ? "yellow" : "" }}></i></td>
                    </tr>

                ))
            }
        </table>


    </>
  )
}
