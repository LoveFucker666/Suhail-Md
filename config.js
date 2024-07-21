const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="itscato666@gmail.com"
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


global.devs = "923064896943" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923064896943";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) |.| '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "ture";  // Make it "false" for disable WELCOME 

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
global.read_status = process.env.AUTO_READ_STATUS || "ture"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923064896943,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_37_07_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDEwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTgzLFxuICAgICAgICA4MixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMyxcbiAgICAgICAgNDUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDY1LFxuICAgICAgICAzMCxcbiAgICAgICAgMTQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTc3LFxuICAgICAgICA3MyxcbiAgICAgICAgMTExLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjMsXG4gICAgICAgIDQsXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM1LFxuICAgICAgICAyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDMzLFxuICAgICAgICAxMTksXG4gICAgICAgIDc4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEzMixcbiAgICAgICAgNjMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjUsXG4gICAgICAgIDg0LFxuICAgICAgICA5LFxuICAgICAgICA3NSxcbiAgICAgICAgMixcbiAgICAgICAgMTc2LFxuICAgICAgICA5MixcbiAgICAgICAgNTYsXG4gICAgICAgIDE2LFxuICAgICAgICA2NSxcbiAgICAgICAgMCxcbiAgICAgICAgMzcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgODEsXG4gICAgICAgIDY4LFxuICAgICAgICAxODksXG4gICAgICAgIDE5MixcbiAgICAgICAgNyxcbiAgICAgICAgMjMwLFxuICAgICAgICA4NSxcbiAgICAgICAgMjQzLFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjE5LFxuICAgICAgICAxNzksXG4gICAgICAgIDkwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMzEsXG4gICAgICAgIDIwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTU4LFxuICAgICAgICAzOSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNjksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTgwLFxuICAgICAgICA4MSxcbiAgICAgICAgNzcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxOSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMDksXG4gICAgICAgIDQ4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDM2LFxuICAgICAgICA4NyxcbiAgICAgICAgMjEzLFxuICAgICAgICA5LFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ5LFxuICAgICAgICA3NSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDMxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNzIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgOSxcbiAgICAgICAgMjUsXG4gICAgICAgIDY1LFxuICAgICAgICAxODQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMzksXG4gICAgICAgIDE0NyxcbiAgICAgICAgODUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjQzLFxuICAgICAgICA1MSxcbiAgICAgICAgMTc4LFxuICAgICAgICA5OSxcbiAgICAgICAgNjMsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTA3LFxuICAgICAgICA3NCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyOCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjksXG4gICAgICAgIDQ1LFxuICAgICAgICA5MCxcbiAgICAgICAgMzYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTAxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDI5LFxuICAgICAgICAxODcsXG4gICAgICAgIDgxLFxuICAgICAgICAyNDksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjE3LFxuICAgICAgICA0NyxcbiAgICAgICAgNzYsXG4gICAgICAgIDAsXG4gICAgICAgIDM3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTcxLFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDYsXG4gICAgICAgIDc4LFxuICAgICAgICA1NyxcbiAgICAgICAgNTYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyLFxuICAgICAgICAyMjksXG4gICAgICAgIDQ2LFxuICAgICAgICA5MixcbiAgICAgICAgMzEsXG4gICAgICAgIDgsXG4gICAgICAgIDIxLFxuICAgICAgICAyNDksXG4gICAgICAgIDE0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDMzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgOTQsXG4gICAgICAgIDQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjI3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMzcsXG4gICAgICAgIDg2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDYyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA3MFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxMTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NSxcbiAgICAgICAgNjAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDkyLFxuICAgICAgICAzMixcbiAgICAgICAgODksXG4gICAgICAgIDE3MCxcbiAgICAgICAgODIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjAsXG4gICAgICAgIDQxLFxuICAgICAgICA3MixcbiAgICAgICAgNTEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDgyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDQzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjA5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgOTcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjI4LFxuICAgICAgICA0OSxcbiAgICAgICAgMTY0LFxuICAgICAgICA4MCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDEwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDM4LFxuICAgICAgICAyMzksXG4gICAgICAgIDU5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgOTAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxODUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTkxLFxuICAgICAgICA0NyxcbiAgICAgICAgMzAsXG4gICAgICAgIDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDExMSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJacWNKc21mYi9BQTY2M2ZCYlFUQ29NTkFZbDBOQXhBZWpVNDNIdm1oSjlVPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJoR0YxRmljNVN6MmlIWi1kbkFWSmxBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjU5ZjQwMDFmLTYyYjQtNDI2NC04Zjc4LTM1YjEwNjM4NWI3NVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyOCxcbiAgICAgIDE1NyxcbiAgICAgIDEzLFxuICAgICAgMjIwLFxuICAgICAgNzEsXG4gICAgICAyMzIsXG4gICAgICAxNDUsXG4gICAgICA5NCxcbiAgICAgIDEyMyxcbiAgICAgIDQ3LFxuICAgICAgMzYsXG4gICAgICA3NSxcbiAgICAgIDMxLFxuICAgICAgMjE3LFxuICAgICAgMTE5LFxuICAgICAgODQsXG4gICAgICAyMTksXG4gICAgICAxNjgsXG4gICAgICAxMzQsXG4gICAgICA3NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4MCxcbiAgICAgIDk4LFxuICAgICAgMTMyLFxuICAgICAgMTE0LFxuICAgICAgNDksXG4gICAgICAyMTgsXG4gICAgICAyMzEsXG4gICAgICAxLFxuICAgICAgMjE5LFxuICAgICAgMjA3LFxuICAgICAgMTIwLFxuICAgICAgNjksXG4gICAgICAyNDIsXG4gICAgICAxMDEsXG4gICAgICA1OCxcbiAgICAgIDIyMyxcbiAgICAgIDIyLFxuICAgICAgNjIsXG4gICAgICAyNyxcbiAgICAgIDE1MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJIQ1lOMjdZMlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMDY0ODk2OTQzOjY3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi4oiGTG92ZSBGdWNrZXIgQXlhYW7iiIZcXG5cXG5BXFxuXFxuS1xcblxcblVcXG5cXG5NXFxuXFxuQVxcblxcbuKIhkV2aWwgU291bOKIhlwiLFxuICAgIFwibGlkXCI6IFwiMTkwNjYyNjkxNTU3NTYzOjY3QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01QUGhWOFEyNUh6dEFZWUFTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiQktabXdwTmZZZGV1OGdpeXpLVW85aUl1cUViOEc5bmFLZ3g1eTF1dUxWdz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJEbVhCa2NqQlMrbFU1cDhDV1JSZityR3E4dDJwZDFpNTJTWk1FVDg4Rk5JWXEwcFJLMDVyejFiVS9ydm1jcGdLcXVBRGxYSTBEUmc4eitwOFZUdmNBdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJKb0ZCcmNoRGYxRUNIZzRkc3pQTkRnRmY1YUhXcjRjckNrWkdvYXZBUUphalJBM0xrVXVCNlp4U3dpWkJDRlVVSGp5QkNMU204QnFLYzZzOHF2SmlBdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMwNjQ4OTY5NDM6NjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgOTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTU1MTA3MSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQVBFVFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUEVULmpzb24iOiAie1wia2V5RGF0YVwiOlwiWDNaV1ZNZ1BSWCsxSk9ML012WWFKMnBjeEpGcGpCR09nVzlBNGJhN1psaz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxOTkzMjE1MzksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTU1MTA3ODUyNlwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "arooj",
  packname: process.env.PACK_NAME || "akuma",
  botname : process.env.BOT_NAME  || "love-fucker-ayan-hack",
  ownername:process.env.OWNER_NAME|| "ayan",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "love-fucker-ayan",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "Akuma"  ).toUpperCase(),



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
