"use client";
import { useState,useEffect } from "react";
import ModalSmallScreen from "./Modal.js";

export default function Reviews() {
    const [error,setError]=useState("")
    useEffect( () => {
        async function fetchReview(){
            try {
                const response = await fetch(`https://sheepformbackend.onrender.com/reviews`); 
                if (!response.ok){
                    return
                }
            
                const data = await response.json();
                setUsers(data)
              } catch (error) {
                console.error("Error fetching users:", error);
              }
         
        }
        fetchReview()
        
    
      });
    const [openModal,setOpenModal]=useState(false)
    const dp="https://res.cloudinary.com/dxr8h1oud/image/upload/v1741409731/pqbbo5bp72sytchlhiy1.png"
    const [users,setUsers]=useState([
        
    ])
    const closeModal=()=>{
        setOpenModal(false)
    }

    return (
        <>
        <div className="w-full bg-gray-100 p-2 pb-5 text-black">
            <div className="w-full flex flex-col items-center justify-center mb-0.5">
            <div className="sm:w-4/5  w-full rounded-2xl bg-gray-200 p-3">
            <h1 className="font-bold m-1 mb-2 ml-2">Reviews of Game</h1>
            <div className="p-8 pb-4 pt-1 h-64">
                {users.length>0?<div className="w-full h-full"><div className="h-1/3 ">
                <div className="flex items-center">
                <img src={dp} alt="" className="w-8 h-8 rounded-full" />
                <span className="font-bold">@<span>{users[0].name}</span></span></div>
                <div className="pl-10">{users[0].message}</div>
                </div>
                <div className="h-1/3 ">
                <div className="flex items-center">
                <img src={dp} alt="" className="w-8 h-8 rounded-full" />
                <span className="font-bold">@<span>{users[1].name}</span></span></div>
                <div className="pl-10">{users[1].message}</div>
                </div>
                <div className="w-full h-1/3 flex justify-center items-center">
                <div onClick={()=>{setOpenModal(true)}}
                className="w-1/5 h-[60%] border rounded-lg flex justify-center items-center cursor-pointer hover:bg-gray-100">View More</div></div>
                </div>:  <div className="w-full h-full flex justify-center items-center">No Review</div>}
            </div>
            </div>
            </div>
            <div className="w-full flex flex-col items-center justify-center mb-0.5">
            <div className="sm:w-4/5  w-full rounded-2xl bg-gray-200 p-3">
            <h1 className="font-bold m-1 mb-4 ml-2">Recommended Games</h1>
            <div className="p-8 pb-4 pt-4 h-96">
                <div className="w-full h-[95%] flex justify-center items-center">
                    <div className="w-full h-full flex justify-center items-center ">
                        <div className="w-1/5 h-full border border-black rounded-xl m-1">
                        <a href="">
                            <img 
                            className="w-full h-full"
                            src="https://plus.unsplash.com/premium_photo-1681400704361-f675cdcde0f4?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2FtaW5nJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                        </a>
                        </div>
                        <div className="w-1/5 h-full border border-black rounded-xl m-1">
                        <a href="">
                            <img 
                            className="w-full h-full"
                            src="https://plus.unsplash.com/premium_photo-1681400704361-f675cdcde0f4?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2FtaW5nJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                        </a></div>
                        <div className="w-1/5 h-full border border-black rounded-xl m-1">
                        <a href="">
                            <img 
                            className="w-full h-full"
                            src="https://plus.unsplash.com/premium_photo-1681400704361-f675cdcde0f4?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2FtaW5nJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                        </a></div>
                        <div className="w-1/5 h-full border border-black rounded-xl m-1">
                        <a href="">
                            <img 
                            className="w-full h-full"
                            src="https://plus.unsplash.com/premium_photo-1681400704361-f675cdcde0f4?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2FtaW5nJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                        </a></div>
                        
                    </div>
                </div>
            </div>
            </div>
            </div>
            {openModal && <ModalSmallScreen closeModal={closeModal} useFor={"view"}/>}
        </div>
        </>
    )
}