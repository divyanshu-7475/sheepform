"use client";
import { useState } from "react";
import ModalSmallScreen from "../Modal.js";
import About from "../About.js";
import Reviews from "../Reviews.js";

export default function Home() {
  const [liked, setLiked] = useState(false);
  const [view, setView] = useState("about");
  const [openModal,setOpenModal]=useState(false);

  const closeModal=()=>{
    setOpenModal(false)
  }
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const url = window.location.href; 

    if (navigator.share) {
      try {
        await navigator.share({
          title: document.title,
          text: "Check this out!",
          url: url,
        });
        console.log("Shared successfully");
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      try {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (error) {
        console.error("Failed to copy:", error);
      }
    }
  };

  return (
    <>
      <div className="w-screen h-screen border text-black bg-[url('https://guide.sheepfarm.io/~gitbook/image?url=https%3A%2F%2F1067059042-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FyQKSV2lZmE3mGWQ30WzA%252Fuploads%252FrdAkXqEyRyofEOVmeY6H%252Fimg_sheep-racing_main_title%2520%281%29.jpg%3Falt%3Dmedia%26token%3D97050918-2602-475d-900d-d641ef7d0581&width=400&dpr=3&quality=100&sign=c537bfe1&sv=2')]  bg-cover bg-center">
        <div className="w-full h-[90%]">
          <div className="w-full h-1/5 border bg-gray-200"></div>

          <div className="w-full  h-[70%] flex items-center justify-center flex-col  ">
            <div className="text-center mt-3 p-8 pb-1 bg-white shadow-xl rounded-2xl max-w-2xl">
              <h1 className="text-4xl font-extrabold text-gray-800 uppercase tracking-wide">
                SHEEP FARM IN-META LAND
              </h1>
              <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                Welcome to{" "}
                <span className="font-semibold text-gray-900">SheepFarm!</span>{" "}
                In this sweet virtual world, you can acquire pastures, nurture
                ambitious sheep, and reap the rewards....
              </p>
              <div className="w-full h-16  flex justify-end">
                <div className=" h-full mr-5">
                  <div
                    className={`w-full h-full flex justify-center items-center hover:cursor-pointer   ${
                      liked ? " text-red-500" : "text-black"
                    }`}
                    onClick={() => {
                      setLiked(!liked);
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 24 24"
                      fill={liked ? "red" : "none"}
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="icon icon-tabler icons-tabler-outline icon-tabler-heart"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path
                        d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5
                 5 0 1 1 7.5 6.572"
                      />
                    </svg>
                  </div>
                </div>
                <div className=" h-full mr-5">
                  <div onClick={handleShare} className="w-full h-full flex justify-center items-center text-black hover:cursor-pointer hover:text-blue-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="icon icon-tabler icons-tabler-outline icon-tabler-share"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M6 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                      <path
                        d="M18 6m-3 0a3 3 0 1 0 6 
                  0a3 3 0 1 0 -6 0"
                      />
                      <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                      <path
                        d="M8.7 10.7l6.6 
                  -3.4"
                      />
                      <path d="M8.7 13.3l6.6 3.4" />
                    </svg>
                  </div>
                </div>
                <div></div>
              </div>
            </div>

            <div className=" w-full flex justify-center mt-10">
              <div className="sm:w-[15%] w-1/2 h-18 mb-5 border rounded-2xl hover:bg-blue-400 flex justify-center items-center">
                <a
                  href="https://sheepfarm.io/"
                  className="w-full flex justify-center items-center"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-device-gamepad-2"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path
                      d="M12 5h3.5a5 5 0 0 1 0 10h-5.5l-4.015 4.227a2.3 2.3 0 0 1 
             -3.923 -2.035l1.634 -8.173a5 5 0 0 1 4.904 -4.019h3.4z"
                    />
                    <path
                      d="M14 15l4.07 4.284a2.3 2.3 0 0 0 
             3.925 -2.023l-1.6 -8.232"
                    />
                    <path d="M8 9v2" />
                    <path d="M7 10h2" />
                    <path d="M14 10h2" />
                  </svg>
                  <span className="text-2xl font-bold ml-1">PLAY</span>
                </a>
              </div>
            </div>
          </div>
          <div className="w-full fixed h-[8%] flex justify-end pr-8 sm:pr-10  ">
            <div className="w-16 cursor-pointer hover:text-blue-400  " onClick={()=>{setOpenModal(true)}}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-file-minus"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                <path d="M9 14l6 0" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-pencil relative -top-15 left-5"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
                <path d="M13.5 6.5l4 4" />
              </svg>
            </div>
          </div>
        </div>

        <div className="w-full h-[10%] bg-gray-200">
          <div className="w-full h-1/2 flex  bg-gray-100 ">
            <div className={`w-[30%] flex justify-around `}>
              <div
                className={` cursor-pointer text-lg ml-1 mr-1 ${view==="about"?"bg-gray-400":""}`}
                onClick={() => {
                  setView("about");
                }}
              >
                About
              </div>
              <div className={`cursor-pointer text-lg ml-1 mr-1`}>UDC</div>
              <div className="cursor-pointer text-lg ml-1 mr-1">Announcements</div>
              <div
                className={`cursor-pointer text-lg ml-1 ${view==="reviews"?"bg-gray-400":""}`}
                onClick={() => {
                  setView("reviews");
                }}
              >
                Reviews
              </div>
            </div>
          </div>
        </div>
      </div>
      {view === "about" && <About />}
      {view === "reviews" && <Reviews />}
      {openModal && <ModalSmallScreen closeModal={closeModal} useFor={"write"}/>}
    </>
  );
}
