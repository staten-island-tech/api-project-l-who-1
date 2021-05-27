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
          categoryArr.push(resData.data.cooking_effect);
          if ((resData.data.cooking_effect = null)) {
            resData.data.cooking_effect.display.object = hidden;
          } else if ((resData.data.cooking_effect = undefined)) {
            resData.data.cooking_effect.display.object = hidden;
          } else {
            return categoryArr;
          }
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
                <h3 class="search-element-card-header">${resData.data.name}</h3>
                <div class="location-box">
                <p class="search-common-locations">Common Locations</p>
                  <p class="search-common-locations">${resData.data.common_locations}</p>
                </div>
                <div class="drops-box">
                <p class="search-item-drops">Item Drops</p>
                  <p class="search-item-drops">${resData.data.drops}</p>
                </div>
                <div class="attack-box">
               <p class="search-attack-stat">Attack</p>
                 <p class="search-attack-stat">${resData.data.attack}</p>
               </div>
               <div class="defense-box">
               <p class="search-defense-stat">Defense</p>
                 <p class="search-defense-stat">${resData.data.defense}</p>
              </div>
                <div class="cooking-box">
              <p class="search-cooking-effect">Cooking Effects</p>
                <p class="search-cooking-effect">${resData.data.cooking_effect}</p>
              </div>
              <div class="heart-box">
              <p class="search-hearts-recovered">Hearts Recovered</p>
                <p class="search-hearts-recovered">${resData.data.hearts_recovered}</p>
              </div>
                <div class="description-box">
                <p class="search-description">Description</p>
                  <li class="search-description">${resData.data.description}</li>
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
