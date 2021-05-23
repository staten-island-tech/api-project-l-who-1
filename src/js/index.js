import { DOMSelectors } from "./DOM";
import { botw } from "./botw";

const query = async function () {
  try {
    const response = await fetch(
      `https://botw-compendium.herokuapp.com/api/v2`
    );
    const data = await response.json();
    data.results.forEach((element) => {
      let categoryArr = [];
      const addCategory = function () {
        botw.forEach((element) => {
          if (element.names.includes(element.name)) {
            categoryArr.push(element.name);
            return categoryArr;
          }
        });
      };
      addCategory();
      console.log(genreArr);
      DOMSelectors.grid.insertAdjacentHTML(
        "beforeend",
        `<div class="element-card">
        <div class="element-card-front">
          <img
            src="${element.image}"
            alt=""
            class="poster"
          />
        </div>
        <div class="element-card-back">
          <h3 class="element-card-header">Horse</h3>
          <div class="location-box">
            <p class="common-locations">Common Locations</p>
            <p class="common-locations">${element.common_locations}</p>
          </div>

          <div class="drops-box">
            <p class="item-drops">Item Drops</p>
            <p class="item-drops">${element.drops}</p>
          </div>

          <div class="categories">
            ${categoryArr}
          </div>
        </div>
      </div>`
      );
    });
  } catch (error) {
    console.log(error);
    alert("Something went wrong");
  }
};
query();
