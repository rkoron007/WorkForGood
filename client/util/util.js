const token = Rails.csrfToken();

export const handleResponseJSON = response => {
  if (response.status >= 201) {
    return response.text();
  }
  return response.json();
};

export const makePostRequest = (url, body) => {
  return fetch(`${url}`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
      "X-Requested-With": "XMLHttpRequest",
      "X-CSRF-Token": token,
      Accept: "application/json"
    },
    credentials: "same-origin"
  });
};

export const fetchRequest = url => {
  return fetch(`${url}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "X-Requested-With": "XMLHttpRequest",
      "X-CSRF-Token": token,
      Accept: "application/json"
    },
    credentials: "same-origin"
  });
};

export const deleteRequest = url => {
  return fetch(`${url}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "X-Requested-With": "XMLHttpRequest",
      "X-CSRF-Token": token,
      Accept: "application/json"
    },
    credentials: "same-origin"
  });
};
