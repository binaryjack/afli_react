import express from 'express';

const app = express();

const listItems = [
  1, 2, 3, 4, 5, 6, 7, 7, 45, 54, 756, 4, 45, 74, 574, 5, 45, 4, 563, 45, 345,
  35, 645, 745, 74, 36, 363,
];

app.get('/', (req, res) => {
  return res.send(listItems);
});

app.listen(3001, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${3001}`);
});
