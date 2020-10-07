import React, { useState } from "react"
import SEO from "../seo"
import Martabak from "../images/Martabak"
import Bensu from "../../images/bensu.png"
import Title from "../Title"
import { navigate } from "gatsby"
import Amer from "../images/Amer"
import Wingheng from "../images/WingHeng"

const IndexPage = () => {
  const [user, setUser] = useState({})
  const [isInviteSent, setIsInviteSent] = useState(false)
  const handleSetName = name => {
    setUser(prev => ({
      ...prev,
      name: name,
    }))
  }
  const handleSetSchool = school => {
    setUser(prev => ({
      ...prev,
      school: school,
    }))
  }

  const handleSetIG = username => {
    setUser(prev => ({
      ...prev,
      username: username,
    }))
  }

  const handlePost = async () => {
    if (
      user.name === undefined ||
      user.school === undefined ||
      user.username === undefined
    ) {
      alert("Please fill in every field.")
    } else {
      setIsInviteSent(true)
      await fetch(process.env.GATSBY_ZAPIER_LINK, {
        method: "POST",
        body: JSON.stringify(user),
      })
      navigate("/thanks")
    }
  }
  return (
    <>
      <SEO title="Home" />
      <div
        className="w-screen bg-white flex justify-center items-center px-6 text-center flex-col relative pt-3 overflow-hidden"
        style={{ minHeight: "90vh" }}
      >
        <div className="flex flex-col justify-center items-center title text-sm">
          <div>
            Shamelessly inspired by{" "}
            <a href="https://subtleasianmatches.com/" className="font-bold">
              Subtle Asian Matches
            </a>
          </div>
          <div>
            <a
              href="https://www.facebook.com/groups/454081115284952"
              className="font-bold"
            >
              Subtle Indonesian Dating
            </a>
          </div>
        </div>
        <div>
          <img
            src={Bensu}
            className="h-auto w-2/12 absolute bottom-0 left-0"
            alt="bensu"
          />
          <Wingheng className="absolute bottom-0 right-0 hidden md:block" />
        </div>
        <div className="w-full flex flex-col md:flex-row justify-center items-center md:justify-between mt-4 md:mt-8">
          <Title />
        </div>
        <div className="block md:hidden">
          <Martabak />
        </div>
        <div className="pt-2 md:pt-8 title font-bold flex flex-row items-center">
          <div className="flex-1">
            <Martabak className="hidden md:block" />
          </div>
          <div className="flex flex-col items-center w-full title">
            <div className="font-bold text-lg"> We are on Private Beta</div>
            <div className="text-sm">
              1. Follow us on{" "}
              <a
                className="font-bold"
                target="__blank"
                href="https://www.instagram.com/subtleindomatches/"
              >
                Instagram
              </a>
            </div>
            <div className="text-sm">2. Fill in the form below</div>
            <div className="text-sm">
              3. We'll reach out to you via Instagram DM
            </div>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-md mt-2"
              placeholder="Name"
              value={user.name}
              onChange={e => handleSetName(e.target.value)}
            />
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-md"
              placeholder="Instagram Username"
              value={user.username}
              onChange={e => handleSetIG(e.target.value)}
            />
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-md"
              placeholder="School"
              value={user.school}
              onChange={e => handleSetSchool(e.target.value)}
            />
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none mt-3"
              onClick={() => handlePost()}
            >
              {isInviteSent ? "Sending..." : "Send me an invite"}
            </button>
            <a className="mt-2" href="#main-section">
              Learn more
            </a>
          </div>
          <div className="flex-1 relative">
            <Amer className="hidden md:block" />
          </div>
        </div>
      </div>
    </>
  )
}

export default IndexPage
