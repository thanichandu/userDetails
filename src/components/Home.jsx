import React from 'react'
// import Search from './Search';
import "../App.css";

export default function Home({isHome,setIsHomeChecked,isTrash,setIsTrashChecked,isStarred,star}) {

    // const [isHome , setIsHomeChecked] = useState(false);
    // const [isTrash , setIsTrashChecked] = useState(false);
    function handleHome(){

        (isHome === false)?setIsHomeChecked(true):setIsHomeChecked(false)
        console.log("isChecked" + isHome)
        
    } 
    function handleTrash(){

        (isTrash === false)?setIsTrashChecked(true):setIsTrashChecked(false)
        
    } 
    function handleStar(){
        (star === false)?isStarred(true):isStarred(false)

    } 
  return (
    <>
    <div className='header'>
        <button style={{backgroundColor:"white"}} onClick={handleHome}>Home</button>
        <button style={{backgroundColor:"white"}} onClick={handleStar}>Starred messages</button>
        <button style={{backgroundColor:"white"}} onClick={handleTrash}>Trash</button>
      
    </div>
    </>
  )
}
