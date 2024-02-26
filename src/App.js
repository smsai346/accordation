import { useState } from "react";
import data from "./components/data"

const  App=()=>{
  const [enablemulti,setEnablemulti]=useState(false)
  const [multi,setMulti]=useState([]);
  const [select,setSelect]=useState(null);
  const handleSingleSelection=(getcurrentid)=>{
      console.log(getcurrentid)
      setSelect(getcurrentid===select?null:getcurrentid)
  }
  const handleMultiSelection=(id)=>{
    let cpy=[...multi];
    const findindex=cpy.indexOf(id);
    console.log(findindex)
    console.log(cpy)
    if (findindex===-1){
      cpy.push(id)
    }
    else{
      cpy.splice(findindex,1)
    }
    setMulti(cpy)
  }
  return (
    <div className="flex flex-col items-center m-5">
      <button className="w-[200px] rounded-xl bg-blue-400 p-3 m-3 hover:bg-orange-400 cursor-pointer" onClick={()=>setEnablemulti(!enablemulti)}>Enable Multi selection</button>
      <div className="">
            {
                data && data.length>0? data.map(dataItems=><div className="w-[200px] m-3 font-bold bg-red-300 p-2 rounded-xl">
                    <div onClick={enablemulti?()=>handleMultiSelection(dataItems.id):()=>handleSingleSelection(dataItems.id)} className="flex justify-between ">
                        <h3>{dataItems.question}</h3>
                        <span>+</span>           
                    </div>
                    { enablemulti?multi.indexOf(dataItems.id)!==-1 &&<div className="w">{dataItems.answer}</div>:select===dataItems.id&&<div className="w">{dataItems.answer}</div>
                        
                    }
                </div>):<div>No Data Found !</div>
            }
        </div>
    </div>
  );
}

export default App;
