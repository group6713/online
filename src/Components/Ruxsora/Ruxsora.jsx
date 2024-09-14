import React from "react";





const Ruxsora = ()=>{
    return(
        <div className="container" style={{background:'black'}}>
            <div style={{display:'flex',justifyContent:'center', gap:'100px'}} className="container2">
       <button style={{width:'70px', height:'70px', color:'white', background:'black'}}>Acme Corp</button>
       <button style={{color:'white', background:'black'}}>Echo Valley</button>
       <button style={{color:'white', background:'black'}}>Quantum</button>
       <button style={{color:'white', background:'black'}}>PULSE</button>
       </div>
       <div style={{display:'flex', marginTop:'40px', justifyContent:'center', gap:'100px'}} className="container1">
       <button style={{width:'70px', height:'70px', color:'white', background:'black' }}>Acme Corp</button>
       <button style={{color:'white', background:'black'}}>Echo Valley</button>
       <button style={{color:'white', background:'black'}}>Quantum</button>
       <button style={{color:'white', background:'black'}}>PULSE</button>
       </div>
       </div>
    )
}
export default Ruxsora;