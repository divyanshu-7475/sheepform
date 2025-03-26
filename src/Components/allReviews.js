"use client";
import { useEffect, useState } from "react";


export default function AllReviews() {
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
  const dp =
    "https://res.cloudinary.com/dxr8h1oud/image/upload/v1741409731/pqbbo5bp72sytchlhiy1.png";
  const [users, setUsers] = useState([]);
  

  return (
    <>
      <div className="w-full bg-gray-100 p-2 pb-5 text-black">
        <div className="w-full flex flex-col items-center justify-center mb-0.5">
          <div className="sm:w-4/5  w-full rounded-2xl bg-gray-200 p-3">
            <h1 className="font-bold m-1 mb-2 ml-2">Reviews of Game</h1>
            <div className="p-8 pb-4 min-h-[50vh] max-h-[65vh] pt-1 overflow-y-auto">
              {users.length > 0 ? (
                users.map((user) => {
                  return (
                    <div>
                      <div className="flex items-center">
                        <img src={dp} alt="" className="w-8 h-8 rounded-full" />
                        <span className="font-bold">
                          @<span>{user.name}</span>
                        </span>
                      </div>
                      <div className="pl-10 break-words">{user.message}</div>
                    </div>
                  );
                })
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  No Review
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
