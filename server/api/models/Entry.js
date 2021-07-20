const db = require('../db_config/init');

class Journal {
  constructor(data) {
    this.title = data.title;
    this.pseudonym = data.pseudonym;
    this.entry = data.entry;
  }

  static findById(id) {
    return new Promise(async (resolve, reject) => {
      try {
        let journalData = await db.query(`SELECT * FROM Users WHERE username = '${username}'`);
        let book = new Journal(journalData.rows[0]);
        resolve(book);
      } catch (err) {
        reject('Book not found');
      }
    });
  }

  static async create(journalData) {
    return new Promise(async (resolve, reject) => {
      try {
        const { title, pseudonym, entry } = journalData;
        let result = await db.query(`INSERT INTO Journals VALUES ('${title}', '${pseudonym}', '${entry}')`);
        let output = result.rows[0].map((row) => new Journal(row));
        resolve(output);
      } catch (err) {
        reject('Book could not be created');
      }
    });
  }
}

module.exports = Journal;
