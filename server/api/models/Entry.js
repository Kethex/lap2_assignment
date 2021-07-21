const db = require('../db_config/init');

class Journal {
  constructor(data) {
    this.title = data.title;
    this.pseudonym = data.pseudonym;
    this.entry = data.journalentry;
  }

  static findById(id) {
    return new Promise(async (resolve, reject) => {
      try {
        let journalData = await db.query(`SELECT * FROM Journals WHERE id = '${id}'`);
        let book = new Journal(journalData.rows[0]);
        resolve(book);
      } catch (err) {
        reject('Book not found');
      }
    });
  }

  static async create(title, pseudonym, entry) {
    return new Promise(async (resolve, reject) => {
      try {
        let result = await db.query(`INSERT INTO Journals (title, pseudonym, journalEntry) VALUES ($1, $2, $3) RETURNING *;`, [
          title,
          pseudonym,
          entry,
        ]);
        const output = new Journal(result.rows[0]);
        resolve(output);
      } catch (err) {
        reject('Book could not be created');
      }
    });
  }
}

module.exports = Journal;
