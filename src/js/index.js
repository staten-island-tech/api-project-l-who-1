import { DOMSelectors } from "./DOM";

const query = async function () {
  try {
    const response = await fetch(
      `https://botw-compendium.herokuapp.com/api/v2`
    );
    const resData = await response.json();
    resData.data.monsters.forEach((resData) => {
      let categoryArr = [];
      const addCategory = function () {
        categoryArr.push(resData.name);
        return categoryArr;
      };
      addCategory();
      console.log(categoryArr);
      DOMSelectors.grid.insertAdjacentHTML(
        "beforeend",
        `</div><div class="element-card">
        <div class="element-card-front">
          <img
            src="https://botw-compendium.herokuapp.com/api/v2/entry/${resData.id}/image"
            alt=""
            class="image"
          />
        </div>
        <div class="element-card-back">
          <h3 class="element-card-header">${resData.name}</h3>
          <div class="location-box">
          <p class="common-locations">Common Locations</p>
            <p class="common-locations">${resData.common_locations}</p>
          </div>
          <div class="drops-box">
          <p class="item-drops">Item Drops</p>
            <p class="item-drops">${resData.drops}</p>
          </div>
          <div class="description-box">
          <p class="description">Description</p>
            <li class="description">${resData.description}</li>
          </div>
        </div>
      </div>`
      );
    });
    resData.data.equipment.forEach((resData) => {
      let categoryArr = [];
      const addCategory = function () {
        categoryArr.push(resData.name);
        return categoryArr;
      };
      addCategory();
      console.log(categoryArr);
      DOMSelectors.grid.insertAdjacentHTML(
        "beforeend",
        `</div><div class="element-card">
        <div class="element-card-front">
          <img
            src="https://botw-compendium.herokuapp.com/api/v2/entry/${resData.id}/image"
            alt=""
            class="image"
          />
        </div>
        <div class="element-card-back">
          <h3 class="element-card-header">${resData.name}</h3>
          <div class="location-box">
          <p class="common-locations">Common Locations</p>
            <p class="common-locations">${resData.common_locations}</p>
          </div>
          <div class="attack-box">
          <p class="attack-stat">Attack</p>
            <p class="attack-stat">${resData.attack}</p>
          </div>
          <div class="defense-box">
          <p class="defense-stat">Defense</p>
            <p class="defense-stat">${resData.defense}</p>
          </div>
          <div class="description-box">
          <p class="description">Description</p>
            <li class="description">${resData.description}</li>
          </div>
        </div>
      </div>`
      );
    });
    resData.data.materials.forEach((resData) => {
      let categoryArr = [];
      const addCategory = function () {
        categoryArr.push(resData.name);
        return categoryArr;
      };
      addCategory();
      console.log(categoryArr);
      DOMSelectors.grid.insertAdjacentHTML(
        "beforeend",
        `</div><div class="element-card">
        <div class="element-card-front">
          <img
            src="https://botw-compendium.herokuapp.com/api/v2/entry/${resData.id}/image"
            alt=""
            class="image"
          />
        </div>
        <div class="element-card-back">
          <h3 class="element-card-header">${resData.name}</h3>
          <div class="location-box">
          <p class="common-locations">Common Locations</p>
            <p class="common-locations">${resData.common_locations}</p>
          </div>
          <div class="cooking-box">
          <p class="cooking-effect">Cooking Effects</p>
            <p class="cooking-effect">${resData.cooking_effect}</p>
          </div>
          <div class="heart-box">
          <p class="hearts-recovered">Hearts Recovered</p>
            <p class="hearts-recovered">${resData.hearts_recovered}</p>
          </div>
          <div class="description-box">
          <p class="description">Description</p>
            <li class="description">${resData.description}</li>
          </div>
        </div>
      </div>`
      );
    });
    resData.data.creatures.food.forEach((resData) => {
      let categoryArr = [];
      const addCategory = function () {
        categoryArr.push(resData.name);
        return categoryArr;
      };
      addCategory();
      console.log(categoryArr);
      DOMSelectors.grid.insertAdjacentHTML(
        "beforeend",
        `</div><div class="element-card">
        <div class="element-card-front">
          <img
            src="https://botw-compendium.herokuapp.com/api/v2/entry/${resData.id}/image"
            alt=""
            class="image"
          />
        </div>
        <div class="element-card-back">
          <h3 class="element-card-header">${resData.name}</h3>
          <div class="location-box">
          <p class="common-locations">Common Locations</p>
            <p class="common-locations">${resData.common_locations}</p>
          </div>
          <div class="cooking-box">
          <p class="cooking-effect">Cooking Effects</p>
            <p class="cooking-effect">${resData.cooking_effect}</p>
          </div>
          <div class="heart-box">
          <p class="hearts-recovered">Hearts Recovered</p>
            <p class="hearts-recovered">${resData.hearts_recovered}</p>
          </div>
          <div class="description-box">
          <p class="description">Description</p>
            <li class="description">${resData.description}</li>
          </div>
        </div>
      </div>`
      );
    });
    resData.data.creatures.non_food.forEach((resData) => {
      let categoryArr = [];
      const addCategory = function () {
        categoryArr.push(resData.name);
        return categoryArr;
      };
      addCategory();
      console.log(categoryArr);
      DOMSelectors.grid.insertAdjacentHTML(
        "beforeend",
        `</div><div class="element-card">
        <div class="element-card-front">
          <img
            src="https://botw-compendium.herokuapp.com/api/v2/entry/${resData.id}/image"
            alt=""
            class="image"
          />
        </div>
        <div class="element-card-back">
          <h3 class="element-card-header">${resData.name}</h3>
          <div class="location-box">
          <p class="common-locations">Common Locations</p>
            <p class="common-locations">${resData.common_locations}</p>
          </div>
          <div class="drops-box">
          <p class="item-drops">Item Drops</p>
            <p class="item-drops">${resData.drops}</p>
          </div>
          <div class="description-box">
          <p class="description">Description</p>
            <li class="description">${resData.description}</li>
          </div>
        </div>
      </div>`
      );
    });
    resData.data.treasure.forEach((resData) => {
      let categoryArr = [];
      const addCategory = function () {
        categoryArr.push(resData.name);
        return categoryArr;
      };
      addCategory();
      console.log(categoryArr);
      DOMSelectors.grid.insertAdjacentHTML(
        "beforeend",
        `</div><div class="element-card">
        <div class="element-card-front">
          <img
            src="https://botw-compendium.herokuapp.com/api/v2/entry/${resData.id}/image"
            alt=""
            class="image"
          />
        </div>
        <div class="element-card-back">
          <h3 class="element-card-header">${resData.name}</h3>
          <div class="location-box">
          <p class="common-locations">Common Locations</p>
            <p class="common-locations">${resData.common_locations}</p>
          </div>
          <div class="drops-box">
          <p class="item-drops">Item Drops</p>
            <p class="item-drops">${resData.drops}</p>
          </div>
          <div class="description-box">
          <p class="description">Description</p>
            <li class="description">${resData.description}</li>
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
