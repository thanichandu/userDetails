import React, { useState,useEffect } from 'react';
import Search from './Search';
import Home from './Home';
import Delete from './Delete';
import Star from './star';
import Trashphoto from './Trashphoto';


function App() {

  const [isHome , setIsHomeChecked] = useState(false);
  const [isTrash , setIsTrashChecked] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [select,setSelectTerm] = useState('');
  const [Data, setData] = useState([]);
  const [trash,setTrash] = useState([]);
  const [star,isStarred] = useState(false);
  const [starArray,setStarArray] = useState([]);
  const [trashColor,setTrashColor] = useState('');
  // const [recycleBin,setRecycleBin] = useState()

  useEffect(() => {
    fetch('https://mocki.io/v1/d1f16339-9aec-4696-b302-7fd0cb0db28b')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error))
  }, []);

  function sendRemoveList(id,i){
    setTrash([...trash,Data[i]]);
    setData([...Data.filter((data) => data.id!==id)])

  }
  function sendStarList(id,i){


    if (!starArray.includes(Data[i])) {
      setStarArray([...starArray, Data[i]]);
    }
    else{
      setStarArray([...starArray.filter((data) => data.id!==id)])
    }
    
  }
  function sendRecycleList(id,i){

    console.log("refresh data is: " + trash[i].id);
    console.log("index data is: " + i);


    setData([...Data,trash[i]])
    console.log(trash.filter((data) => data.id!==id ))
    setTrash([...trash.filter((data) => data.id!==id )])
  }


  return (
    <div>
      <center>
        <Home isHome={isHome}
          setIsHomeChecked={setIsHomeChecked} isTrash={isTrash} setIsTrashChecked={setIsTrashChecked}
          isStarred={isStarred} star={star} />
          {
            ((isHome===true))&&<Search searchTerm={searchTerm} sendRemoveList={sendRemoveList} 
            setSearchTerm={setSearchTerm}
             usersData={Data} setData={setData} 
              select={select} setSelectTerm={setSelectTerm} 
              sendStarList={sendStarList}
               trashColor={trashColor} setTrashColor={setTrashColor} />
          }
          {
            (isTrash === true)?(trash.length === 0)?(<Trashphoto/>):(<Delete trash={trash} sendRecycleList={sendRecycleList}/>):""
          }
          {
            (star === true)&&<Star starArray={starArray} />
          }

        
      </center>
    </div>
  )
}

export default App;
