const JournalEntry = require('../models/Entry');

async function show(req, res) {
  try {
    const entry = await JournalEntry.findById(req.params.id);
    res.status(200).json(entry);
  } catch (err) {
    res.status(404).send({ err });
  }
}

async function create(req, res) {
  try {
    const entry = await JournalEntry.create(req.body);
    res.status(200).json(entry);
  } catch (err) {
    res.status(422).json({ err });
  }
}

module.exports = { show, create };
