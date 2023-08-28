import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/achievements_data/";

export function getAchievements() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}

export function updateAchievements(data) {
    return fetch(baseUrl + data._id, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then(handleResponse)
      .catch(handleError);
  }
  
  export function addAchievement(data) {
    return fetch(baseUrl, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then(handleResponse)
      .catch(handleError);
  }
  