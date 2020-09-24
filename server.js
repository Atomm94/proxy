const express = require('express');
const app = express();
const request = require('request');


app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Allow-Credentials", true);
    next();
});
app.use(express.json());

app.get("/getData", (req, res) => {
    const { url } = req.query
    try {
        request(url, function (error, response, body) {
            res.status(200).send(body)
        });
    } catch (ex) {
        res.status(200).send(ex)
    }
})



let PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
    console.log(`app is listening ${PORT}`);
})