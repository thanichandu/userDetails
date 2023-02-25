import React from 'react'
import Child from './Child';
import "../App.css"

export default function Getinfo({ usersData }) {


    // const [isDeleteMoused, setDeleteMouseOver] = useState(false);
    // const [isStarMoused, setStarMouseOver] = useState(false);

    // const handleDeleteMouseOver = () => {
    //     setDeleteMouseOver(true)
    // }
    // const handleStarMouseOver = () => {

    //     (isStarMoused === false) ? (setStarMouseOver(true)) : (setStarMouseOver(false))

    // }
    // const handleMouseDown = () => {
    //     setDeleteMouseOver(false);
    // }
    // // let deleteAfterArray = [];
    // const handleOnclickTrash = (event) => {
    //     const value = event.target.dataset.id
    //     // console.log("trash id: " + event.target.dataset.id);
    //     usersData = usersData.filter((eachObj) => (eachObj.id !== (value)))

    // }
    // // console.log("deleted after arrayyyy:" + usersData)
    // console.log("mod after arrayyyy:" + usersData[0].first_name);




    return (
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
                usersData.map((eachObj) => (

                    <tr>
                        <td>{eachObj.id}</td>
                        <td>{eachObj.first_name}</td>
                        <td>{eachObj.last_name}</td>
                        <td>{eachObj.email}</td>
                        <td>{eachObj.gender}</td>
                        <td>{eachObj.ip_address}</td>
                        <Child id={eachObj.id} usersData={usersData}/>
                        {/* <td className="btn"><i className="fa fa-trash"
                            data-id={eachObj.id} onClick={handleOnclickTrash}
                            onMouseOver={handleDeleteMouseOver}
                            onMouseOut={handleMouseDown}
                            style={{ color: (isDeleteMoused) ? "red" : "" }}></i></td>
                        <td className="btn"><i className="fa fa-star" onClick={handleStarMouseOver} style={{ color: (isStarMoused) ? "yellow" : "" }}></i></td> */}
                    </tr>

                ))
            }
        </table>
    );



}
