const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (_req, res) => res.send('Hello from CI demo!'));
app.get('/health', (_req, res) => res.json({ status: 'ok' }));

if (require.main === module) {
  app.listen(port, () => console.log(`Listening on ${port}`));
}

module.exports = app;

