"use client";
import { useEffect, useState } from "react";
export default function UserForm({ closeModal }) {
  const [formFor, setFormFor] = useState("login");
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [userName,setUserName]=useState("")
  const [errorMessage,setErrorMessage]=useState("")
  

  const handleSubmit = async(e) => {

    e.preventDefault();
    if(formFor==="login"){
        try {
            const response = await fetch(`https://sheepformbackend.onrender.com/login`, {
                method: "POST", 
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ email ,password}),
              });
            if (!response.ok){
                setErrorMessage("something went wrong")
                return
            }
        
            const data = await response.json();
              
            closeModal()
            console.log(data.user)          
          } catch (error) {
            console.error("Error fetching users:", error);
          }
     
    }else{
        try{
        const response = await fetch(`https://sheepformbackend.onrender.com/register`, {
            method: "POST", 
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ fullName:name, userName, email ,password}),
          });
            if (!response.ok){
                setErrorMessage("something went wrong")
                return
            }
        
            const data = await response.json();
            setErrorMessage("Registered successfully")
          } catch (error) {
            console.error("Error fetching users:", error);
          }
    }
  };

  return (
    <>
      <div className="w-full h-[65vh] flex items-center flex-col  text-black">
        <div className="w-full h-10 flex justify-center">
          {formFor === "login" ? (
            <span>
              Don't have an account?{" "}
              <span
                onClick={() => {
                  setFormFor("register");
                }}
                className="font-bold hover:text-blue-400 cursor-pointer"
              >
                Sign up
              </span>
            </span>
          ) : (
            <span>
              Already have an account?{" "}
              <span
                onClick={() => {
                  setFormFor("login");
                }}
                className="font-bold hover:text-blue-400 cursor-pointer"
              >
                Log in
              </span>
            </span>
          )}
        </div>
        {formFor === "login" ? (
          <div className="w-full h-[60vh] flex items-center justify-center">
            <form onSubmit={handleSubmit} className="space-y-4 w-3/5">
              <div className="w-full">
                <span>Email</span>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  className="w-full p-2 border text-white bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="w-full">
                <span>Password</span>
                <input
                  type="text"
                  name="password"
                  placeholder="Your password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  className="w-full p-2 border text-white bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              

              <div className="w-full flex justify-center h-14 mt-10">
                <button
                  type="submit"
                  className="w-3/5 bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition duration-200"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="w-full h-[60vh] flex items-center justify-center">
            <form onSubmit={handleSubmit} className="space-y-4 w-3/5">
            <div className="w-full">
                <span>Fullname</span>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  className="w-full p-2 border text-white bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="w-full">
                <span>Username</span>
                <input
                  type="text"
                  name="username"
                  placeholder="Your username"
                  value={userName}
                  onChange={(e) => {
                    setUserName(e.target.value);
                  }}
                  className="w-full p-2 border text-white bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="w-full">
                <span>Email</span>
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  className="w-full p-2 border text-white bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="w-full">
                <span>Password</span>
                <input
                  type="text"
                  name="password"
                  placeholder="Your password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  className="w-full p-2 border text-white bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              

              <div className="w-full flex justify-center h-14 ">
                <button
                  type="submit"
                  className="w-3/5 bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition duration-200"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        )}
        <div className="w-full flex justify-center text-red-500">{errorMessage}</div>
      </div>
    </>
  );
}
