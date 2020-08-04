const mysql = require('mysql');
const credentials = require('./config.js')

    /* localhost */
let connection = mysql.createConnection({
  host: 'localhost',
  user: 'student',
  password: 'student',
  database: 'home_data'
});
connection.connect()

    /* AWS */
// let connection = mysql.createConnection({
//   host: '172.17.0.2',
//   user: 'root',
//   password: 'student',
//   database: 'home_data'
// });
// // mysql host ip sometimes jumps to 172.17.0.3, this will catch that and create a connection
// connection.connect(err => {
//   if (err) {
//     connection = mysql.createConnection( {
//       host: '172.17.0.3',
//       user: 'root',
//       password: 'student',
//       database: 'home_data'
//     });
//     connection.connect(err => {
//       if (err) console.log('double error', err)
//     });
//   }
// });

// would like to split this out into a few different functions
const query = (q, callback) => {
  connection.query(q, callback);
};

const end = () => {
  connection.end()
}

// getting the info for one home
// ideally would refactor this to a promise chain
const getHomeInfo = (id, callback) => {
  connection.query(`SELECT * FROM home_info WHERE home_id = ${id}`, (err, response) => {
    if (err) {
      callback(err);
    } else if (response.length === 0) {
      callback(response);
    } else {
      connection.query(`SELECT * FROM photo_info WHERE home_id = ${id}`, (err, succ) => {
        if (err) {
          callback(err);
        } else {
          const photos = [];
          // iterate through the info returned from photo_info
          succ.forEach((photo) => {
            // pull out the photo urls
            photos.push(photo.file_url);
          });
          // add a photos property with the array of urls to the response object
          response[0].photos = photos;
          callback(null, response);
        }
      });
    }
  });
};

module.exports.getHomeInfo = getHomeInfo;
module.exports.query = query;
module.exports.end = end;
