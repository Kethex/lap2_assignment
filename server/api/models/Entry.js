const db = require('../db_config/init');

class Journal {
  constructor(data) {
    this.id = data.id;
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

  static async selectLastRecordId() {
    return new Promise(async (resolve, reject) => {
      try {
        let fnalRowId = await db.query(`SELECT id FROM Journals ORDER BY id DESC LIMIT 1`);
        let id = fnalRowId.rows[0].id;
        resolve(id);
      } catch (err) {
        reject('Unsuccessful');
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
        console.log('line 33 Entry', output);
        resolve(output);
      } catch (err) {
        reject('Book could not be created');
      }
    });
  }
}

module.exports = Journal;
