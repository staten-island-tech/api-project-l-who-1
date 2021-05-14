import { DOMSelectors } from "./DOM";
import { genres } from "./genre";

const key = "YOURKEYHERE";
//
//
const query = async function () {
  try {
    const response = await fetch(
      "https://botw-compendium.herokuapp.com/api/v2/entry/Master Kohga"
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
    alert("Something went wrong");
  }
};
query();
