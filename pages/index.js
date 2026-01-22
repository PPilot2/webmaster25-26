import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Navigation from '../components/navigation'
import Footer from '../components/footer'

const Home = (props) => {
  return (
    <>
      <div className="home-container1">
        <Head>
          <title>Frail Orderly Eland</title>
          <meta property="og:title" content="Frail Orderly Eland" />
          <link
            rel="canonical"
            href="https://frail-orderly-eland-8t12rm.teleporthq.app/"
          />
        </Head>
        <Navigation></Navigation>
        <div className="home-container2">
          <div className="home-container3">
            <Script
              html={`<style>
section {
  padding: var(--spacing-4xl) 0;
  position: relative;
  overflow: hidden;
}
</style>`}
            ></Script>
          </div>
        </div>
        <section className="hero-section">
          <video
            src="https://videos.pexels.com/video-files/5597028/5597028-hd_1280_720_24fps.mp4"
            loop="true"
            muted="true"
            poster="https://images.pexels.com/videos/5597028/pictures/preview-0.jpg"
            autoPlay="true"
            playsInline="true"
            className="hero-bg-video"
          ></video>
          <div className="hero-overlay"></div>
          <div className="hero-content-wrapper">
            <div className="hero-text-block">
              <h1 className="home-hero-title hero-title">
                <span>
                  {' '}
                  Your Community,
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span className="home-thq-hero-accent-text-elm">
                  Better Together.
                </span>
              </h1>
              <p className="hero-subtitle">
                NeighborsNest is your local hub for discovery. Find nonprofits,
                support services, and community events designed to help our
                neighborhood thrive.
              </p>
            </div>
            <div className="hero-search-container">
              <form
                action="/search"
                method="GET"
                data-form-id="4c6f6ee0-93e7-457f-8c8c-33aaafe922db"
                className="hero-search-form"
              >
                <div className="hero-search-input-group">
                  <div className="hero-search-icon">
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
                        <path d="m21 21l-4.34-4.34"></path>
                        <circle r="8" cx="11" cy="11"></circle>
                      </g>
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="thq_textinput_S1mu"
                    name="textinput"
                    required="true"
                    placeholder="Search for 'Food Bank', 'Youth Programs', or 'Events'..."
                    data-form-field-id="thq_textinput_S1mu"
                    className="hero-search-input"
                  />
                </div>
                <button
                  id="thq_button_TBwx"
                  name="button"
                  type="submit"
                  data-form-field-id="thq_button_TBwx"
                  className="hero-search-btn btn-lg btn-primary btn"
                >
                  Find Resources
                </button>
              </form>
              <div className="hero-quick-tags">
                <span className="hero-tag-label">Popular:</span>
                <a href="#">
                  <div className="hero-tag">
                    <span>Family Support</span>
                  </div>
                </a>
                <a href="#">
                  <div className="hero-tag">
                    <span>Mental Health</span>
                  </div>
                </a>
                <a href="#">
                  <div className="hero-tag">
                    <span>Education</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="features-section">
          <div className="features-header">
            <h2 className="section-title">Featured Local Resources</h2>
            <p className="section-content">
              Discover hand-picked organizations making a difference in our
              community today.
            </p>
          </div>
          <div className="features-rail-container">
            <div className="features-card">
              <div className="features-card-image">
                <img
                  alt="Green Harvest Food Bank"
                  src="https://images.pexels.com/photos/6995220/pexels-photo-6995220.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                />
                <span className="features-badge">Nonprofit</span>
              </div>
              <div className="features-card-content">
                <h3 className="features-card-title">Green Harvest Food Bank</h3>
                <p className="section-content">
                  Providing nutritious meals and sustainable food solutions for
                  families in need across the county.
                </p>
                <a href="#">
                  <div className="btn-link features-card-link btn">
                    <span>View Details</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="features-card">
              <div className="features-card-image">
                <img
                  alt="Bright Futures Youth Center"
                  src="https://images.pexels.com/photos/8042458/pexels-photo-8042458.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                />
                <span className="features-badge">Education</span>
              </div>
              <div className="features-card-content">
                <h3 className="features-card-title">
                  Bright Futures Youth Center
                </h3>
                <p className="section-content">
                  After-school programs focusing on STEM, arts, and leadership
                  for local students ages 12-18.
                </p>
                <a href="#">
                  <div className="btn-link features-card-link btn">
                    <span>View Details</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="features-card">
              <div className="features-card-image">
                <img
                  alt="Senior Care Alliance"
                  src="https://images.pexels.com/photos/6647054/pexels-photo-6647054.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                />
                <span className="features-badge">Support Services</span>
              </div>
              <div className="features-card-content">
                <h3 className="features-card-title">Senior Care Alliance</h3>
                <p className="section-content">
                  Dedicated to improving the lives of seniors through
                  companionship, home aid, and legal resources.
                </p>
                <a href="#">
                  <div className="btn-link features-card-link btn">
                    <span>View Details</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="features-card">
              <div className="features-card-image">
                <img
                  alt="Unity Shelter Program"
                  src="https://images.pexels.com/photos/6994855/pexels-photo-6994855.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                />
                <span className="features-badge">Housing</span>
              </div>
              <div className="features-card-content">
                <h3 className="features-card-title">Unity Shelter Program</h3>
                <p className="section-content">
                  Emergency housing and long-term placement services for
                  individuals experiencing homelessness.
                </p>
                <a href="#">
                  <div className="btn-link features-card-link btn">
                    <span>View Details</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="events-section">
          <div className="events-header">
            <h2 className="section-title">Community Calendar</h2>
            <p className="section-content">
              Get involved and meet your neighbors at these upcoming local
              events.
            </p>
          </div>
          <div className="events-rail">
            <div className="events-item">
              <div className="events-date-box">
                <span className="events-day">14</span>
                <span className="events-month">OCT</span>
              </div>
              <div className="events-details">
                <h3 className="events-title">Neighborhood Clean-Up</h3>
                <p className="section-content">
                  Join us at Riverside Park for our monthly beautification
                  project. Supplies provided!
                </p>
                <div className="events-meta">
                  <svg
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                    height="18"
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
                  <span>Riverside Park</span>
                </div>
              </div>
            </div>
            <div className="events-item">
              <div className="events-date-box">
                <span className="events-day">22</span>
                <span className="events-month">OCT</span>
              </div>
              <div className="events-details">
                <h3 className="events-title">Nonprofit Job Fair</h3>
                <p className="section-content">
                  Meet recruiters from over 20 local organizations looking for
                  passionate staff.
                </p>
                <div className="events-meta">
                  <svg
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                    height="18"
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
                  <span>Community Center</span>
                </div>
              </div>
            </div>
            <div className="events-item">
              <div className="events-date-box">
                <span className="events-day">05</span>
                <span className="events-month">NOV</span>
              </div>
              <div className="events-details">
                <h3 className="events-title">Mental Health Workshop</h3>
                <p className="section-content">
                  A free session on stress management and local support networks
                  for residents.
                </p>
                <div className="events-meta">
                  <svg
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                    height="18"
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
                  <span>Central Library</span>
                </div>
              </div>
            </div>
          </div>
          <div className="events-footer">
            <a href="#">
              <div className="btn-outline btn-lg btn">
                <span>View All Events</span>
              </div>
            </a>
          </div>
        </section>
        <section className="stats-section">
          <div className="stats-container">
            <div className="stats-header">
              <h2 className="section-title">A Growing Network</h2>
              <p className="section-content">
                NeighborsNest connects thousands of residents with essential
                services every month.
              </p>
            </div>
            <div className="stats-grid">
              <div className="stats-item">
                <span className="stats-number">450+</span>
                <span className="stats-label">Verified Resources</span>
              </div>
              <div className="stats-item">
                <span className="stats-number">12</span>
                <span className="stats-label">Service Categories</span>
              </div>
              <div className="stats-item">
                <span className="stats-number">24/7</span>
                <span className="stats-label">Always Accessible</span>
              </div>
              <div className="stats-item">
                <span className="stats-number">15k</span>
                <span className="stats-label">Monthly Searches</span>
              </div>
              <div className="stats-item">
                <span className="stats-number">85+</span>
                <span className="stats-label">Local Nonprofits</span>
              </div>
              <div className="stats-item">
                <span className="stats-number">100%</span>
                <span className="stats-label">Community Driven</span>
              </div>
            </div>
          </div>
        </section>
        <section className="process-section">
          <div className="process-container">
            <div className="process-header">
              <h2 className="section-title">How to Use the Hub</h2>
              <p className="section-content">
                Four simple steps to find the help you need or contribute to the
                community.
              </p>
            </div>
            <div className="process-steps">
              <div className="process-step">
                <div className="process-icon-wrapper">
                  <svg
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m21 21l-4.34-4.34"></path>
                      <circle r="8" cx="11" cy="11"></circle>
                    </g>
                  </svg>
                  <span className="process-number">1</span>
                </div>
                <h3 className="process-step-title">Quick Search</h3>
                <p className="section-content">
                  Enter keywords into the search bar at the top of the page.
                </p>
              </div>
              <div className="process-step">
                <div className="process-icon-wrapper">
                  <svg
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0zm.894.211v15M9 3.236v15"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <span className="process-number">2</span>
                </div>
                <h3 className="process-step-title">Filter Results</h3>
                <p className="section-content">
                  Narrow down by category, location, or service type.
                </p>
              </div>
              <div className="process-step">
                <div className="process-icon-wrapper">
                  <svg
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle r="3" cx="12" cy="12"></circle>
                      <path d="m16 16l-1.9-1.9"></path>
                      <path d="M3 7V5a2 2 0 0 1 2-2h2m10 0h2a2 2 0 0 1 2 2v2m0 10v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2"></path>
                    </g>
                  </svg>
                  <span className="process-number">3</span>
                </div>
                <h3 className="process-step-title">View Details</h3>
                <p className="section-content">
                  Click on any resource to see contact info and hours.
                </p>
              </div>
              <div className="process-step">
                <div className="process-icon-wrapper">
                  <svg
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M5 12h14m-7-7v14"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <span className="process-number">4</span>
                </div>
                <h3 className="process-step-title">Submit New</h3>
                <p className="section-content">
                  Suggest a missing resource via our simple online form.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="cta-alert-section">
          <div className="cta-alert-container">
            <div className="cta-alert-content">
              <div className="cta-alert-icon">
                <svg
                  width="40"
                  xmlns="http://www.w3.org/2000/svg"
                  height="40"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M3.85 8.62a4 4 0 0 1 4.78-4.77a4 4 0 0 1 6.74 0a4 4 0 0 1 4.78 4.78a4 4 0 0 1 0 6.74a4 4 0 0 1-4.77 4.78a4 4 0 0 1-6.75 0a4 4 0 0 1-4.78-4.77a4 4 0 0 1 0-6.76M12 8v8m-4-4h8"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <div className="cta-alert-text">
                <h2 className="section-title">Know a resource we missed?</h2>
                <p className="section-content">
                  Our directory grows through community contributions. If you
                  know a nonprofit or service that should be here, let us know!
                </p>
              </div>
              <div className="cta-alert-actions">
                <button id="openSuggestModal" className="btn-xl btn-accent btn">
                  Suggest a Resource
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="testimonials-section">
          <div className="testimonials-header">
            <h2 className="section-title">Community Voices</h2>
            <p className="section-content">
              See how NeighborsNest is making a real difference in the lives of
              our neighbors.
            </p>
          </div>
          <div className="testimonials-rail">
            <div className="testimonial-card">
              <div className="testimonial-quote">
                <svg
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C15.4647 8 15.017 8.44772 15.017 9V12C15.017 12.5523 14.5693 13 14.017 13H12.017V9C12.017 6.79086 13.8079 5 16.017 5H19.017C19.5693 5 20.017 4.55228 20.017 4C20.017 3.44772 19.5693 3 19.017 3H16.017C12.7033 3 10.017 5.68629 10.017 9V21H14.017ZM4.017 21L4.017 18C4.017 16.8954 4.91243 16 6.017 16H9.017C9.56928 16 10.017 15.5523 10.017 15V9C10.017 8.44772 9.56928 8 9.017 8H6.017C5.46472 8 5.017 8.44772 5.017 9V12C5.017 12.5523 4.56928 13 4.017 13H2.017V9C2.017 6.79086 3.80786 5 6.017 5H9.017C9.56928 5 10.017 4.55228 10.017 4C10.017 3.44772 9.56928 3 9.017 3H6.017C2.70329 3 0.017 5.68629 0.017 9V21H4.017Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <p className="section-content">
                &quot;Finding a local food pantry used to be a headache.
                NeighborsNest put everything in one place, and I was able to get
                help the same day.&quot;
              </p>
              <div className="testimonial-author">
                <span className="author-name">Sarah Jenkins</span>
                <span className="author-role">Resident</span>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-quote">
                <svg
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C15.4647 8 15.017 8.44772 15.017 9V12C15.017 12.5523 14.5693 13 14.017 13H12.017V9C12.017 6.79086 13.8079 5 16.017 5H19.017C19.5693 5 20.017 4.55228 20.017 4C20.017 3.44772 19.5693 3 19.017 3H16.017C12.7033 3 10.017 5.68629 10.017 9V21H14.017ZM4.017 21L4.017 18C4.017 16.8954 4.91243 16 6.017 16H9.017C9.56928 16 10.017 15.5523 10.017 15V9C10.017 8.44772 9.56928 8 9.017 8H6.017C5.46472 8 5.017 8.44772 5.017 9V12C5.017 12.5523 4.56928 13 4.017 13H2.017V9C2.017 6.79086 3.80786 5 6.017 5H9.017C9.56928 5 10.017 4.55228 10.017 4C10.017 3.44772 9.56928 3 9.017 3H6.017C2.70329 3 0.017 5.68629 0.017 9V21H4.017Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <p className="section-content">
                &quot;As a small nonprofit, visibility is our biggest challenge.
                Since being listed here, our volunteer inquiries have increased
                by 40%.&quot;
              </p>
              <div className="testimonial-author">
                <span className="author-name">Mark Thompson</span>
                <span className="author-role">Director, Youth Outreach</span>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-quote">
                <svg
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C15.4647 8 15.017 8.44772 15.017 9V12C15.017 12.5523 14.5693 13 14.017 13H12.017V9C12.017 6.79086 13.8079 5 16.017 5H19.017C19.5693 5 20.017 4.55228 20.017 4C20.017 3.44772 19.5693 3 19.017 3H16.017C12.7033 3 10.017 5.68629 10.017 9V21H14.017ZM4.017 21L4.017 18C4.017 16.8954 4.91243 16 6.017 16H9.017C9.56928 16 10.017 15.5523 10.017 15V9C10.017 8.44772 9.56928 8 9.017 8H6.017C5.46472 8 5.017 8.44772 5.017 9V12C5.017 12.5523 4.56928 13 4.017 13H2.017V9C2.017 6.79086 3.80786 5 6.017 5H9.017C9.56928 5 10.017 4.55228 10.017 4C10.017 3.44772 9.56928 3 9.017 3H6.017C2.70329 3 0.017 5.68629 0.017 9V21H4.017Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <p className="section-content">
                &quot;I love the events calendar! It&apos;s so easy to see
                what&apos;s happening this weekend. I&apos;ve met so many great
                people at the clean-ups.&quot;
              </p>
              <div className="testimonial-author">
                <span className="author-name">Elena Rodriguez</span>
                <span className="author-role">Community Volunteer</span>
              </div>
            </div>
          </div>
        </section>
        <dialog id="suggestModal" className="suggest-dialog">
          <div className="modal-header">
            <h2 className="section-title">Suggest a Resource</h2>
            <button id="closeSuggestModal" className="modal-close-btn">
              &amp;times;
            </button>
          </div>
          <form
            action="/submit-resource"
            method="POST"
            data-form-id="7a69d3ae-dedb-41df-a780-b63b03fa2ad0"
            className="modal-form"
          >
            <div className="form-group">
              <label htmlFor="resName">Organization Name *</label>
              <input
                type="text"
                id="resName"
                name="resName"
                required="true"
                placeholder="e.g. Local Food Bank"
                data-form-field-id="resName"
              />
            </div>
            <div className="form-group">
              <label htmlFor="resCat">Category *</label>
              <select
                id="resCat"
                name="resCat"
                required="true"
                data-form-field-id="resCat"
              >
                <option value="true">Select a category</option>
                <option value="food">Food &amp; Nutrition</option>
                <option value="health">Healthcare</option>
                <option value="education">Education</option>
                <option value="housing">Housing</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="resDesc">Short Description *</label>
              <textarea
                id="resDesc"
                name="resDesc"
                required="true"
                minlength="20"
                placeholder="Tell us what they do..."
                data-form-field-id="resDesc"
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="resLink">Website Link (if any)</label>
              <input
                type="url"
                id="resLink"
                name="resLink"
                placeholder="https://..."
                data-form-field-id="resLink"
              />
            </div>
            <div className="modal-actions">
              <button
                id="thq_button_sHtI"
                name="button"
                type="submit"
                data-form-field-id="thq_button_sHtI"
                className="btn-lg btn-primary btn"
              >
                Submit Suggestion
              </button>
            </div>
          </form>
        </dialog>
        <div className="home-container4">
          <div className="home-container5">
            <Script
              html={`<style>
        @keyframes fadeInDown {from {opacity: 0;
transform: translateY(-30px);}
to {opacity: 1;
transform: translateY(0);}}@keyframes fadeInUp {from {opacity: 0;
transform: translateY(30px);}
to {opacity: 1;
transform: translateY(0);}}
        </style> `}
            ></Script>
          </div>
        </div>
        <div className="home-container6">
          <div className="home-container7">
            <Script
              html={`<script defer data-name="neighborsnest-logic">
(function(){
  // Modal Logic
  const suggestModal = document.getElementById("suggestModal")
  const openModalBtn = document.getElementById("openSuggestModal")
  const closeModalBtn = document.getElementById("closeSuggestModal")

  if (suggestModal && openModalBtn && closeModalBtn) {
    openModalBtn.addEventListener("click", () => {
      suggestModal.showModal()
    })

    closeModalBtn.addEventListener("click", () => {
      suggestModal.close()
    })

    // Close on backdrop click
    suggestModal.addEventListener("click", (e) => {
      if (e.target === suggestModal) {
        suggestModal.close()
      }
    })
  }

  // Smooth Horizontal Scroll for Rails (Optional UX enhancement)
  const rails = document.querySelectorAll(".features-rail-container, .events-rail, .testimonials-rail")

  rails.forEach((rail) => {
    rail.addEventListener(
      "wheel",
      (evt) => {
        if (evt.deltaY !== 0) {
          evt.preventDefault()
          rail.scrollLeft += evt.deltaY
        }
      },
      { passive: false }
    )
  })

  // Simple Form Validation Feedback
  const forms = document.querySelectorAll("form")
  forms.forEach((form) => {
    form.addEventListener("submit", (e) => {
      // Native validation handles the logic, we just provide a success hint for the demo
      // In a real app, this would be handled after a successful fetch/post
      const btn = form.querySelector('button[type="submit"]')
      const originalText = btn.innerText

      if (form.checkValidity()) {
        btn.innerText = "Processing..."
        btn.disabled = true

        // This is just for visual feedback in this component
        setTimeout(() => {
          if (suggestModal.open) {
            suggestModal.close()
            alert("Thank you for your suggestion! We will review it shortly.")
            form.reset()
            btn.innerText = originalText
            btn.disabled = false
          }
        }, 1500)
      }
    })
  })
})()
</script>`}
            ></Script>
          </div>
        </div>
        <Footer></Footer>
        <a href="https://play.teleporthq.io/signup">
          <div aria-label="Sign up to TeleportHQ" className="home-container8">
            <svg
              width="24"
              height="24"
              viewBox="0 0 19 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="home-icon47"
            >
              <path
                d="M9.1017 4.64355H2.17867C0.711684 4.64355 -0.477539 5.79975 -0.477539 7.22599V13.9567C-0.477539 15.3829 0.711684 16.5391 2.17867 16.5391H9.1017C10.5687 16.5391 11.7579 15.3829 11.7579 13.9567V7.22599C11.7579 5.79975 10.5687 4.64355 9.1017 4.64355Z"
                fill="#B23ADE"
              ></path>
              <path
                d="M10.9733 12.7878C14.4208 12.7878 17.2156 10.0706 17.2156 6.71886C17.2156 3.3671 14.4208 0.649963 10.9733 0.649963C7.52573 0.649963 4.73096 3.3671 4.73096 6.71886C4.73096 10.0706 7.52573 12.7878 10.9733 12.7878Z"
                fill="#FF5C5C"
              ></path>
              <path
                d="M17.7373 13.3654C19.1497 14.1588 19.1497 15.4634 17.7373 16.2493L10.0865 20.5387C8.67402 21.332 7.51855 20.6836 7.51855 19.0968V10.5141C7.51855 8.92916 8.67402 8.2807 10.0865 9.07221L17.7373 13.3654Z"
                fill="#2874DE"
              ></path>
            </svg>
            <span className="home-text26">Built in TeleportHQ</span>
          </div>
        </a>
      </div>
      <style jsx>
        {`
          .home-container1 {
            width: 100%;
            display: block;
            min-height: 100vh;
          }
          .home-container2 {
            display: none;
          }
          .home-container3 {
            display: contents;
          }
          .home-thq-hero-accent-text-elm {
            color: var(--color-accent);
          }
          .home-container4 {
            display: none;
          }
          .home-container5 {
            display: contents;
          }
          .home-container6 {
            display: none;
          }
          .home-container7 {
            display: contents;
          }
          .home-container8 {
            right: 50px;
            border: 1px solid #ffffff5c;
            bottom: 30px;
            display: flex;
            z-index: 22;
            position: fixed;
            box-shadow: 5px 5px 10px 0px rgba(31, 31, 31, 0.4);
            min-height: auto;
            align-items: center;
            padding-top: 8px;
            padding-left: 12px;
            border-radius: 8px;
            padding-right: 12px;
            padding-bottom: 8px;
            backdrop-filter: blur(6px);
            background-color: rgba(41, 41, 41, 0.41);
          }
          .home-icon47 {
            width: 24px;
            margin-right: 4px;
          }
          .home-text26 {
            color: white;
            font-size: 13px;
            font-style: normal;
            font-weight: 500;
            line-height: 24px;
          }
        `}
      </style>
    </>
  )
}

export default Home
