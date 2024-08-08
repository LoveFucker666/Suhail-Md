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
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923006734171,923064896943";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "923064896943";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923064896943,923006734171";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_37_08_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjEyLFxuICAgICAgICA2OCxcbiAgICAgICAgNzEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDM2LFxuICAgICAgICA1MixcbiAgICAgICAgMTEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMyxcbiAgICAgICAgMTc4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNzgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTkwLFxuICAgICAgICAyNSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMzksXG4gICAgICAgIDIzOSxcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNTcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNDMsXG4gICAgICAgIDIyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjA4LFxuICAgICAgICAxNzksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjE3LFxuICAgICAgICA2NCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNjQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMzAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTQzLFxuICAgICAgICA2OSxcbiAgICAgICAgNDUsXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDU2LFxuICAgICAgICA0MixcbiAgICAgICAgMjQ4LFxuICAgICAgICA4NixcbiAgICAgICAgMjAyLFxuICAgICAgICAyNixcbiAgICAgICAgNDgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNDEsXG4gICAgICAgIDkyLFxuICAgICAgICA5MixcbiAgICAgICAgMTk0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNDQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNTMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTczLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMTksXG4gICAgICAgIDY0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTIsXG4gICAgICAgIDg3LFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMzksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgOTEsXG4gICAgICAgIDcsXG4gICAgICAgIDM4LFxuICAgICAgICA3NCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDU2LFxuICAgICAgICAxOCxcbiAgICAgICAgOTMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTU0LFxuICAgICAgICAyMyxcbiAgICAgICAgNTYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgOTUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgODEsXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgMTYxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMzcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjI2LFxuICAgICAgICA3NCxcbiAgICAgICAgMjMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMzAsXG4gICAgICAgIDUyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDY4LFxuICAgICAgICAyMSxcbiAgICAgICAgMTgsXG4gICAgICAgIDExNixcbiAgICAgICAgMTA2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDc2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDU0LFxuICAgICAgICAxODksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyNCxcbiAgICAgICAgODYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTY5LFxuICAgICAgICA2OSxcbiAgICAgICAgMTk2LFxuICAgICAgICA1NCxcbiAgICAgICAgODEsXG4gICAgICAgIDgwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMzUsXG4gICAgICAgIDIwNixcbiAgICAgICAgMzYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDY3LFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTA1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA2NixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA0MixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNSxcbiAgICAgICAgOTgsXG4gICAgICAgIDcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxODIsXG4gICAgICAgIDEzLFxuICAgICAgICA1OCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTMzLFxuICAgICAgICA1NyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNTIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNTQsXG4gICAgICAgIDY1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDU4LFxuICAgICAgICA2NixcbiAgICAgICAgMTc2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDg5LFxuICAgICAgICA2MSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTg1LFxuICAgICAgICAzNixcbiAgICAgICAgMjEyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDc3LFxuICAgICAgICA5NCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNSxcbiAgICAgICAgMjMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxOTksXG4gICAgICAgIDE4MixcbiAgICAgICAgMTY1LFxuICAgICAgICAxOSxcbiAgICAgICAgMTc0LFxuICAgICAgICA3MixcbiAgICAgICAgNzQsXG4gICAgICAgIDYzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDU5LFxuICAgICAgICA5MCxcbiAgICAgICAgMjYsXG4gICAgICAgIDMwLFxuICAgICAgICAyOCxcbiAgICAgICAgNTYsXG4gICAgICAgIDIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNjIsXG4gICAgICAgIDU1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE0M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTg1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkRzZkMwajVBakorblRTK0N4Ujd6MUpqVGE5TVVjdmI4WXUrZmVGSk1vTDA9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMDA2NzM0MTcxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJDRDk5QUI0REFGQjFDNTNGM0NEMTBFOTBCOEJCNTg0NVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjMxNDIyMjdcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwibzJiRGNxNDVTTy1qVFk4Y1RrMGxsQVwiLFxuICBcInBob25lSWRcIjogXCIxNzc4MzhiNi1lNzBlLTQzZTEtYmMzOC05NTY0MDYyZmZhODhcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjUwLFxuICAgICAgMTY3LFxuICAgICAgMjM5LFxuICAgICAgMTAwLFxuICAgICAgMixcbiAgICAgIDIyNixcbiAgICAgIDkyLFxuICAgICAgMTc1LFxuICAgICAgMTYzLFxuICAgICAgMTgzLFxuICAgICAgMyxcbiAgICAgIDE2NixcbiAgICAgIDIwNixcbiAgICAgIDk4LFxuICAgICAgNjMsXG4gICAgICAxMjgsXG4gICAgICAxNyxcbiAgICAgIDc5LFxuICAgICAgMTkwLFxuICAgICAgMTE3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyNCxcbiAgICAgIDE4MCxcbiAgICAgIDEzMCxcbiAgICAgIDUxLFxuICAgICAgMzQsXG4gICAgICAyNTIsXG4gICAgICAxNixcbiAgICAgIDE3MixcbiAgICAgIDE1MSxcbiAgICAgIDYyLFxuICAgICAgMSxcbiAgICAgIDIyMSxcbiAgICAgIDIzMyxcbiAgICAgIDI1LFxuICAgICAgMTgwLFxuICAgICAgMTI0LFxuICAgICAgMjE3LFxuICAgICAgMjI5LFxuICAgICAgMjU1LFxuICAgICAgMjM4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkVTUFhORTdXXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMwMDY3MzQxNzE6N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjY2MDY5NDQ5MTY2ODgyOjdAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTFRYb0pZQkVNaWcxTFVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJDV29ndGQxbEJqTm5QK21jRmlqVE1zRUMyNGVpVXRYSGRtaDAvRzF0czJJPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIk5wMUZ5TXRBT1hFOEtHTTIzRkUrQ1dJYnhzT00zMGV0OU1GUzluTzRyQWxGRTF0YmpZK3I4ck1BZ0l6UTF5REpPKytseTRVaDdHSUxpZTY4cFlvMERRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImNMMkxtSkZtS2FjVUNvLzFvcEhYN0VUWG1IVDhZUGxqdmRidVdtNWpzSWJrQUk2OTIxN0NldmNPVFF1VWd6NE0yWUhmN1VkRmkzdkljVVYxbDB3RGlnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzAwNjczNDE3MTo3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgNixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgOThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMzE0MjIyMSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUFNVlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQU1WLmpzb24iOiAie1wia2V5RGF0YVwiOlwiank2VThtZlBYZ2d2emtMcjkwdUl0cTI1UWFlZHZqYU16RlQwanF2QlpiND1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjozMTUxMDgyNzYsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMzE0MjIyMzA2NFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "👁️‍🗨️",
  packname: process.env.PACK_NAME || "Akuma",
  botname : process.env.BOT_NAME  || "Ayaan-Md",
  ownername:process.env.OWNER_NAME|| "👁️⃤Hard Demon Ayaan",


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
