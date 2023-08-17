/* eslint-disable no-console */

const fs = require("fs");
const path = require("path");
const mockData = require("./mockData");

const { login_data, achievements_data, gallary_data, meetings_data, members_data, news_data, outside_meetings_data, posts_data, presidents_data } = mockData;
console.log(login_data)
const data = JSON.stringify({ login_data, achievements_data, gallary_data, meetings_data, members_data, news_data, outside_meetings_data, posts_data, presidents_data });
const filepath = path.join(__dirname, "db.json");

fs.writeFile(filepath, data, function (err) {
  err ? console.log(err) : console.log("Mock DB created.");
});
