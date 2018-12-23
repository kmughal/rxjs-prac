const ajax = require("rxjs/ajax").ajax;
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const rxToStream = require('rxjs-stream').rxToStream;
const streamToRx = require("rxjs-stream").streamToRx;
const {
  map,
  take,
  tap
} = require("rxjs/operators");

const {
  createReadStream
} = require("fs");

const path = require("path");

class FakeService {
  getSample$(res) {
    res.header("Content-Type", 'application/json');
    const stream = createReadStream(
      path.resolve(__dirname, "sample", "mock.json"), {
        encoding: "utf-8"
      });
    const strToRx = streamToRx(stream);
    const result = rxToStream(strToRx);
    return result;
  }

  getPost$(res) {
    res.header("Content-Type", 'application/json');

    const result = ajax({
      url: "https://jsonplaceholder.typicode.com/posts",
      crossDomain: true,
      createXHR: function () {
        return new XMLHttpRequest();
      },
      responseType: "json"
    }).pipe(map(v => JSON.stringify(v.response)), take(5), tap(console.log))

    return rxToStream(result, {
      encoding : "utf-8"
    });
  }
}

module.exports.FakeService = FakeService;