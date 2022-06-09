import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="Footer">
      <h3 className="Footer__heading Footer__text Footer__text_color_grey">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h3>
      <section className="Footer__section">
        <p
          className="Footer__text Footer__copyrights"
        >
          &copy; 2022
        </p>
        <nav>
          <ul className="Footer__links">
            <li className="Footer__link-item">
              <a href="/" className="Footer__text Footer__text_color_white">
                Яндекс.Практикум
              </a>
            </li>
            <li className="Footer__link-item">
              <a
                href="/"
                className="Footer__text Footer__text_color_white"
              >
                Github
              </a>
            </li>
            <li className="Footer__link-item">
              <a
                href="/"
                className="Footer__text Footer__text_color_white"
              >
                Facebook
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </footer>
  );
}
