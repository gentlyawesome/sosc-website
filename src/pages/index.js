import React from 'react'
import Link from 'gatsby-link'
import Layout from '../components/indexLayout'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'

const IndexPage = props => (
  <Layout>
    <div className="page white-bg">
      <div className="container">
        <section className="hero-section">
          <div className="hero-texts">
            <Img
              fluid={props.data.imageFirst.childImageSharp.fluid}
              className="sosc-logo"
              alt="sosc logo"
            />
            <p className="sosc-header">
              Business Angels Web Development Company
            </p>
            <p>
              We are a one-stop automated solution for your trade and industry. Depending on the size and field of your business, we have different products and services to meet your requirements.
            </p>

            <p>
              We provide optimum and customized solutions made for your business. We are focusing exclusively on high quality and cost-effective software development and implementation of services.
            </p>
            {/*
            <a
              href="http://bit.ly/soscmbr"
              className="btn-hero-green"
            >
              Become a member
            </a>
            */}
          </div>
          <div>
            <Img
              fluid={props.data.imageOne.childImageSharp.fluid}
              className="hero-image"
              alt="hero image"
            />
          </div>
        </section>
      </div>
      <div className="container">
        <section className="hero-section2 ">
          <Img
            fluid={props.data.imageTwo.childImageSharp.fluid}
            className="hero-image"
            alt="hero image"
          />
          <div className="hero-texts">
            <p className="hero-header">Our Mission</p>
            <div className="dash" />
            <p>
              To achieve the reputation of a quality, high standard & reliable solution & service Provider Company in the IT industry.
            </p>
            {/*<Link className="btn-hero-green" to="/clubs">Learn More →  </Link> */}
          </div>
        </section>
      </div>

      <div className="container">
        <section className="hero-section3">
          <div className="hero-texts">
            <p className="hero-header">Our Vision</p>
            <div className="dash" />
            <p>
              Achieve 100% customer satisfaction by delivering quality products and services at an affordable cost. Our forward vision is to strive to become an entity in technology-based corporate solutions. We also believe that for our scope of improvisation – the sky is the limit, we are always ready to take our achievements to the next level. We are growing and would like to remain on the growing streak.
            </p>
          </div>
          <Img
            fluid={props.data.imageThree.childImageSharp.fluid}
            className="hero-image"
            alt="hero image"
          />
        </section>
      </div>
      <div className="container">
        <section className="hero-section4">
          <div>
            <Img
              fluid={props.data.imageFour.childImageSharp.fluid}
              className="hero-image"
              alt="hero image"
            />
          </div>
          <div className="hero-texts">
            <p className="hero-header">Join Us!</p>
            <div className="dash" />
            <p>
              Be part of our team and help us mold the future. 
              Be part of our development team and hone your skills and provide value to companies around the world
            </p>
            {
              /*
                <Link to="/team" className="btn-hero-green">
                  Learn More
                </Link>
              */
            }
          </div>
        </section>
      </div>
    </div>
  </Layout>
)

export const firstSiteImages = graphql`
  fragment firstSiteImages on File {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
`

export const pageQuery = graphql`
  query {
    imageFirst: file(relativePath: { eq: "images/logo_grad.png" }) {
      ...firstSiteImages
    }
    imageOne: file(relativePath: { eq: "images/hero_main.png" }) {
      ...firstSiteImages
    }
    imageTwo: file(relativePath: { eq: "images/hero_clubs.png" }) {
      ...firstSiteImages
    }
    imageThree: file(relativePath: { eq: "images/hero_github.png" }) {
      ...firstSiteImages
    }
    imageFour: file(relativePath: { eq: "images/hero_connect_.png" }) {
      ...firstSiteImages
    }
  }
`

export default IndexPage
