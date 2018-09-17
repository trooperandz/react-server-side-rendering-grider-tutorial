const express = require('express');
const React = require('react');
// We have to do this weird stuff to make ES205 work nicely with commonJS modules
const renderToString = require('react-dom-server').renderToString;
const Home = require('./client/components/Home').default;
const app = express();

app.get('/', (req, res) => {
  // How are we using this jsx react component directly here in Express?
  // Have to do some setup to get it to work
  const content = renderToString(<Home />);

  res.send(content);
});

app.listen(3000, () => {
  console.log('listening on port 3000...')
});
