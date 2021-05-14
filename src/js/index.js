import { DOMSelectors } from "./DOM";
import { botw } from "./botw";

const query = async function () {
  try {
    const response = await fetch(
      "https://botw-compendium.herokuapp.com/api/v2"
    );
    const data = await response.json();
    data.results.forEach((movie) => {
      DOMSelectors.grid.insertAdjacentHTML("beforeend", "");
    });
    console.log(data);
  } catch (error) {
    console.log(error);
    alert("Something went wrong");
  }
};
query();
