import React from "react"
import PecelText from "../../components/PecelText"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const mainQuery = graphql`
  {
    jis: allFile(filter: { relativePath: { eq: "jis.png" } }) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 600, grayscale: true) {
              ...GatsbyImageSharpFluid
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
              ...GatsbyImageSharpFluid
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
              ...GatsbyImageSharpFluid
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
              ...GatsbyImageSharpFluid
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
              ...GatsbyImageSharpFluid
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
              ...GatsbyImageSharpFluid
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
              ...GatsbyImageSharpFluid
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
              ...GatsbyImageSharpFluid
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
              ...GatsbyImageSharpFluid
            }
          }
          relativePath
        }
      }
    }
  }
`

const Main = () => {
  const {
    bbs,
    jis,
    penabur,
    bsj,
    sph,
    hw,
    union,
    xxi,
    bottega,
  } = useStaticQuery(mainQuery)
  console.log(hw)
  return (
    <>
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
            <Img
              fluid={hw.edges[0].node.childImageSharp.fluid}
              alt="place_img"
            />
          </div>
          <div className="w-32 absolute hidden md:block" style={{ zIndex: -1 }}>
            <Img
              fluid={union.edges[0].node.childImageSharp.fluid}
              alt="place_img"
            />
          </div>
          <div
            className="w-32 absolute hidden md:block"
            style={{ zIndex: -1, top: "50%", left: "25%" }}
          >
            <Img
              fluid={xxi.edges[0].node.childImageSharp.fluid}
              alt="place_img"
            />
          </div>
          <div
            className="w-32 absolute hidden md:block animate-pulse"
            style={{ zIndex: -1, top: 0, right: "25%" }}
          >
            <Img
              fluid={bottega.edges[0].node.childImageSharp.fluid}
              alt="place_img"
            />
          </div>
        </div>
        <div className="title md:text-right md:w-1/3 mt-10 md:self-end relative">
          <div>
            Tulus once said that, just like shoes, everyone should have their
            own pair, their own Union cheesecake date, their own crimepartner to
            sneak starbucks and KFC into XXI.
          </div>
          <div className="font-bold">
            Using advanced machine learning, we'll match your personality and
            hook you up so finally you can have someone to take your dinner date
            picture at Bottega.
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between">
          <div className="title mt-6">
            <div className="font-bold text-center md:text-left">
              We have launched in:
            </div>
            <div className="flex flex-row items-center justify-center md:justify-end">
              <div className="w-24 h-auto">
                <Img
                  fluid={penabur.edges[0].node.childImageSharp.fluid}
                  style={{ filter: "grayscale(1)" }}
                  alt="School_image"
                />
              </div>
              <div className=" w-20 h-auto">
                <Img
                  fluid={bbs.edges[0].node.childImageSharp.fluid}
                  style={{ filter: "grayscale(1)" }}
                  alt="School_image"
                />
              </div>
              <div className=" w-20 h-auto">
                <Img
                  fluid={bsj.edges[0].node.childImageSharp.fluid}
                  style={{ filter: "grayscale(1)" }}
                  alt="School_image"
                />
              </div>
            </div>
            <div className="flex flex-row items-center justify-center">
              <div className="w-20 h-auto">
                <Img
                  fluid={sph.edges[0].node.childImageSharp.fluid}
                  style={{ filter: "grayscale(1)" }}
                  alt="School_image"
                />
              </div>
              <div className=" w-20 h-auto">
                <Img
                  fluid={jis.edges[0].node.childImageSharp.fluid}
                  style={{ filter: "grayscale(1)" }}
                  alt="School_image"
                />
              </div>
              <div className=" w-20 h-auto">...</div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-screen bg-green-200 flex flex-row justify-center title text-sm py-2 text-center">
        We are not affiliated with the brand/schools mentioned
      </div>
    </>
  )
}

export default Main
