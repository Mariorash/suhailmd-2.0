const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254731004250";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "recording" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_05_36_12_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgNzgsXG4gICAgICAgIDQyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNDksXG4gICAgICAgIDQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTc1LFxuICAgICAgICAxMyxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDYsXG4gICAgICAgIDk1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTEwLFxuICAgICAgICAxODYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTczLFxuICAgICAgICAxNDUsXG4gICAgICAgIDc0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDQyLFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2OCxcbiAgICAgICAgMjE1LFxuICAgICAgICA5MCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDExNCxcbiAgICAgICAgNTYsXG4gICAgICAgIDkxLFxuICAgICAgICA0MyxcbiAgICAgICAgMjAsXG4gICAgICAgIDYwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjM5LFxuICAgICAgICA1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDQ2LFxuICAgICAgICA0MCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA2MyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgODMsXG4gICAgICAgIDM3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDE3LFxuICAgICAgICA2OCxcbiAgICAgICAgNjMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA2OSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgODksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIyLFxuICAgICAgICAxODQsXG4gICAgICAgIDExLFxuICAgICAgICAxNjAsXG4gICAgICAgIDI4LFxuICAgICAgICAyMjksXG4gICAgICAgIDUwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDEzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjAyLFxuICAgICAgICA3OSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0NixcbiAgICAgICAgNzQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNyxcbiAgICAgICAgNjcsXG4gICAgICAgIDI3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDksXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTMsXG4gICAgICAgIDg3LFxuICAgICAgICA2NCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjE3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTA2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDUwLFxuICAgICAgICA3MCxcbiAgICAgICAgMjE1LFxuICAgICAgICAzMCxcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIwLFxuICAgICAgICAxMDksXG4gICAgICAgIDE5OCxcbiAgICAgICAgNTgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDcyLFxuICAgICAgICAxNDksXG4gICAgICAgIDE1LFxuICAgICAgICA2MixcbiAgICAgICAgMTc1LFxuICAgICAgICA0NixcbiAgICAgICAgMTAxLFxuICAgICAgICA1NCxcbiAgICAgICAgODYsXG4gICAgICAgIDU4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNjYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxODEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNjgsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNSxcbiAgICAgICAgOCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDEzNixcbiAgICAgICAgNjYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMzAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjEwLFxuICAgICAgICA1MCxcbiAgICAgICAgMTY0LFxuICAgICAgICA1NSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMyxcbiAgICAgICAgMzMsXG4gICAgICAgIDMwLFxuICAgICAgICA1MyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTE5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMzgsXG4gICAgICAgIDgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTk3LFxuICAgICAgICA0NCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgOTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgODNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyNixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDU3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDg1LFxuICAgICAgICA3MixcbiAgICAgICAgNDYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNzMsXG4gICAgICAgIDYxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxODYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTQyLFxuICAgICAgICA2MCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDI5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjA0LFxuICAgICAgICA1OSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMzcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMzYsXG4gICAgICAgIDk4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNjcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjA0LFxuICAgICAgICA2MSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDIxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE4MixcbiAgICAgICAgODEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjAzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDQyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTk4LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkNScWRYRHRGUWIrWHM5eC9rN1dwYlpyTzlWMDFPV3RORVIwRkhyb3QwcUU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU0NzMxMDA0MjUwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzMkZCMkFCMzY4OTlFMEJBQUYxMDUwQTgzRkI0RkRCNFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzQwNjgxODJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTQ3MzEwMDQyNTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjI1MTYyODFFRDFBQkI0QjdFNkI4RjlEN0Y1OUZCMENBXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczNDA2ODE4M1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ3VThwdkk3R1FUeWVEbDM2OHhkcWt3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjNlMDEzYzE5LWFiYTktNGUzNS1hYjU5LTdjYTBiZjFjM2M3YlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3MCxcbiAgICAgIDQxLFxuICAgICAgNTQsXG4gICAgICA1MyxcbiAgICAgIDE4MyxcbiAgICAgIDUzLFxuICAgICAgNjYsXG4gICAgICA3NyxcbiAgICAgIDI0NCxcbiAgICAgIDE1MSxcbiAgICAgIDE1MixcbiAgICAgIDIwNCxcbiAgICAgIDE0OSxcbiAgICAgIDIyNyxcbiAgICAgIDExNixcbiAgICAgIDE3OCxcbiAgICAgIDEyMixcbiAgICAgIDEzNixcbiAgICAgIDE2MCxcbiAgICAgIDIzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI4LFxuICAgICAgMjIwLFxuICAgICAgMjM5LFxuICAgICAgMTAyLFxuICAgICAgMTQsXG4gICAgICAxNzMsXG4gICAgICAxMDUsXG4gICAgICA2NyxcbiAgICAgIDYxLFxuICAgICAgNDgsXG4gICAgICAxMjIsXG4gICAgICAxMDQsXG4gICAgICAzLFxuICAgICAgNTUsXG4gICAgICAxMTIsXG4gICAgICAxODIsXG4gICAgICA3OCxcbiAgICAgIDMxLFxuICAgICAgMjAzLFxuICAgICAgMTU1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkNINU1TOTNWXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3MzEwMDQyNTA6MjBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJIbW1cIixcbiAgICBcImxpZFwiOiBcIjEzMzM4MDcxMjcyMjQ3NzoyMEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNZW50SndCRU0yUDc3b0dHQW9nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjAybnNsazRhWmh6REk2UDl0TDFieEFMNjJFODc4dDVCOURVaXQ2b20yQ1E9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiOUZsMFB6eExBUFQwelJmWFlyRGJPbk1JTVMvR1MzVm9kZzhkRWdtaWFaRjJrbldOaUxrbHVVSFBsL3g5M1ROVEJWam8xYlNiNkprQ0wrRlZNOVZLRGc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiYVhMOGRCejBsNjYrdW1GK1RXRG94OGNDTzBqVmpUeHdYdFBzVnYzS2l0VDRiR291eEpJS2ZWbkJCOThkOEt4SXVNSVBIaDUvVzduQkpxZnpiOEt5REE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0NzMxMDA0MjUwOjIwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMzZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNDA2ODE3NyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU9vV1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBT29XLmpzb24iOiAie1wia2V5RGF0YVwiOlwia3ZYa21jQytwM2Q2OXVWR0lLM0RMeHdZSHdQVkh0MWdBRlhBa3l5MU1jdz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjozMjgwMTI3NDMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Mint 😔",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "ZERO_TWO"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
