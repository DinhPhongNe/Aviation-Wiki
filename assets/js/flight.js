setTimeout(() => {
  const btn_book = document.getElementById("book-now-button");

  // listen to the event button " book now"
  document
    .getElementById("book-now-button")
    .addEventListener("click", function () {
      // create a div for pop up
      const popup = document.createElement("div");

      // ==========================================================================
      // const bookingDiv = document.createElement("div");
      // bookingDiv.id = "booking";
      // bookingDiv.classList.add("sectionForm");

      // const sectionCenterDiv = document.createElement("div");
      // sectionCenterDiv.classList.add("section-center");

      // const containerDiv = document.createElement("div");
      // containerDiv.classList.add("container");

      // const rowDiv = document.createElement("div");
      // rowDiv.classList.add("row");

      // const bookingFormDiv = document.createElement("div");
      // bookingFormDiv.classList.add("booking-form");

      // const formHeaderDiv = document.createElement("div");
      // formHeaderDiv.classList.add("form-header");

      // const h1Element = document.createElement("h1");
      // h1Element.textContent = "Book Your Flight";

      // const formElement = document.createElement("form");

      // const formGroup1Div = document.createElement("div");
      // formGroup1Div.classList.add("form-group");

      // const formCheckboxDiv = document.createElement("div");
      // formCheckboxDiv.classList.add("form-checkbox");

      // const roundtripLabel = document.createElement("label");
      // roundtripLabel.htmlFor = "roundtrip";

      // const roundtripInput = document.createElement("input");
      // roundtripInput.type = "radio";
      // roundtripInput.id = "roundtrip";
      // roundtripInput.name = "flight-type";

      // const roundtripSpan = document.createElement("span");
      // roundtripLabel.appendChild(roundtripInput);
      // roundtripLabel.appendChild(roundtripSpan);
      // roundtripSpan.textContent = "Roundtrip";

      // const oneWayLabel = document.createElement("label");
      // oneWayLabel.htmlFor = "one-way";

      // const oneWayInput = document.createElement("input");
      // oneWayInput.type = "radio";
      // oneWayInput.id = "one-way";
      // oneWayInput.name = "flight-type";

      // const oneWaySpan = document.createElement("span");
      // oneWayLabel.appendChild(oneWayInput);
      // oneWayLabel.appendChild(oneWaySpan);
      // oneWaySpan.textContent = "One way";

      // const multiCityLabel = document.createElement("label");
      // multiCityLabel.htmlFor = "multi-city";

      // const multiCityInput = document.createElement("input");
      // multiCityInput.type = "radio";
      // multiCityInput.id = "multi-city";
      // multiCityInput.name = "flight-type";

      // const multiCitySpan = document.createElement("span");
      // multiCityLabel.appendChild(multiCityInput);
      // multiCityLabel.appendChild(multiCitySpan);
      // multiCitySpan.textContent = "Multi-City";

      // formCheckboxDiv.appendChild(roundtripLabel);
      // formCheckboxDiv.appendChild(oneWayLabel);
      // formCheckboxDiv.appendChild(multiCityLabel);

      // formGroup1Div.appendChild(formCheckboxDiv);

      // const formGroup2Div = document.createElement("div");
      // formGroup2Div.classList.add("form-group");

      // const flyingFromInput = document.createElement("input");
      // flyingFromInput.classList.add("form-control");
      // flyingFromInput.type = "text";

      // const flyingFromSpan = document.createElement("span");
      // flyingFromSpan.classList.add("form-label");
      // flyingFromSpan.textContent = "Flying from";

      // formGroup2Div.appendChild(flyingFromInput);
      // formGroup2Div.appendChild(flyingFromSpan);

      // const formGroup3Div = document.createElement("div");
      // formGroup3Div.classList.add("form-group");

      // const flyingToInput = document.createElement("input");
      // flyingToInput.classList.add("form-control");
      // flyingToInput.type = "text";

      // const flyingToSpan = document.createElement("span");
      // flyingToSpan.classList.add("form-label");
      // flyingToSpan.textContent = "Flying to";

      // formGroup3Div.appendChild(flyingToInput);
      // formGroup3Div.appendChild(flyingToSpan);

      // const row2Div = document.createElement("div");
      // row2Div.classList.add("row");

      // const col1Div = document.createElement("div");
      // col1Div.classList.add("col-md-6");

      // const formGroup4Div = document.createElement("div");
      // formGroup4Div.classList.add("form-group");

      // const checkInInput = document.createElement("input");
      // checkInInput.classList.add("form-control");
      // checkInInput.type = "date";

      // const checkInSpan = document.createElement("span");
      // checkInSpan.classList.add("form-label");
      // checkInSpan.textContent = "Check In";

      // formGroup4Div.appendChild(checkInInput);
      // formGroup4Div.appendChild(checkInSpan);

      // col1Div.appendChild(formGroup4Div);

      // const col2Div = document.createElement("div");
      // col2Div.classList.add("col-md-6");

      // const formGroup5Div = document.createElement("div");
      // formGroup5Div.classList.add("form-group");

      // const checkOutInput = document.createElement("input");
      // checkOutInput.classList.add("form-control");
      // checkOutInput.type = "date";

      // const checkOutSpan = document.createElement("span");
      // checkOutSpan.classList.add("form-label");
      // checkOutSpan.textContent = "Check Out";

      // formGroup5Div.appendChild(checkOutInput);
      // formGroup5Div.appendChild(checkOutSpan);

      // col2Div.appendChild(formGroup5Div);

      // row2Div.appendChild(col1Div);
      // row2Div.appendChild(col2Div);

      // const row3Div = document.createElement("div");
      // row3Div.classList.add("row");

      // const col3Div = document.createElement("div");
      // col3Div.classList.add("col-md-4");

      // const formGroup6Div = document.createElement("div");
      // formGroup6Div.classList.add("form-group");

      // const travelClassSelect = document.createElement("select");
      // travelClassSelect.classList.add("form-control");

      // const economyOption = document.createElement("option");
      // economyOption.textContent = "Economy class";

      // const businessOption = document.createElement("option");
      // businessOption.textContent = "Business class";

      // const firstOption = document.createElement("option");
      // firstOption.textContent = "First class";

      // travelClassSelect.appendChild(economyOption);
      // travelClassSelect.appendChild(businessOption);
      // travelClassSelect.appendChild(firstOption);

      // const selectArrowSpan1 = document.createElement("span");
      // selectArrowSpan1.classList.add("select-arrow");

      // const travelClassSpan = document.createElement("span");
      // travelClassSpan.classList.add("form-label");
      // travelClassSpan.textContent = "Travel class";

      // formGroup6Div.appendChild(travelClassSelect);
      // formGroup6Div.appendChild(selectArrowSpan1);
      // formGroup6Div.appendChild(travelClassSpan);

      // col3Div.appendChild(formGroup6Div);

      // const col4Div = document.createElement("div");
      // col4Div.classList.add("col-md-4");

      // const formGroup7Div = document.createElement("div");
      // formGroup7Div.classList.add("form-group");

      // const adultsSelect = document.createElement("select");
      // adultsSelect.classList.add("form-control");

      // const option1 = document.createElement("option");
      // option1.textContent = "1";

      // const option2 = document.createElement("option");
      // option2.textContent = "2";

      // const option3 = document.createElement("option");
      // option3.textContent = "3";

      // adultsSelect.appendChild(option1);
      // adultsSelect.appendChild(option2);
      // adultsSelect.appendChild(option3);

      // const selectArrowSpan2 = document.createElement("span");
      // selectArrowSpan2.classList.add("select-arrow");

      // const adultsSpan = document.createElement("span");
      // adultsSpan.classList.add("form-label");
      // adultsSpan.textContent = "Adults";

      // formGroup7Div.appendChild(adultsSelect);
      // formGroup7Div.appendChild(selectArrowSpan2);
      // formGroup7Div.appendChild(adultsSpan);

      // col4Div.appendChild(formGroup7Div);

      // const col5Div = document.createElement("div");
      // col5Div.classList.add("col-md-4");

      // const formGroup8Div = document.createElement("div");
      // formGroup8Div.classList.add("form-group");

      // const childrenSelect = document.createElement("select");
      // childrenSelect.classList.add("form-control");

      // const option0 = document.createElement("option");
      // option0.textContent = "0";

      // const option4 = document.createElement("option");
      // option4.textContent = "1";

      // const option5 = document.createElement("option");
      // option5.textContent = "2";

      // childrenSelect.appendChild(option0);
      // childrenSelect.appendChild(option4);
      // childrenSelect.appendChild(option5);

      // const selectArrowSpan3 = document.createElement("span");
      // selectArrowSpan3.classList.add("select-arrow");

      // const childrenSpan = document.createElement("span");
      // childrenSpan.classList.add("form-label");
      // childrenSpan.textContent = "Children";

      // formGroup8Div.appendChild(childrenSelect);
      // formGroup8Div.appendChild(selectArrowSpan3);
      // formGroup8Div.appendChild(childrenSpan);

      // col5Div.appendChild(formGroup8Div);

      // row3Div.appendChild(col3Div);
      // row3Div.appendChild(col4Div);
      // row3Div.appendChild(col5Div);

      // const formBtnDiv = document.createElement("div");
      // formBtnDiv.classList.add("form-btn");

      // const submitBtn = document.createElement("button");
      // submitBtn.classList.add("submit-btn");
      // submitBtn.textContent = "Check availability";
      // submitBtn.id = "book-now-button"; // add ID to the button element

      // formBtnDiv.appendChild(submitBtn);

      // formElement.appendChild(formGroup1Div);
      // formElement.appendChild(formGroup2Div);
      // formElement.appendChild(formGroup3Div);
      // formElement.appendChild(row2Div);
      // formElement.appendChild(row3Div);
      // formElement.appendChild(formBtnDiv);

      // bookingFormDiv.appendChild(formHeaderDiv);
      // bookingFormDiv.appendChild(formElement);

      // rowDiv.appendChild(bookingFormDiv);

      // containerDiv.appendChild(rowDiv);

      // sectionCenterDiv.appendChild(containerDiv);

      // bookingDiv.appendChild(sectionCenterDiv);

      // bookingDiv.appendChild(popup);

      // document.body.appendChild(bookingDiv);
      // popup.classList.add("popup");


      // ==========================================================================
      // create map container div
      const mapDiv = document.createElement("div");
      mapDiv.id = "mapid";
      mapDiv.style.height = "400px";
      mapDiv.style.width = "100%";

      // append map container to the bookingDiv
      bookingDiv.appendChild(mapDiv);

      // add Leaflet script tag to the document head
      const leafletScript = document.createElement("script");
      leafletScript.src =
        "https://cdn.jsdelivr.net/npm/leaflet@1.7.1/dist/leaflet.js";
      document.head.appendChild(leafletScript);

      // wait for Leaflet script to load before initializing the map
      leafletScript.onload = function () {
        // initialize the map
        const mymap = L.map("mapid").setView([51.505, -0.09], 13);

        // add tile layer to the map
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution:
            'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
        }).addTo(mymap);
      };
      // ==========================================================================

      // Tạo một lớp CSS để hiển thị popup
      var style = document.createElement("style");
      style.innerHTML =
        ".popup {position: fixed;top: 0;left: 0;width: 100%;height: 100%;background-color: rgba(0, 0, 0, 0.5);display: flex;justify-content: center;align-items: center;z-index: 999;}.popup section.reservation {background-color: #fff;padding: 20px;border-radius: 10px;}";
      document.head.appendChild(style);

      // Lắng nghe sự kiện nhấn nút Done trong popup để đóng popup
      popup
        .querySelector("input[type='submit']")
        .addEventListener("click", function () {
          document.body.removeChild(popup);
        });
    });
}, 1000);
