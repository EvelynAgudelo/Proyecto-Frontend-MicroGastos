// 1. Corregimos el puerto a 8080
const BASE_URL = "http://localhost:8080"; 

export const getGastos = async () => {
  // 2. Usamos solo una vez /gastos
  const res = await fetch(`${BASE_URL}/gastos`); 
  return res.json();
};

export const createGasto = async (gasto) => {
  // 3. Quitamos el "gastos" extra para que no se duplique
  const res = await fetch(`${BASE_URL}/gastos`, { 
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(gasto),
  });
  return res.json();
};