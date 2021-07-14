const fs = require('fs');
const generatePage = require('./src/page-template');

const profileDataArgs = process.argv.slice(2);

console.log(profileDataArgs);

const [userId, github] = profileDataArgs;

console.log(userId, github);

const pageHTML = generatePage(userId, github);

fs.writeFile('./index.html', pageHTML, err => {
  if (err) throw err;

  console.log('Portfolio complete! Check out index.html to see the output!');
});






// module uses const = name which is deprecated. Used userId instead