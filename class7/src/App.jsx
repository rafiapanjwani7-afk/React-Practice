import React, { useEffect, useState } from 'react'

// const App = () => {
//   const [num, setnum] = useState(0)
//   const [num2, setnum2] = useState(100)
//   function increment(){
//     console.log("num1 change");
    
//   }
//   function decrement(){
//     console.log("num2  change");
    
//   }

// useEffect(() => {
//   increment()

  
// }, [num])
// useEffect(() => {
//   decrement()

  
// }, [num2])

//   return (
//     <div>
//       <h1> num1 :{num}</h1>
//       <h1> num2 :{num2}</h1>
//       <button onClick={()=>{
//         setnum(num + 1)
//       }}>increment</button>
//       <button onClick={()=>{
//        setnum2(num2 - 1)
//       }}>decrement</button>

//     </div>
//   )
// }
const App = () => {
  const [userData, setuserData] = useState([])

  useEffect(() => {
    getData
  }, [])
  
  function getData() {
    // console.log("get data");
    let response = axios.get("https://picsum.photos/v2/list?page=1&limit=10")
  console.log(response.data);
  setuserData(response.data)
  
  }
let printUserData = "no user available"
if (userData.length >0){
  printUserData =userData.map(()=> {
    return "hello"
  })
}
  return (
    <div className="bg-black p-5">
      {/* <button className='bg-gary-500 px-6 py-3 ' onClick={getData}>Get Data</button> */}
    <div className="text-white flex-wrap ">
  {printUserData}
</div>
<button></button>
    </div>

  );
};

export default App;

