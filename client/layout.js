function renderJournal(data) {
  let { id, title, pseudonym, journalEntry } = data;

  const newEntry = document.createElement('section');
  const newEntryHeading = document.createElement('h3');
  const newEntryAuthor = document.createElement('address');
  const newEntryBody = document.createElement('article');

  newEntry.id = id;

  newEntryHeading.textContent = title;
  newEntryAuthor.textContent = pseudonym;
  newEntryBody.textContent = journalEntry;

  newEntry.append(newEntryHeading);
  newEntry.append(newEntryAuthor);
  newEntry.append(newEntryAuthor);

  return newEntry;
}

renderJournal();
