const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false"  
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md-3";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website =process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Made With LOVE!" 


global.devs = "" // Developer Contacts
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" //"https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
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

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_17_31_03_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTY0LFxuICAgICAgICAzOCxcbiAgICAgICAgNTIsXG4gICAgICAgIDkzLFxuICAgICAgICA2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTI5LFxuICAgICAgICA0NixcbiAgICAgICAgMTU2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTk5LFxuICAgICAgICA4NixcbiAgICAgICAgMTkwLFxuICAgICAgICAyNCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDQxLFxuICAgICAgICA3MSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDM1LFxuICAgICAgICAxODcsXG4gICAgICAgIDg5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTY3LFxuICAgICAgICA4NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMzksXG4gICAgICAgIDExNSxcbiAgICAgICAgODcsXG4gICAgICAgIDY5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTY5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNDAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDEzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDM2LFxuICAgICAgICAxODUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNSxcbiAgICAgICAgMTM2LFxuICAgICAgICA0NixcbiAgICAgICAgNzksXG4gICAgICAgIDE0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMzJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICAxMCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNTksXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTE0LFxuICAgICAgICA3NSxcbiAgICAgICAgOTgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMyxcbiAgICAgICAgMTI4LFxuICAgICAgICA0NyxcbiAgICAgICAgMTMwLFxuICAgICAgICA4NSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNDksXG4gICAgICAgIDk5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDcyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDExMyxcbiAgICAgICAgNTUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgODgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTksXG4gICAgICAgIDI5LFxuICAgICAgICA5NixcbiAgICAgICAgMTEsXG4gICAgICAgIDIyLFxuICAgICAgICAwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDMwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMDksXG4gICAgICAgIDE2MSxcbiAgICAgICAgNixcbiAgICAgICAgNDksXG4gICAgICAgIDM1LFxuICAgICAgICA0MixcbiAgICAgICAgMjMwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAzOSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTA5LFxuICAgICAgICA2NSxcbiAgICAgICAgOTksXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDEzLFxuICAgICAgICA1MSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxODgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjIwLFxuICAgICAgICA5MixcbiAgICAgICAgMjA4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjE1LFxuICAgICAgICA0OSxcbiAgICAgICAgOTEsXG4gICAgICAgIDY2LFxuICAgICAgICA3NyxcbiAgICAgICAgMTYzLFxuICAgICAgICAzOSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMzcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTU4LFxuICAgICAgICA1NSxcbiAgICAgICAgOTUsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA3MyxcbiAgICAgICAgMTkxLFxuICAgICAgICAyOCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDUxLFxuICAgICAgICA3MixcbiAgICAgICAgNjMsXG4gICAgICAgIDI3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTkyLFxuICAgICAgICA5MyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgODcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTkzLFxuICAgICAgICAxMDksXG4gICAgICAgIDEyMCxcbiAgICAgICAgNDcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTU4LFxuICAgICAgICA0MCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDExOFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDMwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDExMixcbiAgICAgICAgMTIyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDU4LFxuICAgICAgICAxODEsXG4gICAgICAgIDg1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNDMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjIxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjA1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDY3LFxuICAgICAgICA4OSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDkwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjUyLFxuICAgICAgICAzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNSxcbiAgICAgICAgNjMsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTkwLFxuICAgICAgICAyMDksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTAzLFxuICAgICAgICA0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDExMyxcbiAgICAgICAgODksXG4gICAgICAgIDEyMSxcbiAgICAgICAgNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTkwLFxuICBcImFkdlNlY3JldEtleVwiOiBcIldDdHZlREcwalpaZXlEek5zcWhxQVZZK3NhbEU3dHRiaXlwYzM3bWw2Z3c9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIm1hWlI3Zm9mVG5lcmRvTkNzU3ExRmdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMmI5YjNjMGItNmM4MS00YWQ5LWJlOWItNzY1ZGUzZDRmNDgyXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDYyLFxuICAgICAgNTcsXG4gICAgICA0OCxcbiAgICAgIDIxNCxcbiAgICAgIDI1NCxcbiAgICAgIDUsXG4gICAgICAyMzUsXG4gICAgICAxMyxcbiAgICAgIDkwLFxuICAgICAgMjA2LFxuICAgICAgMTA4LFxuICAgICAgMjI5LFxuICAgICAgNjIsXG4gICAgICAyNTEsXG4gICAgICAxODEsXG4gICAgICAzNixcbiAgICAgIDEyMCxcbiAgICAgIDExNixcbiAgICAgIDIxLFxuICAgICAgMTc3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDM4LFxuICAgICAgMjMyLFxuICAgICAgNzQsXG4gICAgICAxMDQsXG4gICAgICA2NyxcbiAgICAgIDExLFxuICAgICAgMTI4LFxuICAgICAgMTk3LFxuICAgICAgMTcwLFxuICAgICAgNjgsXG4gICAgICA5MixcbiAgICAgIDE1MixcbiAgICAgIDEyOCxcbiAgICAgIDEwNixcbiAgICAgIDk2LFxuICAgICAgMTIyLFxuICAgICAgOTQsXG4gICAgICAxNTAsXG4gICAgICAxNTksXG4gICAgICAxMjJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUkhLWk5LRzlcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwNjI1NTI4NDg6MTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEzMjg1NjI5MDQ5Njc0MjoxMkBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJDaGlrZVwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lXd3BiUU9FUEtzekw0R0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiSnV5eFN5aEdRYnNDRDlIU3VQS3FkRUc0OXRaTjFMNlF1NmthbFh1UFhnST1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJuN0swbjlhY0xzSjZ4K1A0M1ljSFRHWUllZ0xCM0c0azA1ejFRQ29VSFBjRFdZZDljZ3RDazFkTkxOWGRaN3loMzE1QXgvTVNIZnQ0ZitMcTNNQ0lDUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJoR0R1UElqSkVrdWJmdEpZblRLZDM2cDVYQ25zOFBoYS8vZWl0UytlRjNpeElOdGhiRmtPYU1uQUxMZklwSVVIakdqa1ViQ2NVQ0ZnQ0NrdytZb0lDUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDYyNTUyODQ4OjEyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImlwaG9uZVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzQxODg3MDk1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSGtYXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFIa1guanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI2bnlsY3ZKemc0Q1hyNnVXVVNSNjkwWGg5SGVwWXcrL2VML1I5UDU2S3ZZPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjM4Njc3NjA2NDUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTc0MTg4NzA5NDkxOVwifSIKfQ=="  // PUT your SESSION_ID


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "MANISH",
  ownername:process.env.OWNER_NAME|| "Manish:Shy<3",


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
