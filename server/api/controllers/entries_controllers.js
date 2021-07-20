const JournalEntry = require('./Entry');


async function show (req, res) {
    try {
        const entry = await JournalEntry.findById(req.params.id);
        res.status(200).json(entry)
    } catch (err) {
        res.status(404).json({err})
    }
}

async function create (req, res) {
    try {
        const entry = await JournalEntry.create(req.body);
        res.status(200).json(entry)
    } catch (err) {
        res.status(422).json({err})
    }
}

module.exports = {show, create}