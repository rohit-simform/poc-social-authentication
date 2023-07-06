const { userInfoController } = require("../controller")
const auth = require("../middleware")


module.exports = (app) => {
    app.get("/user-info", auth, userInfoController)
}