import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/outside_meetings_data/";

export function getOutsideMeetings() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}

export function updateOutsideMeetings(data) {
    return fetch(baseUrl + data._id, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then(handleResponse)
      .catch(handleError);
  }
  
  export function addOutsideMeeting(data) {
    return fetch(baseUrl, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then(handleResponse)
      .catch(handleError);
  }
  