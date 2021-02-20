const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello World! We have finally arrived!!  /n This is the pipeline manual review Test1!!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
