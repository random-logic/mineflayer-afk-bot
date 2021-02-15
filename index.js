//#region dependencies
const mineflayer = require('mineflayer')
const autoeat = require("mineflayer-auto-eat")
//#endregion

//#region bot
function createBot(CONFIG) {
  const bot = mineflayer.createBot({
    host: CONFIG.HOST,
    port: CONFIG.PORT,
    username: CONFIG.USERNAME,
    password: CONFIG.PASSWORD
  })

  // Load the plugin
  bot.loadPlugin(autoeat)

  function manageHealth() {
    if (bot.food === 20) bot.autoEat.disable()
    // Disable the plugin if the bot is at 20 food points
    else bot.autoEat.enable() // Else enable the plugin again
  
    if (bot.health < 8) {
      console.log('Low health, quitting bot')
      process.exit(0)
    }
  
    if (bot.health == 20)
      bot.autoEat.options = {
        priority: "foodPoints",
        startAt: 14,
        bannedFood: [],
      }
    else
      bot.autoEat.options = {
        priority: "foodPoints",
        startAt: 19,
        bannedFood: [],
      }
  }

  bot.on('spawn', manageHealth)
  
  bot.on("health", manageHealth)
  
  bot.on('chat', (username, message) => {
    if (username != bot.entity.username && message.toLowerCase().includes('sleep')) {
      bot.chat(`Will reconnect in ${CONFIG.SLEEP_DURATION} milliseconds`)
      bot.quit()
      setTimeout(() => {createBot(CONFIG)}, CONFIG.SLEEP_DURATION)
    }
  })
}
//#endregion

//#region start
require('fs').readFile("config.json", (err, content) => {
  if (err)
    throw err
  else
    createBot(JSON.parse(content))
})
//#endregion