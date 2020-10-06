import React from "react"
import PecelText from "../PecelText"
import SEO from "../seo"
import Martabak from "../images/Martabak"
import Bensu from "../../images/bensu.png"
import Title from "../Title"
import Amer from "../images/Amer"
import WingHeng from "../images/WingHeng"

const IndexPage = () => {
  return (
    <>
      <SEO title="Home" />
      <div className="w-screen h-screen bg-white flex justify-center items-center px-6 text-center flex-col relative pt-3 overflow-hidden">
        <div className="absolute top-0 title flex flex-col justify-center items-center">
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
        </div>
        <div className="w-full flex flex-col justify-center items-center md:w-3/4">
          <Title />
        </div>
        <div className="w-full flex flex-row justify-center md:justify-between mt-12">
          <Martabak />
          <Amer />
          <WingHeng />
        </div>
        <div className="pt-16 md:pt-0 title font-bold">
          Find your new martabak and chill partner, using machine learning.
        </div>
        <div className="mt-8">
          <a href="#main-section">
            <PecelText text="FIND MINE" />
          </a>
        </div>
      </div>
    </>
  )
}

export default IndexPage
