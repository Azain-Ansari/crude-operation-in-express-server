
import express from 'express'
import path from 'path';
const __dirname = path.resolve();

import apiv1Router from './apiv1/main.mjs'
// import apiv2Router from './apiv2/main.mjs'

const app = express()

app.use(express.json()); // body parser

app.use("/api/v1", apiv1Router)
// app.use("/api/v2", apiv2Router)

app.use(express.static(path.join(__dirname, 'public')))

  const port = process.env.PORT || 4000;

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
    