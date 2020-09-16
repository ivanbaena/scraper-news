import cheerio from 'cheerio';
import axios from 'axios';
import fs from 'fs';

import { htmlBody } from '../helpers/';

export class Scraper {
  constructor(public url: string) {}

  private fetchHtml = async (url: string) => {
    try {
      const { data } = await axios.get(url);
      return data;
    } catch {
      console.error(
        `ERROR: An error occurred while trying to fetch the URL: ${url}`
      );
    }
  };

  scraper = async (target: string, cb: Function) => {
    const html = await this.fetchHtml(this.url);
    const selector = cheerio.load(html);
    const data = selector(target);

    cb(data, selector);
  };

  renderHtml = (collection: []) => {
    const content = collection
      .map((item) => {
        return `
              <li>
                ${item}
              </li>
            `;
      })
      .join('')
      .trim();

    return `
      <ul>
      ${content}
      </ul>
    `;
  };

  writeFile = (content: string, name: string) => {
    fs.writeFile(name, htmlBody(content), function (err) {
      if (err) throw err;
      console.log('Saved!');
    });
  };

  whatColor = (color: string): void => {
    console.log('whatColor', color);
  };
}
