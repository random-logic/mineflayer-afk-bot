# mineflayer-afk-bot

**Functionality**
1) The minecraft bot will afk in any minecraft server. It is useful for farms that produce automatically.
2) If anyone types sleep in the chat, the bot will disconnect the server for a certain amount of time, and then reconnect.
3) It will also eat any food that it has to prevent starvation. Make sure it doesn't hold any food that shouldn't be eaten.
4) It will disconnect if its health is too low. Although the afk bot should be placed in a safe location, it is a nice safety measure.

**Requirements**
Nodejs is required in order to run this bot. The latest version of Nodejs can be downloaded [here](https://nodejs.org/en/download/). For anyone who is not familiar with Nodejs, it is recommmended to download it using the LTS installers and keep the installation settings on default.

**First time setup**
1. Clone or download this project.
2. Navigate to the project folder.
3. Open windows command prompt, or any command line tool that can be used with nodejs.
4. Type the following command in the command line tool: npm install
5. Open the config.json file. Please fill in the following fields:
   -SLEEP_DURATION: The duration the bot should disconnect for (in milliseconds).
   -HOST: The name of the host (for example, an ip address).
   -PORT: The port number.
   -USERNAME: The username of the account, or the name of the bot.
   -PASSWORD: The password of the account, or null if it is not applicable.
    
**Running Minecraft Bot**
1) Open windows command prompt, or any command line tool that can be used with nodejs.
2) Type the following command in the command line tool: npm run
3) To quit the minecraft bot, use the key combination control + c.
