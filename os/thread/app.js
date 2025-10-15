const { worker } = require("worker_thread")

new worker("./a.js")
new worker("./b.js")
new worker("./c.js")