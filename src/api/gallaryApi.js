import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/gallary_data/";

export function getGallaryData() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}

export function updateGallaryData(data) {
    return fetch(baseUrl + data.id, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then(handleResponse)
      .catch(handleError);
  }
  
  export function addGallaryData(data) {
    return fetch(baseUrl, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then(handleResponse)
      .catch(handleError);
  }
  