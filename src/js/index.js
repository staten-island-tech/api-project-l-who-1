import { DOMSelectors } from "./DOM";
import { botw } from "./botw";

const query = async function () {
  try {
    const response = await fetch(
      `https://botw-compendium.herokuapp.com/api/v2`
    );
    const resData = await response.json();
    resData.data.monsters.forEach((element) => {
      let categoryArr = [];
      const addCategory = function () {
        categoryArr.push(element.name);
        return categoryArr;
      };
      addCategory();
      console.log(categoryArr);
      DOMSelectors.grid.insertAdjacentHTML(
        "beforeend",
        `</div><div class="element-card">
        <div class="element-card-front">
          <img
            src="https://botw-compendium.herokuapp.com/api/v2/entry/${element.id}/image"
            alt=""
            class="image"
          />
        </div>
        <div class="element-card-back">
          <h3 class="element-card-header">${element.name}</h3>
          <div class="location-box">
          <p class="common-locations">Common Locations</p>
            <p class="common-locations">${element.common_locations}</p>
          </div>

          <div class="drops-box">
          <p class="item-drops">Item Drops</p>
            <p class="item-drops">${element.drops}</p>
          </div>

          <div class="categories">
          <li class="category">${categoryArr}</li>
          </div>
        </div>
      </div>`
      );
    });
    resData.data.equipment.forEach((element) => {
      let categoryArr = [];
      const addCategory = function () {
        categoryArr.push(element.name);
        return categoryArr;
      };
      addCategory();
      console.log(categoryArr);
      DOMSelectors.grid.insertAdjacentHTML(
        "beforeend",
        `</div><div class="element-card">
        <div class="element-card-front">
          <img
            src="https://botw-compendium.herokuapp.com/api/v2/entry/${element.id}/image"
            alt=""
            class="image"
          />
        </div>
        <div class="element-card-back">
          <h3 class="element-card-header">${element.name}</h3>
          <div class="location-box">
          <p class="common-locations">Common Locations</p>
            <p class="common-locations">${element.common_locations}</p>
          </div>

          <div class="drops-box">
          <p class="item-drops">Item Drops</p>
            <p class="item-drops">${element.drops}</p>
          </div>

          <div class="categories">
          <li class="category">${categoryArr}</li>
          </div>
        </div>
      </div>`
      );
    });
    resData.data.materials.forEach((element) => {
      let categoryArr = [];
      const addCategory = function () {
        categoryArr.push(element.name);
        return categoryArr;
      };
      addCategory();
      console.log(categoryArr);
      DOMSelectors.grid.insertAdjacentHTML(
        "beforeend",
        `</div><div class="element-card">
        <div class="element-card-front">
          <img
            src="https://botw-compendium.herokuapp.com/api/v2/entry/${element.id}/image"
            alt=""
            class="image"
          />
        </div>
        <div class="element-card-back">
          <h3 class="element-card-header">${element.name}</h3>
          <div class="location-box">
          <p class="common-locations">Common Locations</p>
            <p class="common-locations">${element.common_locations}</p>
          </div>

          <div class="drops-box">
          <p class="item-drops">Item Drops</p>
            <p class="item-drops">${element.drops}</p>
          </div>

          <div class="categories">
          <li class="category">${categoryArr}</li>
          </div>
        </div>
      </div>`
      );
    });
    resData.data.creatures.food.forEach((element) => {
      let categoryArr = [];
      const addCategory = function () {
        categoryArr.push(element.name);
        return categoryArr;
      };
      addCategory();
      console.log(categoryArr);
      DOMSelectors.grid.insertAdjacentHTML(
        "beforeend",
        `</div><div class="element-card">
        <div class="element-card-front">
          <img
            src="https://botw-compendium.herokuapp.com/api/v2/entry/${element.id}/image"
            alt=""
            class="image"
          />
        </div>
        <div class="element-card-back">
          <h3 class="element-card-header">${element.name}</h3>
          <div class="location-box">
          <p class="common-locations">Common Locations</p>
            <p class="common-locations">${element.common_locations}</p>
          </div>

          <div class="drops-box">
          <p class="item-drops">Item Drops</p>
            <p class="item-drops">${element.drops}</p>
          </div>

          <div class="categories">
          <li class="category">${categoryArr}</li>
          </div>
        </div>
      </div>`
      );
    });
    resData.data.creatures.non_food.forEach((element) => {
      let categoryArr = [];
      const addCategory = function () {
        categoryArr.push(element.name);
        return categoryArr;
      };
      addCategory();
      console.log(categoryArr);
      DOMSelectors.grid.insertAdjacentHTML(
        "beforeend",
        `</div><div class="element-card">
        <div class="element-card-front">
          <img
            src="https://botw-compendium.herokuapp.com/api/v2/entry/${element.id}/image"
            alt=""
            class="image"
          />
        </div>
        <div class="element-card-back">
          <h3 class="element-card-header">${element.name}</h3>
          <div class="location-box">
          <p class="common-locations">Common Locations</p>
            <p class="common-locations">${element.common_locations}</p>
          </div>

          <div class="drops-box">
          <p class="item-drops">Item Drops</p>
            <p class="item-drops">${element.drops}</p>
          </div>

          <div class="categories">
          <li class="category">${categoryArr}</li>
          </div>
        </div>
      </div>`
      );
    });
    resData.data.treasure.forEach((element) => {
      let categoryArr = [];
      const addCategory = function () {
        categoryArr.push(element.name);
        return categoryArr;
      };
      addCategory();
      console.log(categoryArr);
      DOMSelectors.grid.insertAdjacentHTML(
        "beforeend",
        `</div><div class="element-card">
        <div class="element-card-front">
          <img
            src="https://botw-compendium.herokuapp.com/api/v2/entry/${element.id}/image"
            alt=""
            class="image"
          />
        </div>
        <div class="element-card-back">
          <h3 class="element-card-header">${element.name}</h3>
          <div class="location-box">
          <p class="common-locations">Common Locations</p>
            <p class="common-locations">${element.common_locations}</p>
          </div>

          <div class="drops-box">
          <p class="item-drops">Item Drops</p>
            <p class="item-drops">${element.drops}</p>
          </div>

          <div class="categories">
          <li class="category">${categoryArr}</li>
          </div>
        </div>
      </div>`
      );
    });
    console.log(resData);
  } catch (error) {
    console.log(error);
    alert("Something went wrong");
  }
};
query();
