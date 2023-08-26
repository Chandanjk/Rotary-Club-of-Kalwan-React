import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/posts_data/";

export function getPosts() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}

export function updatePosts(data) {
  return fetch(baseUrl + data.id, {
    method: "PUT",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(data),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function addPost(data) {
  return fetch(baseUrl, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(data),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deletePost(postID) {
  return fetch(baseUrl + postID, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
