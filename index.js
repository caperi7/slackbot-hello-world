const { App } = require('@slack/bolt');
const store = require('./store');
require('dotenv').config();

const app = new App({
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  token: process.env.SLACK_BOT_TOKEN
});


app.event('app_home_opened', async ({ event, say }) => {
  // Look up the user from DB
  console.log(event);
  let user = event.user;
  await say(`Hello world, and welcome <@${user}>!`);
});


// Start your app
(async () => {
  await app.start(process.env.PORT || 3000);
  console.log('⚡️ Bolt app is running on ' + (process.env.PORT || 3000));
})();

