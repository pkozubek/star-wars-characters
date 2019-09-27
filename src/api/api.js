import axios from "axios";

const API_URL = "https://swapi.co/api/people/?page=";

export async function getCharacterData(page) {
  let data = await axios
    .get(`${API_URL}${page}`)
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

export async function getDetailsData(homeworld) {}
