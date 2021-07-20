drop table if exists Journals;

Create table Journals (
    id serial primary key not null,
    title varchar(300) NOT NULL UNIQUE,
    pseudonym varchar(150) NOT NULL UNIQUE,
    journalEntry text NOT NULL UNIQUE,
    date_created DATE DEFAULT CURRENT_DATE);