import React from 'react'

const Footer = ({ siteTitle }) => (
  <footer>
    <div className="container">
      <div className="info-area">
        <div className="column">
          <a href="https://github.com/so-sc">GitHub</a>
          <a href="https://instagram.com/sosc.sahyadri">Instagram</a>
          <a href="https://linkedin.com/company/sosc-sahyadri">LinkedIn</a>
          <a href="https://twitter.com/sahyadri_osc">Twitter</a>
        </div>
        <div className="column">
          <a href="https://github.com/so-sc/code-of-conduct">Community Guidelines</a>
          <a href="https://github.com/so-sc/code-of-conduct">Code of Conduct</a>
        </div>
        <div className="column">
          <p>
            <strong>Business Angels Web Development Company</strong><br/>
            168 Country Club Village 
            Baguio City, Philippines, 2600<br/><br/>
            businessangelsco@gmail.com<br/>
          </p>
        </div>
      </div>
    </div>
    <div className="copyright-area">
      <p>Business Angels Web Development Company © 2017</p>
    </div>
  </footer>
)

export default Footer
