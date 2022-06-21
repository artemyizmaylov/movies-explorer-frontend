import React from 'react';
import './Portfolio.css';

export default function Portfolio() {
  return (
    <section className="portfolio">
      <h3 className="portfolio__heading portfolio__text">Портфолио</h3>
      <ul className="portfolio__links">
        <li className="portfolio__link-item">
          <a
            className="portfolio__link portfolio__text"
            href="https://artemyizmaylov.github.io/how-to-learn/"
            target="_blank"
            rel="noreferrer"
          >
            Статичный сайт
          </a>
          <a
            className="portfolio__link portfolio__text"
            href="https://artemyizmaylov.github.io/russian-travel/index.html"
            target="_blank"
            rel="noreferrer"
          >
            ↗
          </a>
        </li>
        <li className="portfolio__link-item">
          <a
            className="portfolio__link portfolio__text"
            href="https://artemyizmaylov.github.io/russian-travel/index.html"
            target="_blank"
            rel="noreferrer"
          >
            Адаптивный сайт
          </a>
          <a
            className="portfolio__link portfolio__text"
            href="https://artemyizmaylov.github.io/russian-travel/index.html"
            target="_blank"
            rel="noreferrer"
          >
            ↗
          </a>
        </li>
        <li className="portfolio__link-item">
          <a
            className="portfolio__link portfolio__text"
            href="https://artemyizmaylov.github.io/mesto-react/"
            target="_blank"
            rel="noreferrer"
          >
            Одностраничное приложение
          </a>
          <a
            className="portfolio__link portfolio__text"
            href="https://artemyizmaylov.github.io/mesto-react/"
            target="_blank"
            rel="noreferrer"
          >
            ↗
          </a>
        </li>
      </ul>
    </section>
  );
}
