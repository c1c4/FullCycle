const axios = require('axios').default;

async function fetchNames(nameType) {
  try {
    const response = await axios({
      method: 'GET',
      url: `https://www.randomlists.com/data/names-${nameType}.json`,
    });

    return response.data;
  } catch (error) {
    console.error(error);
  }
}

module.exports = fetchNames;
