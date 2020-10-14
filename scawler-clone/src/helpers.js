const _ = require('lodash');
const axios = require('axios');
const cheerio = require('cheerio');

const sendResponse = res => async request => {
    return await request
        .then(data => res.json({status: 'success', data}))
        .catch(({status: code = 500}) =>
        res.status(code).json({status: 'failed', code,message: code == 404 ? 'Not found.' : 'Request Failed'}))
}


const fetchHtmlFormUrl = async url => {
    return await axios
        .get(enforceHttpsUrl(url))
        .then(response => cheerio.load(response.data))
        .catch(err => {
            err.status = (err.response && err.response.status) || 500;
            throw err;
        })
}
