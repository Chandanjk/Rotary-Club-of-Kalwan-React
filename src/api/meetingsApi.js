import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/meetings_data/";

export function getMeetings() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}

export function updateMeetings(data) {
    return fetch(baseUrl + data.id, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then(handleResponse)
      .catch(handleError);
  }
  
  export function addMeeting(data) {
    return fetch(baseUrl, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then(handleResponse)
      .catch(handleError);
  }
  