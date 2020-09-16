import express, { Request, Response } from 'express';
import fs from 'fs';

export class Server {
  private app = express();

  launch = () => {
    this.app.listen(3000, () => {
      console.log('Server Running on 3000');
    });
  };

  init() {
    this.app.get('/ivan', (req: Request, res: Response) => {
      this.readFile(req, res);
    });
  }

  readFile = (req: Request, res: Response) => {
    fs.readFile('fox.html', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      return res.end();
    });
  };
}
