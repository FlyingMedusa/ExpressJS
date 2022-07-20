const { URLSearchParams } = require('url');

function generateQueryString(params) {
  const qs = new URLSearchParams(params);
  return `${qs}`.replace(/\+/g, '%20');
}

console.log(`http://localhost:3000/?${generateQueryString({
  name: 'Marta & Magdalena',
  position: 'developer',
})}`);
