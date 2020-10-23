import React from 'react'

const Footer = ({ siteTitle }) => (
  <footer>
    <div className="container">
      <div className="info-area">
        <div className="column">
          <a href="https://www.facebook.com/businessangelsweb">Facebook</a>
          <a href="https://www.linkedin.com/company/business-angels-web-development-company">LinkedIn</a>
        </div>
        <div className="column">
          <a href="#">Twitter</a>
          <a href="https://www.instagram.com/businessangels.posangel/">Instagram</a>
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
