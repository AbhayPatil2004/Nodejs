const { exec } = require('child_process')

exec('powershell -Command "setx VARIABLE_NAME Nodejs')

const env = process.env
console.log(env)