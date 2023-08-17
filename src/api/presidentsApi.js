import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/presidents_data/";

export function getPresidents() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}

export function updatePresidents(data) {
    return fetch(baseUrl + data.id, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then(handleResponse)
      .catch(handleError);
  }
  
  export function addPresident(data) {
    return fetch(baseUrl, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then(handleResponse)
      .catch(handleError);
  }
  