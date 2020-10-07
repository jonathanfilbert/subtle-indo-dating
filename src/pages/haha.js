import React from "react"

const Haha = () => {
  return (
    <div className="w-screen h-screen bg-yellow-300">
      <div className="flex flex-col md:flex-row w-100 bg-white p-3  justify-between">
        <div className="hover:bg-green-200">Logo</div>
        <div className="flex flex-col md:flex-row ">
          <div className=" px-0 md:px-3">Profile</div>
          <div className=" px-0 md:px-3">About Me</div>
          <div className=" px-0 md:px-3">Contact</div>
        </div>
      </div>
    </div>
  )
}

export default Haha
