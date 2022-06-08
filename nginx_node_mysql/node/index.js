const express = require('express');
const db = require('./models/db');
const People = db.people;
const fetchNames = require('./service/names');
const pickRandom = require('./utils/utils');
const app = express();
const port = 3000;

async function createPeople() {
  try {
    const response = await Promise.all([
      fetchNames(pickRandom(['male', 'female'])),
      fetchNames('surnames'),
    ]);

    const [firstNames, lastNames] = response;

    const firstName = pickRandom(firstNames.data);
    const lastName = pickRandom(lastNames.data);
    await People.create({
      name: `${firstName} ${lastName}`,
    });
  } catch (error) {
    console.log(error);
  }
}

async function returnNames() {
  const peoples = await People.findAll();
  
  return peoples.map(p => p.name);
}

app.get('/', async (req, res) => {
  await createPeople();
  const peoplesName = await returnNames();
  res.send(`
    <h1>Full Cycle Rocks!</h1>
    <ul>
        ${peoplesName.map((name) => `<li>${name}</li>`).join('')}
    </ul>
  `);
});

app.listen(port, () => {
  console.log('Rodando na porta ' + port);
});
