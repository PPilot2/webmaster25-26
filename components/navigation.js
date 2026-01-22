import React from 'react'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

const Navigation = (props) => {
  return (
    <>
      <div className="navigation-container1">
        <nav className="navigation-wrapper">
          <div className="navigation-container">
            <a href="Homepage">
              <div aria-label="NeighborsNest Home" className="navigation-brand">
                <div className="navigation-logo-icon">
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
                      <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                      <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    </g>
                  </svg>
                </div>
                <span className="section-title">NeighborsNest</span>
              </div>
            </a>
            <div className="navigation-desktop-links">
              <a href="Homepage">
                <div className="navigation-link">
                  <span>Directory</span>
                </div>
              </a>
              <a href="Homepage">
                <div className="navigation-link">
                  <span>Events</span>
                </div>
              </a>
              <a href="Homepage">
                <div className="navigation-link">
                  <span>Support Services</span>
                </div>
              </a>
              <a href="Homepage">
                <div className="navigation-link">
                  <span>About Us</span>
                </div>
              </a>
              <a href="Homepage">
                <div className="btn-sm btn-primary btn">
                  <span>Suggest Resource</span>
                </div>
              </a>
            </div>
            <button
              id="navToggle"
              aria-label="Toggle navigation menu"
              aria-expanded="false"
              className="navigation-mobile-toggle"
            >
              <svg
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
          </div>
        </nav>
        <div id="mobileOverlay" className="navigation-mobile-overlay">
          <div className="navigation-overlay-header">
            <a href="Homepage">
              <div aria-label="NeighborsNest Home" className="navigation-brand">
                <div className="navigation-logo-icon">
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
                      <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                      <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    </g>
                  </svg>
                </div>
                <span className="section-title">NeighborsNest</span>
              </div>
            </a>
            <button
              id="navClose"
              aria-label="Close navigation menu"
              className="navigation-mobile-close"
            >
              <svg
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1zm-5.5-3.5l-5 5m0-5l5 5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
          </div>
          <div className="navigation-overlay-content">
            <div className="navigation-overlay-links">
              <a href="Homepage">
                <div className="navigation-overlay-link">
                  <span>Directory</span>
                </div>
              </a>
              <a href="Homepage">
                <div className="navigation-overlay-link">
                  <span>Events</span>
                </div>
              </a>
              <a href="Homepage">
                <div className="navigation-overlay-link">
                  <span>Support Services</span>
                </div>
              </a>
              <a href="Homepage">
                <div className="navigation-overlay-link">
                  <span>About Us</span>
                </div>
              </a>
            </div>
            <div className="navigation-overlay-footer">
              <a href="Homepage">
                <div className="btn-lg btn-primary btn">
                  <span>Suggest a Resource</span>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="navigation-container2">
          <div className="navigation-container3">
            <Script
              html={`<script defer data-name="navigation-logic">
(function(){
  const toggleBtn = document.getElementById("navToggle")
  const closeBtn = document.getElementById("navClose")
  const overlay = document.getElementById("mobileOverlay")

  const openMenu = () => {
    overlay.style.display = "flex"
    setTimeout(() => {
      overlay.classList.add("is-active")
      toggleBtn.setAttribute("aria-expanded", "true")
      document.body.style.overflow = "hidden"
    }, 10)
  }

  const closeMenu = () => {
    overlay.classList.remove("is-active")
    toggleBtn.setAttribute("aria-expanded", "false")
    document.body.style.overflow = ""

    setTimeout(() => {
      if (!overlay.classList.contains("is-active")) {
        overlay.style.display = "none"
      }
    }, 400)
  }

  toggleBtn.addEventListener("click", openMenu)
  closeBtn.addEventListener("click", closeMenu)

  const overlayLinks = overlay.querySelectorAll(".navigation-overlay-link, .btn")
  overlayLinks.forEach((link) => {
    link.addEventListener("click", closeMenu)
  })

  window.addEventListener("resize", () => {
    if (window.innerWidth > 767 && overlay.classList.contains("is-active")) {
      closeMenu()
    }
  })

  let lastScroll = 0
  const navWrapper = document.querySelector(".navigation-wrapper")

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset

    if (currentScroll <= 0) {
      navWrapper.style.transform = "translateY(0)"
      return
    }

    if (currentScroll > lastScroll && currentScroll > 100) {
      navWrapper.style.transform = "translateY(-100%)"
    } else {
      navWrapper.style.transform = "translateY(0)"
    }

    lastScroll = currentScroll
  })
})()
</script>`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .navigation-container1 {
            display: contents;
          }
          .navigation-container2 {
            display: none;
          }
          .navigation-container3 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default Navigation
