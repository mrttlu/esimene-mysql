const { port } = require('./config');
// Create express object and put it into app constant
const app = require('./app');

// Start listening
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on port ${port}`);
});
