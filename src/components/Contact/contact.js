import React from "react"
import styled from "styled-components"
import Button from "../Button/button"

const Contact = ({ title, subtitle, id }) => {
  return (
    <ContactWrapper id="contact">
      <div className="content-container">
        <h2>{title}</h2>
        <p>
          Feel free to email us via
          <a
            style={{
              textDecoration: "none",
              color: "#07f",
              marginLeft: "0.3rem",
              marginRight: "0.3rem",
            }}
            href="mailto:info@odishabeverages.com"
            target="_top"
          >
            info@odishabeverages.com
          </a>
          {subtitle}
        </p>
        <form name="contact" method="POST" data-netlify="true">
          <input type="hidden" name="form-name" value="contact" />

          <div className="input-area">
            <input
              type="text"
              name="name"
              aria-label="Name"
              required
              autoComplete="off"
            />
            <label className="label-name" htmlFor="name">
              <span className="content-name">Name</span>
            </label>
          </div>

          <div className="input-area">
            <input
              type="email"
              name="email"
              aria-label="Email"
              required
              autoComplete="off"
            />
            <label className="label-name" htmlFor="email">
              <span className="content-name">Email</span>
            </label>
          </div>

          <div className="input-area">
            <textarea
              type="text"
              name="message"
              rows="5"
              required
              autoComplete="off"
              aria-label="Message"
              style={{
                textTransform: "capitalize",
              }}
            />
            <label className="label-name" htmlFor="message">
              <span className="content-name">Message</span>
            </label>
          </div>

          <div className="input-area button-area">
            <Button label="Send Contact Form" cta="Send" type="submit" />
          </div>
        </form>
      </div>
    </ContactWrapper>
  )
}

const ContactWrapper = styled.section`
  padding: 20px 30px 100px 30px;
  color: #fff;

  .content-container {
    width: 100%;
    margin: 0 auto;

    h2 {
      text-align: left;
      background: -webkit-linear-gradient(45deg, #f441a5, #03a9f4);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      color: #fff;
      @media (min-width: 768px) {
        text-align: center;
      }
    }
    p {
      margin-bottom: 2rem;
      color: #fff;

      @media (min-width: 768px) {
        text-align: center;
      }
    }

    form {
      position: relative;
      overflow: hidden;

      .input-area {
        margin-bottom: 40px;
        position: relative;

        &.button-area {
          text-align: center;
          margin-bottom: 0;
        }
      }

      input,
      textarea {
        height: 100%;
        font-size: 1rem;
        letter-spacing: 0.25rem;
        padding: 20px;
        display: block;
        width: 100% !important;
        border: none;
        background-color: #0b132e;
        color: #fff;
        position: relative;
        box-sizing: border-box;
        outline: none;

        &:focus,
        &:valid {
          + .label-name {
            .content-name {
              transform: translateY(-25%);
              font-size: 0.7rem;
              opacity: 0.2;
            }
            &::after {
              transform: translateX(0%);
            }
          }
        }
      }

      label {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        pointer-events: none;

        &::after {
          content: "";
          position: absolute;
          left: 0px;
          bottom: -1px;
          height: 1px;
          background: linear-gradient(90deg, #f441a5, #03a9f4);
          width: 100%;
          transform: translateX(-100%);
          transition: transform 0.3s ease;
        }
      }

      .content-name {
        position: absolute;
        top: 10px;
        left: 20px;
        transition: all 0.3s ease;
        text-transform: uppercase;
        letter-spacing: 0.25rem;
        font-size: 0.8rem;
      }
    }
  }
`

export default Contact
