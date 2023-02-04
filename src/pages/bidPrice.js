import { useEffect, useState } from "react";


const BidPrice = ()=>{
    

    useEffect(()=>{
        fetch("https://dev.pixelsoftwares.com/api.php",{
            method: "POST",
            headers:{
                'token' : "ab4086ecd47c568d5ba5739d4078988f",
                'Content-type' : "application/json" 
            },
            body : {symbol:"BTCUSDT"}
        })
        .then(response=>response.json())
        .then(result=>{
            console.log(result)
        }).catch(err=>{console.log(err)})
    },[]);



    
    
    return (
        <>
           
        </>
    ) 
}
export default BidPrice;