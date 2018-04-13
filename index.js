const request = require('request');
const cheerio = require('cheerio');

function spyder(data) {
    let url = `https://en.wikipedia.org/wiki/${ data }`
    request(url, function(err, resp, html){
        const $ = cheerio.load(html);
        console.log($('p a').text());
    });
}

spyder('javascript');