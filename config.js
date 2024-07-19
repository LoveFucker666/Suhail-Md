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
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; /arooj.hacker/ SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Fuck-you" 


global.devs = "923064896943" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923064896943";




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
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923167441892";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923167441892";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923064896943,923167441892";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_03_56_07_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjEwLFxuICAgICAgICA2NSxcbiAgICAgICAgMTQyLFxuICAgICAgICA2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIxMixcbiAgICAgICAgNjUsXG4gICAgICAgIDE2LFxuICAgICAgICAxMSxcbiAgICAgICAgMTIzLFxuICAgICAgICA5MSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDM3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDMwLFxuICAgICAgICAxMTksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTk4LFxuICAgICAgICA0NixcbiAgICAgICAgMjUsXG4gICAgICAgIDk5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDc1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDQyLFxuICAgICAgICAxNCxcbiAgICAgICAgOCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjYsXG4gICAgICAgIDkwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjQ4LFxuICAgICAgICA2OSxcbiAgICAgICAgNDAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjUzLFxuICAgICAgICA3NixcbiAgICAgICAgMjEsXG4gICAgICAgIDMyLFxuICAgICAgICA3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA3NCxcbiAgICAgICAgNTUsXG4gICAgICAgIDI3LFxuICAgICAgICAxNyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxODMsXG4gICAgICAgIDg2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMyxcbiAgICAgICAgN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjIwLFxuICAgICAgICA2MCxcbiAgICAgICAgMjI2LFxuICAgICAgICA0NCxcbiAgICAgICAgODQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTE3LFxuICAgICAgICA4NyxcbiAgICAgICAgNzcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTQwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjE0LFxuICAgICAgICA3NSxcbiAgICAgICAgMTYsXG4gICAgICAgIDEsXG4gICAgICAgIDgyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTIwLFxuICAgICAgICA4LFxuICAgICAgICA5OCxcbiAgICAgICAgMTY4LFxuICAgICAgICA5MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNDYsXG4gICAgICAgIDczLFxuICAgICAgICA3MixcbiAgICAgICAgMTkzLFxuICAgICAgICAyNDksXG4gICAgICAgIDg0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgOTUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNTUsXG4gICAgICAgIDkyLFxuICAgICAgICAzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDUxLFxuICAgICAgICAxNDksXG4gICAgICAgIDg1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAzMCxcbiAgICAgICAgMTIxLFxuICAgICAgICA0OCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDIwLFxuICAgICAgICA4NixcbiAgICAgICAgODUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNSxcbiAgICAgICAgMTExLFxuICAgICAgICAxNDcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMzQsXG4gICAgICAgIDg5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNDksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMzIsXG4gICAgICAgIDksXG4gICAgICAgIDExOCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgOCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIxLFxuICAgICAgICA1MixcbiAgICAgICAgNzgsXG4gICAgICAgIDIzLFxuICAgICAgICA2OCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyOSxcbiAgICAgICAgMTYzLFxuICAgICAgICA5MSxcbiAgICAgICAgNDMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDI1MixcbiAgICAgICAgNjUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTI3LFxuICAgICAgICA1NixcbiAgICAgICAgMTQzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDg1LFxuICAgICAgICA5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgOTlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNDlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTUsXG4gICAgICAgIDg5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxODcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMzYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNjksXG4gICAgICAgIDQ5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNDQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNDUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMixcbiAgICAgICAgMTI3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDY5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMzUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTMwLFxuICAgICAgICA0NCxcbiAgICAgICAgODksXG4gICAgICAgIDEyOSxcbiAgICAgICAgNTcsXG4gICAgICAgIDYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDI2LFxuICAgICAgICA5MCxcbiAgICAgICAgODAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTAsXG4gICAgICAgIDEzLFxuICAgICAgICA4NyxcbiAgICAgICAgNzgsXG4gICAgICAgIDk3LFxuICAgICAgICAyMDksXG4gICAgICAgIDk5LFxuICAgICAgICA5MCxcbiAgICAgICAgNzUsXG4gICAgICAgIDcyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTI2LFxuICAgICAgICA3NSxcbiAgICAgICAgOTgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgODYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTU0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjdVUXIvSDRrVGhkcEQrYUNhSlM3bWRCdUt6WmdsWnJJRVFhSWRaNnlRNGM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInJPR0szbnpPUUY2N2RVYTV4akszdndcIixcbiAgXCJwaG9uZUlkXCI6IFwiMDQ1YTA0ODEtNGNjNS00YTlmLTk1MTAtOTczOTYyMDIyZTZiXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3NyxcbiAgICAgIDYsXG4gICAgICAxNzksXG4gICAgICAyMzIsXG4gICAgICA2LFxuICAgICAgMTg3LFxuICAgICAgMjU0LFxuICAgICAgMTkyLFxuICAgICAgMTUzLFxuICAgICAgOTksXG4gICAgICAxOSxcbiAgICAgIDEyMCxcbiAgICAgIDUxLFxuICAgICAgNzcsXG4gICAgICAxNixcbiAgICAgIDE2MCxcbiAgICAgIDI1MixcbiAgICAgIDIxMSxcbiAgICAgIDEyNSxcbiAgICAgIDIxOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDksXG4gICAgICAxMzEsXG4gICAgICAxNDgsXG4gICAgICAxMzYsXG4gICAgICA0MSxcbiAgICAgIDE3OCxcbiAgICAgIDU2LFxuICAgICAgMjMyLFxuICAgICAgNjEsXG4gICAgICAyMzgsXG4gICAgICAxNTcsXG4gICAgICAyMTYsXG4gICAgICAxODMsXG4gICAgICAyMTEsXG4gICAgICAyMDQsXG4gICAgICAxNTksXG4gICAgICAxMzEsXG4gICAgICAxMTUsXG4gICAgICAxOTcsXG4gICAgICAzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjVZOTNWOTFDXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMwNjQ4OTY5NDM6NTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLiiIZMb3ZlIEZ1Y2tlciBBeWFhbuKIhlxcblxcbkFcXG5cXG5LXFxuXFxuVVxcblxcbk1cXG5cXG5BXFxuXFxu4oiGRXZpbCBTb3Vs4oiGXCIsXG4gICAgXCJsaWRcIjogXCIxOTA2NjI2OTE1NTc1NjM6NTRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTGJQaFY4UTRNZm50QVlZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJCS1ptd3BOZllkZXU4Z2l5ektVbzlpSXVxRWI4RzluYUtneDV5MXV1TFZ3PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIm9xd3JjZTRHeVBKNFhLTEJlNk9wd1haMDQ3MEVQd0VPc0hMTE5NaWU5bVQyY3dSK0UvLzlZSWVQZjU3Nnd5eGNjaytNalp4UTNyY2tvaHZJMEhTWkF3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIk9iRVg0Ri85dTJnSlg5QlRoVktzYnBUSGNPdEEyV2xMRW43QzdsMlVZRmc3Ty8wZnp6a1FEU3ZMV2NVRHRIcDBadkMzdVg5U01tN3BscElmTk9ia0JnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzA2NDg5Njk0Mzo1NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA5MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxMzYxMzc5XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Akuma",
  packname: process.env.PACK_NAME || "Ayan",
  botname : process.env.BOT_NAME  || "Ayan-Akuka",
  ownername:process.env.OWNER_NAME|| "∆Love🌚Fucker🥵🔥",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "lovefucker",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "Ayan"  ).toUpperCase(),



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
  //read_status: process.env.AUTO_READ_STATUS || "Ture",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
