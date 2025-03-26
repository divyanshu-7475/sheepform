"use client";
import { useState } from "react";


export default function Form({closeModal}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error,setError]=useState(null)
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!(name && email && message)){
        setError("all fields are requires*!")
        return
    }
    try {
      const response = await fetch(`http://localhost:8000/new/review`, {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email ,message}),
      });

      console.log(response,"res")
      if (!response.ok){
        setError("failed to create review")
        return
      }

      
      const data = await response.json();
      console.log("User added:", data);
      setTimeout(()=>{
        setEmail("")
        setName("")
        setMessage("")
        closeModal()
    },1000)
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };

  return (
    <>
      <div className="w-full h-[65vh] text-black flex flex-col justify-center items-center">
        <form onSubmit={handleSubmit} className="space-y-4 w-3/5">
          <div className="w-full">
            <span>Name</span>
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
            <span>Message</span>
            <textarea
              name="message"
              placeholder="Your Message"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              className="w-full h-28 overflow-y-auto break-words p-2 border text-white bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>

          <div className="w-full flex justify-center h-14">
            <button
              type="submit"
              className="w-3/5 bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition duration-200"
            >
              Submit
            </button>
          </div>
        </form>
        {error && <div className="w-full h-14"><span className="text-red-600">{error}</span></div>}
      </div>
    </>
  );
}
