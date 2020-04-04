import { handleResponseJSON, makePostRequest, deleteRequest } from "./util";

export const signUpWorker = worker =>
  makePostRequest("/api/workers", { worker })
    .then(response => handleResponseJSON(response))
    .then(data => console.log(data));

export const signInWorker = worker =>
  makePostRequest("/api/session", { worker })
    .then(response => handleResponseJSON(response))
    .then(data => data);

export const signUpCompany = company =>
  makePostRequest("/api/companies", { company })
    .then(response => handleResponseJSON(response))
    .then(data => data);

export const signInCompany = company =>
  makePostRequest("/api/session", { company })
    .then(response => handleResponseJSON(response))
    .then(data => console.log(data));

export const signOut = () => deleteRequest("/api/session");
