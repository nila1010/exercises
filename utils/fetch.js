export function fetchData(url) {
  return fetch(url).then((response) => response.json());
}

/* async function showData() {
  const currentNumber = await fetchData("https://kea-alt-del.dk/kata-distortion/");
  someElement.textContent = currentNumber.inQueue;
}

showData();

setInterval(showData, 5000); */
