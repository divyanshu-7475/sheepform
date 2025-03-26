"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import ModalSmallScreen from "./Modal";
export default function MainPage() {
    const router=useRouter();
    const [openModal,setOpenModal]=useState(false)
    const closeModal=()=>{
      setOpenModal(false)
    }
  return (
    <>
      <div className="w-screen h-screen">
        <div className="w-full h-20 flex items-center">
          <div className="w-1/5 h-full flex items-center justify-end">
            <img
              
              alt="logo"
              className="w-10 h-10 rounded-full border ml-5"
            />
            <div className="h-full flex items-center  m-1 font-bold text-lg">
              CaptainSide
            </div>
          </div>
          <div className="w-[60%] h-full  flex justify-center items-center">
            <span className="m-2 sm:m-3">Home</span>
            <span className="m-2 sm:m-3 text-gray-400">Games</span>
            <span className="m-2 sm:m-3 text-gray-400">UGC</span>
            <span className="m-2 sm:m-3 text-gray-400">Events</span>
            <span className="m-2 sm:m-3 text-gray-400">About</span>
          </div>
          <div className="w-[10%] h-full  flex justify-center items-center">
            <div onClick={()=>{setOpenModal(true)}} className="w-[70%] h-3/5 flex justify-center items-center border rounded-xl cursor-pointer hover:bg-gray-300 bg-gray-200 text-black font-bold">
              Login
            </div>
            </div>
            
        </div>
        <hr />
        <div className="w-full h-1/2 mt-28">
          <div className="relative flex items-center justify-center h-[300px] w-full">
            <div className="cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="44"
                height="84"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-compact-left"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M13 20l-3 -8l3 -8" />
              </svg>
            </div>

            <div className="relative flex w-4/5 h-[250px] justify-center">
              <div className="absolute left-[17%] -ml-20 w-[30%] h-[300px] border rounded-xl shadow-lg flex items-center opacity-40 text-white text-2xl font-bold  -z-10">
                <div className="w-[70%]  h-full">
                  <img
                    
                    className="w-full h-full rounded-l-xl cursor-pointer"
                    src="https://images.template.net/105799/free-abstract-gaming-background-a3ddm.jpg"
                    alt=""
                  />
                </div>
              </div>

              <div className={`absolute w-[50%] h-[300px] border rounded-xl shadow-lg flex flex-row-reverse   text-white text-2xl font-bold ${openModal?"z-0":"z-30"}`}>
                <div className="w-[30%] h-full bg-black rounded-r-xl flex flex-col justify-center ">
                  <div className="text-sm w-full flex justify-center">
                    SHEEPFORM
                  </div>
                  <div className="w-full h-10 flex justify-center m-2 mt-4">
                    <a href="https://sheepfarm.io/" target="_blank" className="w-4/5 h-full">
                    <div className="w-full h-full text-base flex justify-center bg-amber-500 items-center rounded-2xl">
                      Play
                    </div>
                    </a>
                  </div>
                  <div className="w-full h-10 flex justify-center m-2 mt-4">
                    
                    <div onClick={()=>{router.push("/sheepform")}} className="w-4/5 cursor-pointer h-full text-base flex justify-center border items-center rounded-2xl">
                      Earn
                    </div>
                  </div>
                  <div className="w-full flex flex-col items-center justify-center">
                    <div className="w-4/5 text-base">Platforms</div>
                    <div className="flex mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="blue"
                        className=" m-1 icon icon-tabler icons-tabler-filled icon-tabler-brand-s"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M21 13v5c0 1.57 -1.248 2.832 -2.715 2.923l-.113 .003l-.042 .018a1 1 0 0 1 -.336 .056l-.118 -.008l-4.676 -.585v-7.407zm-10 0v7.157l-5.3 -.662c-1.514 -.151 -2.7 -1.383 -2.7 -2.895v-3.6zm0 -9.158v7.158h-8v-3.6c0 -1.454 1.096 -2.648 2.505 -2.87zm10 2.058v5.1h-8v-7.409l4.717 -.589c1.759 -.145 3.283 1.189 3.283 2.898" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className=" m-1 icon icon-tabler icons-tabler-outline icon-tabler-world"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                        <path d="M3.6 9h16.8" />
                        <path d="M3.6 15h16.8" />
                        <path d="M11.5 3a17 17 0 0 0 0 18" />
                        <path d="M12.5 3a17 17 0 0 1 0 18" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="w-[70%] h-full rounded-l-xl">
                  <img
                  onClick={()=>{router.push("/sheepform")}}
                    className="w-full h-full rounded-l-xl cursor-pointer"
                    src="https://guide.sheepfarm.io/~gitbook/image?url=https%3A%2F%2F1067059042-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FyQKSV2lZmE3mGWQ30WzA%252Fuploads%252FrdAkXqEyRyofEOVmeY6H%252Fimg_sheep-racing_main_title%2520%281%29.jpg%3Falt%3Dmedia%26token%3D97050918-2602-475d-900d-d641ef7d0581&width=400&dpr=3&quality=100&sign=c537bfe1&sv=2"
                    alt=""
                  />
                </div>
              </div>

              <div className="absolute right-[17%] -mr-20 w-[30%] h-[300px] border rounded-xl shadow-lg flex items-center justify-end text-white text-2xl font-bold opacity-40 -z-10">
                <div className="w-[50%] h-full bg-black rounded-r-xl flex flex-col justify-center ">
                  <div className="text-sm w-full flex justify-center">ABC</div>
                  <div className="w-full h-10 flex justify-center m-2 mt-4">
                   
                    <div className="w-4/5 h-full text-base flex justify-center bg-amber-500 items-center rounded-2xl">
                      Play
                    </div>
                  </div>
                  <div className="w-full h-10 flex justify-center m-2 mt-4">
                   
                    <div className="w-4/5 h-full text-base flex justify-center border items-center rounded-2xl">
                      Earn
                    </div>
                  </div>
                  <div className="w-full flex flex-col items-center justify-center">
                    <div className="w-4/5 text-base">Platforms</div>
                    <div className="flex mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="blue"
                        className=" m-1 icon icon-tabler icons-tabler-filled icon-tabler-brand-windows"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M21 13v5c0 1.57 -1.248 2.832 -2.715 2.923l-.113 .003l-.042 .018a1 1 0 0 1 -.336 .056l-.118 -.008l-4.676 -.585v-7.407zm-10 0v7.157l-5.3 -.662c-1.514 -.151 -2.7 -1.383 -2.7 -2.895v-3.6zm0 -9.158v7.158h-8v-3.6c0 -1.454 1.096 -2.648 2.505 -2.87zm10 2.058v5.1h-8v-7.409l4.717 -.589c1.759 -.145 3.283 1.189 3.283 2.898" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className=" m-1 icon icon-tabler icons-tabler-outline icon-tabler-world"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                        <path d="M3.6 9h16.8" />
                        <path d="M3.6 15h16.8" />
                        <path d="M11.5 3a17 17 0 0 0 0 18" />
                        <path d="M12.5 3a17 17 0 0 1 0 18" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className=" cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-compact-right"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M11 4l3 8l-3 8" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
