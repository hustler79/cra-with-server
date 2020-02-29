
const express = require('express');

const router = express.Router();

module.exports = () => {

    router.all('/article/:slug', async (req, res) => {

        const slug = req.params.slug;

        await new Promise(res => setTimeout(res, 2000));

        return res.json({
            extra: 'it worked',
            slug,
        })
    });

    return router;
}


