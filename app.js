// import module/package
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const vendorRoutes = require("./routes/vendor_details_routes");
const app = express();
// routes
app.use("/vendor_details", vendorRoutes);
// setting middleware
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// setting error path
app.use((req, res, next) => {
    const err = new Error(`${req.url} not found in this server`);
    err.status = 404;
    next(err);
});
// setting another error program
app.use((err, req, res, next) => {
    res.status(err.status || 500).json({ error: err.message });
});
// export app
module.exports = app;