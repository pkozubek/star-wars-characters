import axios from "axios";

const API_URL_PEOPLE = "https://swapi.co/api/people/?page=";

export async function getCharacterData(page) {
  let data = await axios
    .get(`${API_URL_PEOPLE}${page}`)
    .then(response => {
      const { data } = response;
      const { results, next } = data;

      return {
        hasNextPage: next !== null,
        results: results
      };
    })
    .catch(error => {
      alert(error);
    });

  return data;
}

export async function getAdditionalData(homeworldUrl, speciesUrl) {
  let data = await axios
    .all([axios.get(homeworldUrl), axios.get(speciesUrl)])
    .then(
      axios.spread((homeworldRes, speciesRes) => {
        const { name: homeName } = homeworldRes.data;
        const { name: specieName } = speciesRes.data;
        return { homeName: homeName, specieName: specieName };
      })
    );

  return data;
}

export async function getDetailsData(homeworld) {}
