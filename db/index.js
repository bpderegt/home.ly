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

const seedQuery = (query) => {
  connection.query(query);
}

// getting the info for one home
// ideally would refactor this to a promise chain
const getHomeInfo = (id, callback) => {
  connection.query(`SELECT * FROM home_info WHERE home_id = ${id}`, (err, homes) => {
    if (err) {
      callback(err);
    } else if (homes.length === 0) {
      callback(homes);
    } else {
      connection.query(`SELECT * FROM photo_info WHERE home_id = ${id}`, (err, photoUrls) => {
        if (err) {
          callback(err);
        } else {
          const photos = [];
          // iterate through the info returned from photo_info
          photoUrls.forEach((photo) => {
            // pull out the photo urls
            photos.push(photo.file_url);
          });
          // add a photos property with the array of urls to the homes object
          homes[0].photos = photos;
          callback(null, homes);
        }
      });
    }
  });
};

const photoUrl = (callback) => {
  connection.query(`select home_id, file_url from photo_info;`, (err, info) => {
    if (err) {
      callback(err)
    } else {
      callback(null, info);
    }
  })
}

module.exports = {
  photoUrl: photoUrl,
  seedQuery: seedQuery,
  getHomeInfo: getHomeInfo
}
