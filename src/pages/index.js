import React from "react"
import "../styles.scss"

function Spin() {
  return (
    <div className="spin">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0"
        y="0"
        version="1.1"
        viewBox="0 0 100 100"
        xmlSpace="preserve"
      >
        <circle cx="6" cy="50" r="6" fill="currentColor">
          <animate
            attributeName="opacity"
            begin="0.1"
            dur="1s"
            repeatCount="indefinite"
            values="0;1;0"
          ></animate>
        </circle>
        <circle cx="26" cy="50" r="6" fill="currentColor">
          <animate
            attributeName="opacity"
            begin="0.2"
            dur="1s"
            repeatCount="indefinite"
            values="0;1;0"
          ></animate>
        </circle>
        <circle cx="46" cy="50" r="6" fill="currentColor">
          <animate
            attributeName="opacity"
            begin="0.3"
            dur="1s"
            repeatCount="indefinite"
            values="0;1;0"
          ></animate>
        </circle>
      </svg>
    </div>
  )
}

export default function Home() {
  return (
    <main>
      <header>
        <Spin />
        <h1>Updates in progress</h1>
      </header>
      <section>
        <p>
          Nick designs{" "}
          <a href="http://manifold.co" target="_blank" rel="noreferrer">
            Manifold
          </a>{" "}
          and makes{" "}
          <a href="http://plangraph.io" target="_blank" rel="noreferrer">
            products
          </a>{" "}
          for developers.
        </p>
        <p>
          Living in{" "}
          <a
            href="https://www.google.ca/maps/@43.24323,-79.8290299,4985m/data=!3m1!1e3"
            target="_blank"
            rel="noreferrer"
          >
            Hamilton, Ontario
          </a>
          , married to{" "}
          <a
            href="http://instagram.com/rinntextiles"
            target="_blank"
            rel="noreferrer"
          >
            Erin
          </a>
          , we have a{" "}
          <a
            href="https://www.instagram.com/p/BFolQnOlIRd/?taken-by=ntassone"
            target="_blank"
            rel="noreferrer"
          >
            Mikko
          </a>
          .
        </p>
        <p class="small">
          Find me on{" "}
          <a
            href="http://twitter.com/ntassone"
            target="_blank"
            rel="noreferrer"
          >
            Twitter
          </a>{" "}
          <a
            href="http://instagram.com/ntassone"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>{" "}
          <a href="http://github.com/ntassone" target="_blank" rel="noreferrer">
            Github
          </a>{" "}
          <a
            href="http://dribbble.com/ntassone"
            target="_blank"
            rel="noreferrer"
          >
            Dribbble
          </a>
          {" and "}
          <a href="mailto:ntassone@gmail.com">email</a>.
        </p>
      </section>
    </main>
  )
}
