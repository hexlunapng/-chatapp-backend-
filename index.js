const express = require("express");
const app = express();

app.get('/', (req, res) => {
    res.send('errors.com.ogfn.common.not_found');
});
