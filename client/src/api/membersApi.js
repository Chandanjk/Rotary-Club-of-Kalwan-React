import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/members_data/";

export function getMembers() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}

export function updateMembers(data) {
    return fetch(baseUrl + data.id, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then(handleResponse)
      .catch(handleError);
  }
  
  export function addMember(data) {
    return fetch(baseUrl, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then(handleResponse)
      .catch(handleError);
  }
  