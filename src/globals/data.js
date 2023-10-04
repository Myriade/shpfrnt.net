import defaultData from '../data/default-data.json';

let asyncData;

async function fetchData() {
  try {
    const response = await fetch('../../data/data.json');
    asyncData = await response.json();
    return asyncData; // Return the fetched data
  } catch (error) {
    console.error('Error fetching data:', error);
    asyncData = null;
    return asyncData; // Return null in case of an error
  }
}

// Initially, use the default data
const data = await fetchData() || defaultData;

export { data };