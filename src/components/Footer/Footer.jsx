import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <h3 className="footer__heading footer__text footer__text_color_grey">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h3>
      <div className="footer__section">
        <p
          className="footer__text footer__copyrights"
        >
          &copy; 2022
        </p>
        <nav>
          <ul className="footer__links">
            <li className="footer__link-item">
              <a href="/" className="footer__text footer__text_color_white">
                Яндекс.Практикум
              </a>
            </li>
            <li className="footer__link-item">
              <a
                href="/"
                className="footer__text footer__text_color_white"
              >
                Github
              </a>
            </li>
            <li className="footer__link-item">
              <a
                href="/"
                className="footer__text footer__text_color_white"
              >
                Facebook
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
