const path = require("path")

module.exports = {
    mode: "development",
    entry: "./src/components/list/customers.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    }
}