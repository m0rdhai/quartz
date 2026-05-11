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
    
    @media (max-width: 768px) {
      footer {
        margin-top: 2rem;
        padding: 1.5rem 1rem;
      }
      .footer-content p {
        margin: 0.1rem 0;
      }
      .footer-sub {
        font-size: 0.7rem;
      }
    }
    
    @media (max-width: 480px) {
      footer {
        padding: 1rem 0.75rem;
      }
      footer {
        font-size: 0.9rem;
      }
      .footer-content p {
        margin: 0.1rem 0;
      }
      .footer-sub {
        font-size: 0.65rem;
      }
    }
  `

  return Footer
}) satisfies QuartzComponentConstructor