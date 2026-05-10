import { QuartzComponentConstructor } from "./types"

export default (() => {
  function Footer() {
    return (
      <footer>
        <div class="footer-content">
          <p>Cryopolis Intelligence Archive</p>
          <p class="footer-sub">
            presented to you by worldweaver, <span class="footer-name">Joey</span> · {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    )
  }

  Footer.css = `
    footer {
      margin-top: 4rem;
      padding: 2rem;
      border-top: 1px solid #00fff044;
      text-align: center;
      font-family: 'Share Tech Mono', monospace;
      color: #4a4a6a;
    }
    .footer-content p {
      margin: 0.2rem 0;
    }
    .footer-name {
      color: #00fff0;
      text-shadow: 0 0 8px #00fff0;
    }
    .footer-sub {
      font-size: 0.8rem;
    }
  `

  return Footer
}) satisfies QuartzComponentConstructor