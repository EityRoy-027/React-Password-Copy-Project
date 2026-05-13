import { useCallback, useEffect, useState } from "react"

function App() {
 
  const[password,setPassword]= useState('');
  const[length,setLength]= useState(8);
  const[number,setNumber]= useState(false);
  const[character,setCharacter]= useState(false);
  

  const passwordGenerator = useCallback(()=>{

      let pass ='';
      let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

      if(number){
        str+='0123456789';
  }

    if(character){
      str+='!@#$%&*^<>?/{}()[].,`~'
    }


    for(let i=1;i<=length;i++){
     let char=Math.floor( Math.random()*str.length);

     pass+=str.charAt(char);
    }

    setPassword(pass);

  } , [length,number,character,setPassword])

  useEffect(()=>{
    passwordGenerator()

    
  }[length,number,character,passwordGenerator])

  return (
    <>
     

  
   <div className="h-screen flex justify-center items-center">


   <div className="w-[500px] h-[200px] bg-gray-700 rounded-xl flex flex-col justify-center items-center gap-4 p-6">


   <div className="w-[400px] flex">

    <input className="w-[350px] h-[35px] bg-white rounded-l-md" placeholder="Password" value={password} readOnly type="text" />

   <button className="w-[50px] h-[35px] bg-blue-600 rounded-r-md text-xs text-white">Copy</button></div>

  

   <div className="w-[300px] flex gap-2  justify-center items-center">

   <input onChange={(e)=>setLength(e.target.value)} className="w-[100px]"  type="range" min={6} max={100} value={length} />

   <p className="text text-orange-500">Length({length})</p>

  <div className="flex">
   
     <input onChange={()=>setNumber((prev)=>!prev)}  type="checkbox" />
    <p className="text text-orange-500">Number</p>
  </div>

   <div className="flex">
   
     <input onChange={()=>setCharacter((prev)=>!prev)}   type="checkbox" />
    <p className="text text-orange-500">Characters</p>
  </div>
 

   </div>
    </div>

   </div>


    </>
  )
}

export default App
