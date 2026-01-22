import React from 'react'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

const Footer = (props) => {
  return (
    <>
      <div className="footer-container1">
        <footer className="footer-wrapper">
          <div className="footer-container">
            <div className="footer-top">
              <div className="footer-column footer-brand">
                <h2 className="section-title footer-logo">NeighborsNest</h2>
                <p className="footer-description section-content">
                  Empowering our community through connection. Your central hub
                  for local resources, non-profits, and neighborhood programs.
                </p>
                <div className="footer-social-links">
                  <a href="#">
                    <div aria-label="Facebook" className="footer-social-icon">
                      <svg
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </a>
                  <a href="#">
                    <div aria-label="Twitter" className="footer-social-icon">
                      <svg
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </a>
                  <a href="#">
                    <div aria-label="Instagram" className="footer-social-icon">
                      <svg
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect
                            x="2"
                            y="2"
                            rx="5"
                            ry="5"
                            width="20"
                            height="20"
                          ></rect>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path>
                        </g>
                      </svg>
                    </div>
                  </a>
                  <a href="#">
                    <div aria-label="LinkedIn" className="footer-social-icon">
                      <svg
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path>
                          <circle r="2" cx="4" cy="4"></circle>
                        </g>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
              <div className="footer-column footer-links">
                <h3 className="footer-heading section-subtitle">Explore Hub</h3>
                <nav className="footer-nav">
                  <ul className="footer-list">
                    <li className="footer-item">
                      <a href="Homepage">
                        <div className="footer-link">
                          <span>Home Directory</span>
                        </div>
                      </a>
                    </li>
                    <li className="footer-item">
                      <a href="#">
                        <div className="footer-link">
                          <span>Resource Directory</span>
                        </div>
                      </a>
                    </li>
                    <li className="footer-item">
                      <a href="#">
                        <div className="footer-link">
                          <span>Community Events</span>
                        </div>
                      </a>
                    </li>
                    <li className="footer-item">
                      <a href="#">
                        <div className="footer-link">
                          <span>Support Services</span>
                        </div>
                      </a>
                    </li>
                    <li className="footer-item">
                      <a href="#">
                        <div className="footer-link">
                          <span>Submit a Resource</span>
                        </div>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="footer-column footer-contact">
                <h3 className="footer-heading section-subtitle">
                  Get in Touch
                </h3>
                <div className="footer-contact-info">
                  <div className="footer-contact-item">
                    <div className="footer-contact-icon">
                      <svg
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                          <circle r="3" cx="12" cy="10"></circle>
                        </g>
                      </svg>
                    </div>
                    <span className="section-content">
                      123 Community Lane, Nest City, NC 27513
                    </span>
                  </div>
                  <div className="footer-contact-item">
                    <div className="footer-contact-icon">
                      <svg
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                          <rect
                            x="2"
                            y="4"
                            rx="2"
                            width="20"
                            height="16"
                          ></rect>
                        </g>
                      </svg>
                    </div>
                    <a href="mailto:hello@neighborsnest.org?subject=">
                      <div className="section-content footer-link">
                        <span>hello@neighborsnest.org</span>
                      </div>
                    </a>
                  </div>
                  <div className="footer-contact-item">
                    <div className="footer-contact-icon">
                      <svg
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                    <a href="tel:+15551234567">
                      <div className="section-content footer-link">
                        <span>(555) 123-4567</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <div className="footer-legal">
                <p className="footer-copyright section-content">
                  &amp;copy; 2026 NeighborsNest Community Resource Hub. All
                  rights reserved.
                </p>
                <div className="footer-legal-links">
                  <a href="#">
                    <div className="footer-legal-link section-content">
                      <span>Privacy Policy</span>
                    </div>
                  </a>
                  <a href="#">
                    <div className="footer-legal-link section-content">
                      <span>Terms of Service</span>
                    </div>
                  </a>
                  <a href="#">
                    <div className="footer-legal-link section-content">
                      <span>Accessibility</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <div className="footer-container2">
          <div className="footer-container3">
            <Script
              html={`<style>
@media (prefers-reduced-motion: reduce) {
.footer-social-icon:hover {
  transform: none;
}
.footer-link:hover {
  transform: none;
}
}
</style>`}
            ></Script>
          </div>
        </div>
        <div className="footer-container4">
          <div className="footer-container5">
            <Script
              html={`<script defer data-name="footer-interactivity">
(function(){
  const footerIcons = document.querySelectorAll(".footer-social-icon")

  footerIcons.forEach((icon) => {
    icon.addEventListener("mouseenter", () => {
      const colors = ["var(--color-primary)", "var(--color-secondary)", "var(--color-accent)"]
      const randomColor = colors[Math.floor(Math.random() * colors.length)]
      icon.style.backgroundColor = randomColor
    })

    icon.addEventListener("mouseleave", () => {
      icon.style.backgroundColor = ""
    })
  })

  const footerLinks = document.querySelectorAll(".footer-link")
  footerLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      if (link.getAttribute("href") === "#") {
        e.preventDefault()
        console.log("Navigation to: " + link.textContent)
      }
    })
  })
})()
</script>`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .footer-container1 {
            display: contents;
          }
          .footer-container2 {
            display: none;
          }
          .footer-container3 {
            display: contents;
          }
          .footer-container4 {
            display: none;
          }
          .footer-container5 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default Footer
