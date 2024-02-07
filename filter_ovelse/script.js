import { $, $$ } from "../utils/dom.js";

const vehicles = [
  { type: "Bus", fuel: "Diesel", passengers: 45, stops: ["Nørrebrogade", "Elmegade"] },
  { type: "Bil", fuel: "Benzin", passengers: 4, ownedBy: "Klaus" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 0, ownedBy: "Jonas", isElectric: true },
  { type: "Bil", passengers: 5, ownedBy: "Elon", isElectric: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Fonda" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 2, ownedBy: "Vingegård", isTandem: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Yolanda" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Børge" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Jonas" },
  { type: "Løbehjul", passengers: 1, isElectric: true },
];

const ulPointer = $("ul");

function showTheseVehicles(arr) {
  ulPointer.innerHTML += "<li><strong>Type</strong></li>";
  ulPointer.innerHTML += "<li><strong>Fuel</strong></li>";
  ulPointer.innerHTML += "<li><strong>Passengers</strong></li>";
  ulPointer.innerHTML += "<li><strong>Stops</strong></li>";
  ulPointer.innerHTML += " <li><strong>OwnedBy</strong></li>";
  ulPointer.innerHTML += "<li><strong>Electric</strong></li>";
  ulPointer.innerHTML += "<li><strong>Tandem</strong></li>";
  arr.forEach((each) => {
    ulPointer.innerHTML += `<li >${each.type}</li>`;
    ulPointer.innerHTML += `<li >${each.fuel ?? "Ikke opgivet"}</li>`;
    ulPointer.innerHTML += `<li>${each.passengers}</li>`;
    ulPointer.innerHTML += `<li>${each.stops ?? "Ikke opgivet"}</li>`;
    ulPointer.innerHTML += `<li>${each.ownedBy ?? "Ikke opgivet"}</li>`;
    ulPointer.innerHTML += `<li>${each.isElectric === true ? "Ja" : "Nej"}</li>`;
    ulPointer.innerHTML += `<li>${each.isTandem === true ? "Ja" : "Nej"}</li>`;
  });
}

function filterButtens(evt) {
  if (evt.target.dataset.filter === "electric") {
    ulPointer.innerHTML = "";
    const electric = vehicles.filter((vehicle) => vehicle.isElectric);
    showTheseVehicles(electric);
  } else if (evt.target.dataset.filter === "twoseats") {
    ulPointer.innerHTML = "";
    const twoseats = vehicles.filter((vehicle) => vehicle.passengers > 1);
    showTheseVehicles(twoseats);
  } else if (evt.target.dataset.filter === "electricaljonas") {
    ulPointer.innerHTML = "";
    const electricaljonas = vehicles.filter((vehicle) => vehicle.isElectric && vehicle.ownedBy === "Jonas");
    showTheseVehicles(electricaljonas);
  } else if (evt.target.dataset.filter === "rugbrod") {
    ulPointer.innerHTML = "";
    const rugbrod = vehicles.filter((vehicle) => vehicle.fuel === "Rugbrød" && vehicle.passengers > 1);
    showTheseVehicles(rugbrod);
  } else {
    ulPointer.innerHTML = "";
    showTheseVehicles(vehicles);
  }
}

$$(".btns").forEach((btn) => {
  btn.addEventListener("click", filterButtens);
});
