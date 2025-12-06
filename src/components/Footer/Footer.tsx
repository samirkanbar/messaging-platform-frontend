import { Link } from "react-router-dom"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <Link to="/" className="footer-title">
            SayGoodbyes.com
          </Link>
          <p>
            Ensuring your final words are delivered. Plan your goodbyes, securely and simply.
          </p>
        </div>

        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/hiw">How It Works</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/pricing">Pricing</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div className="footer-section legal">
          <h3>Legal</h3>
          <ul>
            <li><Link to="/terms">Terms of Service</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/security">Security</Link></li>
            <li><Link to="/dependent-info">Dependent Info</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; {currentYear} SayGoodbyes.com | All Rights Reserved
      </div>
    </footer>
  )
}