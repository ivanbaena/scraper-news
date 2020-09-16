import { Scraper } from './scraper/';
import { Server } from './server/Server';

const scraper = new Scraper('https://news.ycombinator.com/');

scraper.scraper('.storylink', (data: Cheerio, selector: CheerioAPI) => {
  const collection: any = [];
  data.each((i, elem) => {
    collection.push(selector(elem).text());
  });
  scraper.writeFile(scraper.renderHtml(collection), 'ycombinator.html');
});

// const fox = new Scraper('https://www.foxnews.com/');

// fox.scraper('.info-header', (data: Cheerio, selector: CheerioAPI) => {
//   const collection: any = [];
//   data.each((i, elem) => {
//     collection.push(selector(elem).text());
//   });
//   scraper.writeFile(scraper.renderHtml(collection), 'fox.html');
// });

const app = new Server();

app.init();

app.launch();
