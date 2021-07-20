module.exports = class Journal {
    constructor(data){
        this.title = data.title;
        this.pseudonym = data.pseudonym;
        this.entry = data.entry;
        this.date = data.date
    };

    static findById(id){
        return new Promise (async (resolve, reject) => {
            try {
                let journalData = await db.query(`SELECT books.*, authors.name as author_name
                                                    FROM books 
                                                    JOIN authors ON books.author_id = authors.id
                                                    WHERE books.id = $1;`, [ id ]);
                let book = new Journal(journalData.rows[0]);
                resolve (book);
            } catch (err) {
                reject('Book not found');
            }
        });
    };

    static async create(journalData){
        return new Promise (async (resolve, reject) => {
            try {
                const { title, pseudonym, entry, date} = journalData;
                resolve (result.rows[0]);
            } catch (err) {
                reject('Book could not be created');
            }
        });
    };
};
