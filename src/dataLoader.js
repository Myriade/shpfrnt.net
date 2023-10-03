async function loadData() {
  try {
    const rawData = require('../data.json');
    const originalData = JSON.parse(rawData);
    return originalData;
  } catch (error) {
    //console.error('Error reading or parsing data.json:', error);
    const defaultData = require('../default-data.json');
    return defaultData;
  }
}

export const loadedData = await loadData();

