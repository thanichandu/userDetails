import React, { useState,useEffect } from 'react';
import Search from './Search';
import Home from './Home';
import Delete from './Delete';
import Star from './star';
// import Getinfo from './Getinfo';


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
    setStarArray([...starArray,Data[i]]);
    console.log("star array is" + starArray);
  }


  return (
    <div>
      <center>
        <Home isHome={isHome}
          setIsHomeChecked={setIsHomeChecked} isTrash={isTrash} setIsTrashChecked={setIsTrashChecked}
          isStarred={isStarred} star={star} />
          {/* <Search searchTerm={searchTerm} sendRemoveList={sendRemoveList} 
            setSearchTerm={setSearchTerm}
             usersData={Data} setData={setData} 
              select={select} setSelectTerm={setSelectTerm} /> */}
              {/* {
                   (isTrash===false)?'':<Delete trash={trash} />             
              } */}
              {
                (isTrash===false)?<Search searchTerm={searchTerm} sendRemoveList={sendRemoveList} 
                setSearchTerm={setSearchTerm}
                 usersData={Data} setData={setData} 
                  select={select} setSelectTerm={setSelectTerm} 
                  sendStarList={sendStarList} trashColor={trashColor} setTrashColor={setTrashColor} />:<Delete trash={trash} />
              }
              {
                (star === false)?"":<Star starArray={starArray} />
              }

        
      </center>
    </div>
  )
}

export default App;

// {/* {
//   (isHome===true && isTrash===false)&&(<><Search searchTerm={searchTerm} 
//     setSearchTerm={setSearchTerm} usersData={data} setData={setData} select={select} setSelectTerm={setSelectTerm}/>
//     <Getinfo usersData={data} /></>)
// }
// {
//   (isTrash===true)&&(<Search searchTerm={searchTerm}
//     setSearchTerm={setSearchTerm} usersData={data} setData={setData} select={select} setSelectTerm={setSelectTerm}/>)
// } */}
// {/* <Getinfo usersData={data} /> */}