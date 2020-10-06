import React, { useState } from "react"
import PecelText from "../../components/PecelText"
import { graphql, useStaticQuery, navigate } from "gatsby"
import Img from "gatsby-image"

const query = graphql`
  {
    jis: allFile(filter: { relativePath: { eq: "jis.png" } }) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 600, grayscale: true) {
              base64
              tracedSVG
              aspectRatio
              srcWebp
              srcSetWebp
              originalName
            }
          }
          relativePath
        }
      }
    }
    bbs: allFile(filter: { relativePath: { eq: "bbs.png" } }) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 600, grayscale: true) {
              base64
              tracedSVG
              aspectRatio
              srcWebp
              srcSetWebp
              originalName
            }
          }
          relativePath
        }
      }
    }
    penabur: allFile(filter: { relativePath: { eq: "penabur.png" } }) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 600, grayscale: true) {
              base64
              tracedSVG
              aspectRatio
              srcWebp
              srcSetWebp
              originalName
            }
          }
          relativePath
        }
      }
    }
    bsj: allFile(filter: { relativePath: { eq: "bsj.png" } }) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 600, grayscale: true) {
              base64
              tracedSVG
              aspectRatio
              srcWebp
              srcSetWebp
              originalName
            }
          }
          relativePath
        }
      }
    }
    sph: allFile(filter: { relativePath: { eq: "sph_final.png" } }) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 600, grayscale: true) {
              base64
              tracedSVG
              aspectRatio
              srcWebp
              srcSetWebp
              originalName
            }
          }
          relativePath
        }
      }
    }
    hw: allFile(filter: { relativePath: { eq: "holywings.png" } }) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 600) {
              base64
              tracedSVG
              aspectRatio
              srcWebp
              srcSetWebp
              originalName
            }
          }
          relativePath
        }
      }
    }

    union: allFile(filter: { relativePath: { eq: "union.jpeg" } }) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 600) {
              base64
              tracedSVG
              aspectRatio
              srcWebp
              srcSetWebp
              originalName
            }
          }
          relativePath
        }
      }
    }

    bottega: allFile(filter: { relativePath: { eq: "bottega.jpg" } }) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 600) {
              base64
              tracedSVG
              aspectRatio
              srcWebp
              srcSetWebp
              originalName
            }
          }
          relativePath
        }
      }
    }

    xxi: allFile(filter: { relativePath: { eq: "xxi.jpg" } }) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 600) {
              base64
              tracedSVG
              aspectRatio
              srcWebp
              srcSetWebp
              originalName
            }
          }
          relativePath
        }
      }
    }
  }
`

const Main = () => {
  const data = useStaticQuery(query)
  const { bbs, jis, penabur, bsj, sph, hw, union, xxi, bottega } = data
  const [user, setUser] = useState({})
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
      await fetch(process.env.GATSBY_ZAPIER_LINK, {
        method: "POST",
        body: JSON.stringify(user),
      })
      navigate("/thanks")
    }
  }
  return (
    <div
      className="min-w-screen min-h-screen bg-white flex px-6 text-center flex-col relative pt-3 overflow-hidden"
      id="main-section"
    >
      <div className="flex flex-col pt-10 items-start relative z-50">
        <PecelText text="Kita adalah sepasang sepatu" className="text-4xl" />
        <PecelText
          text="Selalu bersama tak bisa bersatu"
          className="text-4xl"
        />
        <div className="w-20 absolute h-auto animate-spin right-0">
          <Img fluid={hw.edges[0].node.childImageSharp.fluid} />
        </div>
        <div className="w-32 absolute hidden md:block" style={{ zIndex: -1 }}>
          <Img fluid={union.edges[0].node.childImageSharp.fluid} />
        </div>
        <div
          className="w-32 absolute hidden md:block"
          style={{ zIndex: -1, top: "50%", left: "25%" }}
        >
          <Img fluid={xxi.edges[0].node.childImageSharp.fluid} />
        </div>
        <div
          className="w-32 absolute hidden md:block animate-pulse"
          style={{ zIndex: -1, top: 0, right: "25%" }}
        >
          <Img fluid={bottega.edges[0].node.childImageSharp.fluid} />
        </div>
      </div>
      <div className="title md:text-right md:w-1/3 mt-10 md:self-end relative">
        <div>
          Tulus once said that, just like shoes, everyone should have their own
          pair, their own Union cheesecake date, their own crimepartner to sneak
          starbucks and KFC into XXI.
        </div>
        <div className="font-bold">
          Using advanced machine learning, we'll match your personality and hook
          you up so finally you can have someone to take your dinner date
          picture at Bottega.
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between">
        <div className="flex flex-col pt-10 items-center md:items-start w-full md:w-1/3 title">
          <div className="font-bold text-xl"> We are on Private Beta</div>
          <div>
            1. Follow us on{" "}
            <a
              className="font-bold"
              target="__blank"
              href="https://www.instagram.com/subtleindomatches/"
            >
              Instagram
            </a>
          </div>
          <div>2. Fill in the form below</div>
          <div>3. We'll reach out to you via Instagram DM</div>
          <input
            className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-md mt-8"
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
          <button onClick={() => handlePost()}>
            <PecelText text="Get My Invite" className="text-2xl" />
          </button>
        </div>
        <div className="title mt-6">
          <div className="font-bold text-center md:text-right">
            We have launched in:
          </div>
          <div className="flex flex-row items-center justify-center md:justify-end">
            <div className="w-24 h-auto">
              <Img fluid={jis.edges[0].node.childImageSharp.fluid} />
            </div>
            <div className=" w-20 h-auto">
              <Img fluid={bbs.edges[0].node.childImageSharp.fluid} />
            </div>
            <div className=" w-20 h-auto">
              <Img fluid={penabur.edges[0].node.childImageSharp.fluid} />
            </div>
          </div>
          <div className="flex flex-row items-center justify-center">
            <div className="w-20 h-auto">
              <Img fluid={bsj.edges[0].node.childImageSharp.fluid} />
            </div>
            <div className=" w-20 h-auto">
              <Img fluid={sph.edges[0].node.childImageSharp.fluid} />
            </div>
            <div className=" w-20 h-auto">...</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
