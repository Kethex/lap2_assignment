async function getItem(category, id) {
  try {
    const response = await fetch(`http://localhost:3000/${category}/${id}`);
    const data = await response.json();
    return data;
  } catch (err) {
    console.warn(err);
  }
}

const form = document.querySelector('form');

form.addEventListener('submit', postEntry);

async function postEntry(e) {
  e.preventDefault();
  try {
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(Object.fromEntries(new FormData(e.target))),
    };

    console.log('does this bit work');
    const response = await fetch('http://localhost:3000/routes/entries', options); //THIS IS THE ERROR CAUSING PART (the first parameter in fetch), THOUGH LINE 24 DOES NOT LOG TO THE console either.
    const result = await response.json(); //This was unfinished - I would use result.id if I could, to get the id. If it doesn't work, I'd probably have to add "this.id = data.id" to the first line under the constructor in models.
    console.log(result);
    // const { id, err } = await response.json(); Got rid of this as we need more than the id
    // if(err) {
    //     throw Error(err)
    // } else {
    //     window.location.hash = `#books/${id}`
    // }
  } catch (err) {
    console.warn(err);
  }
}
