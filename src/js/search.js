import { DOMSelectors } from "./DOM";

const listen = function () {
  DOMSelectors.searchForm.addEventListener("submit", function (e) {
    e.preventDefault();
    DOMSelectors.grid.innerHTML = "";
    const searchParams = DOMSelectors.searchArea.value;
    const searchQuery = async function () {
      try {
        const response = await fetch(
          `https://botw-compendium.herokuapp.com/api/v2/entry/${searchParams}`
        );
        const resData = await response.json();
        let categoryArr = [];
        const addCategory = function () {
          categoryArr.push(resData.data.name);
          return categoryArr;
        };
        addCategory();
        console.log(categoryArr);
        DOMSelectors.grid.insertAdjacentHTML(
          "beforeend",
          `</div><div class="element-card">
              <div class="element-card-front">
                <img
                  src="https://botw-compendium.herokuapp.com/api/v2/entry/${resData.data.id}/image"
                  alt=""
                  class="image"
                />
              </div>
              <div class="element-card-back">
                <h3 class="element-card-header">${resData.data.name}</h3>
                <div class="location-box">
                <p class="common-locations">Common Locations</p>
                  <p class="common-locations">${resData.data.common_locations}</p>
                </div>
                <div class="drops-box">
                <p class="item-drops">Item Drops</p>
                  <p class="item-drops">${resData.data.drops}</p>
                </div>
                <div class="attack-box">
               <p class="attack-stat">Attack</p>
                 <p class="attack-stat">${resData.data.attack}</p>
               </div>
               <div class="defense-box">
               <p class="defense-stat">Defense</p>
                 <p class="defense-stat">${resData.data.defense}</p>
              </div>
                <div class="cooking-box">
              <p class="cooking-effect">Cooking Effects</p>
                <p class="cooking-effect">${resData.data.cooking_effect}</p>
              </div>
              <div class="heart-box">
              <p class="hearts-recovered">Hearts Recovered</p>
                <p class="hearts-recovered">${resData.data.hearts_recovered}</p>
              </div>
                <div class="description-box">
                <p class="description">Description</p>
                  <li class="description">${resData.data.description}</li>
                </div>
              </div>
            </div>`
        );
        console.log(resData);
      } catch (error) {
        console.log(error);
        alert("Something went wrong");
      }
    };
    searchQuery();
  });
};

listen();
