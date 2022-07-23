
const express = require('express');
const ContactService = require('../services/contact-service');
const router = express.Router()

//Get all Method
router.get('/contacts', (req, res) => {
    try {
        let phrase = req.query.phrase;

        let contact_service = new ContactService();
        if (typeof phrase === 'undefined') {

            res.status(200).json({ "data": contact_service.getAll() });
        } else if (phrase !== '') {

            const data_filter = contact_service.getSearch(phrase)
            if (data_filter.length == 0) {
                res.status(400).json({ "data": [] });
            } else {
                res.status(200).json({ "data": data_filter });
            }
        }
        else {
            res.status(400).json({ "data": [] });
        }
    }
    catch (error) {

        res.status(500).json({ message: error.message })
    }
});

//Get by ID Method
router.get('/contacts/:id', (req, res) => {
    try {
        let contact_service = new ContactService();
        const data_filter = contact_service.getById(req.params.id);
        if (typeof data_filter !== 'undefined') {
            res.status(200).json({ "data": data_filter });
        } else {
            res.status(404).json({ "data": [] });
        }
    }
    catch (error) {
        res.status(500).json({ message: error.message })

    }
});

//Delete by ID Method
router.delete('/contacts/:id', (req, res) => {
    try {
        let contact_service = new ContactService();
        const data_index = contact_service.deleteById(req.params.id);
        if (data_index !== -1) {
            res.status(204).json({ "data": [] })
        } else {
            res.status(404).json({ "message": "No Found" });
        }
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
});

module.exports = router;
