import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/news_data/";

export function getNews() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}

export function updateNews(data) {
    return fetch(baseUrl + data._id, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then(handleResponse)
      .catch(handleError);
  }
  
  export function addNews(data) {
    return fetch(baseUrl, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then(handleResponse)
      .catch(handleError);
  }
  