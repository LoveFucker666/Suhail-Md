const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Bahawalpur,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Nothing is permanent " 


global.devs = "923167441892" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "92167441892";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923167441892,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SUHAIL_19_40_08_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjEsXG4gICAgICAgIDY5LFxuICAgICAgICA0NSxcbiAgICAgICAgODMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA3MCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTMyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDY1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTUzLFxuICAgICAgICA4OCxcbiAgICAgICAgMTgsXG4gICAgICAgIDk0LFxuICAgICAgICAyNCxcbiAgICAgICAgMTA4LFxuICAgICAgICA0NyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxODIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMzAsXG4gICAgICAgIDYyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDk5LFxuICAgICAgICAxNDksXG4gICAgICAgIDMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjE0LFxuICAgICAgICA1NixcbiAgICAgICAgMTg1LFxuICAgICAgICA5MSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMTksXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjIyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDgxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNTMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDY3LFxuICAgICAgICAxNTksXG4gICAgICAgIDQ5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDgyLFxuICAgICAgICA4OSxcbiAgICAgICAgMzAsXG4gICAgICAgIDc0LFxuICAgICAgICA4NCxcbiAgICAgICAgMjE0LFxuICAgICAgICA1OSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTUyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE3LFxuICAgICAgICAxOTksXG4gICAgICAgIDI1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI3LFxuICAgICAgICAxMjksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMTksXG4gICAgICAgIDI0NyxcbiAgICAgICAgNDUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDQyLFxuICAgICAgICA1MCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNTYsXG4gICAgICAgIDkyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDg5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDU5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgODAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTc1LFxuICAgICAgICA1MyxcbiAgICAgICAgMzlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICAyNSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxODcsXG4gICAgICAgIDg2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNCxcbiAgICAgICAgMTQwLFxuICAgICAgICA1NixcbiAgICAgICAgMjE5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgODYsXG4gICAgICAgIDIxLFxuICAgICAgICAwLFxuICAgICAgICAxODMsXG4gICAgICAgIDE1LFxuICAgICAgICA4MyxcbiAgICAgICAgNDYsXG4gICAgICAgIDc1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTMxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjIsXG4gICAgICAgIDc1LFxuICAgICAgICAzMCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA5NCxcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTE4LFxuICAgICAgICAzNixcbiAgICAgICAgMjMzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDEwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjQ2LFxuICAgICAgICA5MCxcbiAgICAgICAgMjAwLFxuICAgICAgICA3NyxcbiAgICAgICAgNDAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNTIsXG4gICAgICAgIDUxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgODcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjMyLFxuICAgICAgICA5NCxcbiAgICAgICAgNDQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAzOCxcbiAgICAgICAgMjMzLFxuICAgICAgICA5NixcbiAgICAgICAgMTY3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDMyLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDY2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDEwMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMyxcbiAgICAgICAgMjExLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTM5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMjksXG4gICAgICAgIDExNCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxOCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE0NixcbiAgICAgICAgNixcbiAgICAgICAgMzIsXG4gICAgICAgIDgzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjExLFxuICAgICAgICAyMDIsXG4gICAgICAgIDExMyxcbiAgICAgICAgNDIsXG4gICAgICAgIDYyLFxuICAgICAgICA4OSxcbiAgICAgICAgNzYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgOTksXG4gICAgICAgIDczLFxuICAgICAgICA1NSxcbiAgICAgICAgOTksXG4gICAgICAgIDYxLFxuICAgICAgICA0MixcbiAgICAgICAgMTU3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDMyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTY2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNTIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTE1LFxuICAgICAgICA1MSxcbiAgICAgICAgOTEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNDYsXG4gICAgICAgIDUzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNDMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDg3LFxuICAgICAgICA3NyxcbiAgICAgICAgMTQzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMDksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiSWdqUll3dWRrVXVzTG5sRVNORU1DQStHY3ZDZGJDY3E5ak1YaE5JSFdpTT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiRm1pTjlDUnhTVXFxeWRJQmFSWE9NQVwiLFxuICBcInBob25lSWRcIjogXCIwMDA2Mjk4Zi1lMjkzLTQyNDQtYWVkYS03MzNmMjdhYzdkN2VcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTU3LFxuICAgICAgNjIsXG4gICAgICAxMyxcbiAgICAgIDUsXG4gICAgICAxNTcsXG4gICAgICAxNDYsXG4gICAgICAxMDMsXG4gICAgICAxMTksXG4gICAgICAxMDIsXG4gICAgICAwLFxuICAgICAgMjMwLFxuICAgICAgMjI4LFxuICAgICAgMjQ0LFxuICAgICAgMTczLFxuICAgICAgMjE4LFxuICAgICAgMjAwLFxuICAgICAgMTksXG4gICAgICAxMDQsXG4gICAgICA3MSxcbiAgICAgIDI1MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTgxLFxuICAgICAgNDcsXG4gICAgICAxNSxcbiAgICAgIDE1OSxcbiAgICAgIDEyMixcbiAgICAgIDg0LFxuICAgICAgOTcsXG4gICAgICAyMzUsXG4gICAgICAxODUsXG4gICAgICAxMDEsXG4gICAgICAyMjEsXG4gICAgICA3MSxcbiAgICAgIDQ1LFxuICAgICAgNDgsXG4gICAgICAyNCxcbiAgICAgIDEzNyxcbiAgICAgIDg2LFxuICAgICAgMjUxLFxuICAgICAgMTM0LFxuICAgICAgODRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPdnptYVlERUx6SnI3VUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjdPYmQ0ZUZUTHowZVBzKzJRdlhsd0g2c1hKN0l2MEJ6R3lTSGRRNjY2eXc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwicWlNcit6MXdEOWtoRmI5VHl4eWRMUXpGbExTY2YyYU9ZVXRPWlFkNWZFTGdjT1BzMDM4SEZiVTBKOHRzVkdtcnY5ZXorSjNxWk5RNUJNS1JiZE5FQ1E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiaVJnbTZCb05uRTUvUmVoaVFQTExTd1NuUGxKN05nS2JmRkp4bThSQVZMeTFna2JkN0ZyTHREdVZ4RUNnaG5iWElZbTZJYlhNa0thbmNzVTYvUndiaHc9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMwNjQ4OTY5NDM6NzVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLiiIZMb1ZlIEZ1Y2tlciDiiIZ5YWFu4oiGXFxuXFxuQVxcblxcbmtcXG5cXG5VXFxuXFxubVxcblxcbkFcXG5cXG7iiIZFdmlMIFNvdWziiIZcIixcbiAgICBcImxpZFwiOiBcIjE5MDY2MjY5MTU1NzU2Mzo3NUBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzA2NDg5Njk0Mzo3NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgNDRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjU0MTI0N1xufSIKfQ== ||  ""  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 Nothing is permanent 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "🏳️‍🌈",
  packname: process.env.PACK_NAME || "Akuma",
  botname : process.env.BOT_NAME  || "Ayan-Mode",
  ownername:process.env.OWNER_NAME|| "It'x Ayaan",


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
