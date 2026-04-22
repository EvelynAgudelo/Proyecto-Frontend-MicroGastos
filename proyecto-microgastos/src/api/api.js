const BASE_URL = "http://localhost:8080/microgastosapp/v1";

export const getGastos = async () => {
  const res = await fetch(`${BASE_URL}/gastos`);
  return res.json();
};

export const createGasto = async (gasto) => {
  const res = await fetch(`${BASE_URL}/gastos`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(gasto),
  });

  return res.json();
};