const BASE_URL = "http://localhost:3000";

export const endpoints = {
  login: "/auth/login",
  gastos: "/gastos",
};

export const getData = async (endpoint) => {
  const response = await fetch(BASE_URL + endpoint);
  return response.json();
};

export const postData = async (endpoint, data) => {
  const response = await fetch(BASE_URL + endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
};