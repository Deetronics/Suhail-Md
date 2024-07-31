const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349032599992";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_27_07_31_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTkxLFxuICAgICAgICA5OSxcbiAgICAgICAgMzgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDg4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEyNixcbiAgICAgICAgNixcbiAgICAgICAgNjksXG4gICAgICAgIDIxNSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNyxcbiAgICAgICAgNyxcbiAgICAgICAgODIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNjUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgOSxcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTg4LFxuICAgICAgICA5MCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMzcsXG4gICAgICAgIDU0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTY3LFxuICAgICAgICA1MixcbiAgICAgICAgNTUsXG4gICAgICAgIDIxMixcbiAgICAgICAgNjUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNzksXG4gICAgICAgIDE0NyxcbiAgICAgICAgOTIsXG4gICAgICAgIDM0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDM0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNjcsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDExMixcbiAgICAgICAgMTQ4LFxuICAgICAgICA3MSxcbiAgICAgICAgMTY3LFxuICAgICAgICA3NyxcbiAgICAgICAgMTczLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTIsXG4gICAgICAgIDc1LFxuICAgICAgICAxOCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjI3LFxuICAgICAgICA2MSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxODIsXG4gICAgICAgIDkwLFxuICAgICAgICA4MixcbiAgICAgICAgMTI1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTQ4LFxuICAgICAgICA3MixcbiAgICAgICAgMTA5LFxuICAgICAgICA1NyxcbiAgICAgICAgODQsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MyxcbiAgICAgICAgNDEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjMyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTc0LFxuICAgICAgICAyNSxcbiAgICAgICAgMTQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDQzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIxNixcbiAgICAgICAgODcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjAzLFxuICAgICAgICA3MSxcbiAgICAgICAgODcsXG4gICAgICAgIDI2LFxuICAgICAgICA4MixcbiAgICAgICAgMjAsXG4gICAgICAgIDExMixcbiAgICAgICAgMTU1LFxuICAgICAgICA3NyxcbiAgICAgICAgNzgsXG4gICAgICAgIDQyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMDksXG4gICAgICAgIDExLFxuICAgICAgICA3OSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTgxLFxuICAgICAgICA0NSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxODksXG4gICAgICAgIDIxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDg0LFxuICAgICAgICA1NSxcbiAgICAgICAgOTcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjI3LFxuICAgICAgICA2OCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTAxLFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTMsXG4gICAgICAgIDE5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjMwLFxuICAgICAgICA3NixcbiAgICAgICAgMTY0LFxuICAgICAgICA2MSxcbiAgICAgICAgODEsXG4gICAgICAgIDMyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDI0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE0NixcbiAgICAgICAgOTQsXG4gICAgICAgIDkyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgODAsXG4gICAgICAgIDk2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDcyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDk2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTE5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEzLFxuICAgICAgICAxNjksXG4gICAgICAgIDE1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDMzLFxuICAgICAgICA5MyxcbiAgICAgICAgMjI4LFxuICAgICAgICA3LFxuICAgICAgICAxNyxcbiAgICAgICAgMTg1LFxuICAgICAgICA5MCxcbiAgICAgICAgMjM2LFxuICAgICAgICA3MyxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMzcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDk5LFxuICAgICAgICA5OSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjIxLFxuICAgICAgICA2NSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgOTEsXG4gICAgICAgIDI5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTczLFxuICAgICAgICAxMTEsXG4gICAgICAgIDU0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDk5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDM4LFxuICAgICAgICA1NyxcbiAgICAgICAgMzIsXG4gICAgICAgIDM1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDg3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTI3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTM2LFxuICAgICAgICA1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTQwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA2NyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJnSmpGS2YrZUJWN2xtMXplRU5Rb3A0NUhwRXphd2IwWVBoVWsyR25zYlNNPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJRWVkwY0NveFN0Uzg5MGZDUllWaWNRXCIsXG4gIFwicGhvbmVJZFwiOiBcImNmMDlhNzk2LTk1MDAtNDQzOC05NDU2LTE3NzU5ZWI2ZjlhN1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4OCxcbiAgICAgIDI0NCxcbiAgICAgIDUwLFxuICAgICAgMTI4LFxuICAgICAgMjEsXG4gICAgICAxMTQsXG4gICAgICAyMzIsXG4gICAgICAyMTUsXG4gICAgICA3MCxcbiAgICAgIDIxMyxcbiAgICAgIDE3NCxcbiAgICAgIDIzMSxcbiAgICAgIDE5MixcbiAgICAgIDIzMyxcbiAgICAgIDI0NCxcbiAgICAgIDIzLFxuICAgICAgMjEyLFxuICAgICAgMTExLFxuICAgICAgMzYsXG4gICAgICAxNTZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzgsXG4gICAgICAyNDgsXG4gICAgICA4NCxcbiAgICAgIDIwNSxcbiAgICAgIDcsXG4gICAgICAxMjgsXG4gICAgICAxMTMsXG4gICAgICAxNjgsXG4gICAgICA3MCxcbiAgICAgIDcyLFxuICAgICAgMjU1LFxuICAgICAgMjQzLFxuICAgICAgMTQ4LFxuICAgICAgNCxcbiAgICAgIDExMCxcbiAgICAgIDQ0LFxuICAgICAgMzcsXG4gICAgICA3LFxuICAgICAgMjgsXG4gICAgICAxOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJBU1o2N0FOTVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTAzMjU5OTk5Mjo4OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkRhbm55IENvbmNlcHRcIixcbiAgICBcImxpZFwiOiBcIjIzMTA2OTQwODc4ODY5Ojg5QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lDZnBKUUVFTlhMcWJVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiN3hWUk9NOUk1czlBVDcwYlJIUDRZbUtXSFdadGVZSExhTHhhcmdGYjcxZz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJlL2RXYllXSVJDRTc2V1YxL0pjZW5vUi9ReXVESE5jaUtJUG1NM1NMN0pIUjRvdXVnZml2MVZMT3dBNXdaSkVuajFFZkN1WUFpcWJjK0FCMEJTdm1Cdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ5SWM4aGhBU3VEblVrSnJ1MkJxSXJKUkNNR1lPRE41WXBjV3RvN0FlZXBtdGtKNDBZcC9EOERkL2JROGpIYXFqN2RzV0FRS3VNeXU4UEV0cnpBeTlpQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDMyNTk5OTkyOjg5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDg4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjI0NDMyMzEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFFKy9cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUUrLy5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
