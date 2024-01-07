class TravelBookingForm {
    constructor() {
        this.form = document.createElement('div');
        this.form.classList.add('card', 'shadow', 'mb-5', 'bg-white', 'rounded');

        this.createCardTitle();
        this.createIcons();
        this.createSearchText();
        this.createFirstRow();
        this.createSecondRow();
        this.createThirdRow();
        this.createFourthRow();
        this.createFifthRow();
        this.createFindFlightsButton();
    }

    createCardTitle() {
        const cardTitle = document.createElement('p');
        cardTitle.classList.add('card-title', 'text-center', 'shadow', 'mb-5', 'rounded');
        cardTitle.textContent = 'Travel Booking Form';
        this.form.appendChild(cardTitle);
    }

    createIcons() {
        const icons = document.createElement('div');
        icons.classList.add('icons', 'text-center');

        const planeIcon = document.createElement('i');
        planeIcon.classList.add('fa', 'fa-plane', 'fa-2x');
        planeIcon.setAttribute('aria-hidden', 'true');
        icons.appendChild(planeIcon);

        const taxiIcon = document.createElement('i');
        taxiIcon.classList.add('fa', 'fa-taxi', 'fa-2x');
        taxiIcon.setAttribute('aria-hidden', 'true');
        icons.appendChild(taxiIcon);

        const trainIcon = document.createElement('i');
        trainIcon.classList.add('fa', 'fa-train', 'fa-2x');
        trainIcon.setAttribute('aria-hidden', 'true');
        icons.appendChild(trainIcon);

        this.form.appendChild(icons);
    }

    createSearchText() {
        const searchText = document.createElement('p');
        searchText.classList.add('searchText');
        searchText.innerHTML = '<strong>Search For Cheap Flights</strong>';
        this.form.appendChild(searchText);
    }

    createFirstRow() {
        const firstRow = document.createElement('div');
        firstRow.classList.add('row', 'mb-3', 'mt-3');

        const oneWayOption = this.createRadioOption('One Way', 'gender', 'male');
        firstRow.appendChild(oneWayOption);

        const roundTripOption = this.createRadioOption('Round Trip', 'gender', 'male');
        firstRow.appendChild(roundTripOption);

        this.form.appendChild(firstRow);
    }

    createRadioOption(labelText, name, value) {
        const label = document.createElement('label');
        label.classList.add('radiobtn');

        const input = document.createElement('input');
        input.setAttribute('type', 'radio');
        input.setAttribute('name', name);
        input.setAttribute('value', value);

        const labelTextNode = document.createTextNode(labelText);
        label.appendChild(input);
        label.appendChild(labelTextNode);

        return label;
    }

    createSecondRow() {
        const secondRow = document.createElement('div');
        secondRow.classList.add('row');

        const fromCitySelect = this.createSelectOption('From City/Airport', ['Ho Chi Minh city', 'Ha Noi', 'Da Nang']);
        secondRow.appendChild(fromCitySelect);

        const toCitySelect = this.createSelectOption('To City/Airport', ['Ho Chi Minh city', 'Ha Noi', 'Da Nang']);
        secondRow.appendChild(toCitySelect);

        this.form.appendChild(secondRow);
    }

    createSelectOption(placeholderText, options) {
        const selectWrapper = document.createElement('div');
        selectWrapper.classList.add('col-sm-6');

        const select = document.createElement('select');
        select.classList.add('browser-default', 'custom-select', 'mb-4');
        select.setAttribute('id', 'select');
        select.appendChild(this.createOption(placeholderText, true));

        for (let i = 0; i < options.length; i++) {
            select.appendChild(this.createOption(options[i]));
        }

        selectWrapper.appendChild(select);

        return selectWrapper;
    }

    createOption(text, disabled = false, selected = false) {
        const option = document.createElement('option');
        option.setAttribute('value', text.toLowerCase().replace(' ', '-'));
        option.textContent = text;

        if (disabled) {
            option.setAttribute('disabled', '');
        }

        if (selected) {
            option.setAttribute('selected', '');
        }

        return option;
    }

    createThirdRow() {
        const thirdRow = document.createElement('div');
        thirdRow.classList.add('row');

        const departingInput = this.createInputWithIcon('Departing', '&#xf073;');
        thirdRow.appendChild(departingInput);

        const arrivingInput = this.createInputWithIcon('Arriving', '&#xf073;');
        thirdRow.appendChild(arrivingInput);

        this.form.appendChild(thirdRow);
    }

    createInputWithIcon(placeholderText, icon) {
        const inputWrapper = document.createElement('div');
        inputWrapper.classList.add('col-sm-6');

        const input = document.createElement('input');
        input.setAttribute('type', 'text');
        input.setAttribute('id', 'date-picker-example');
        input.setAttribute('class', 'form-control datepicker mb-4');
        input.setAttribute('style', 'font-family:Arial, FontAwesome');
        input.setAttribute('placeholder', icon + ' ' + placeholderText);

        inputWrapper.appendChild(input);

        return inputWrapper;
    }

    createFourthRow() {
        const fourthRow = document.createElement('div');
        fourthRow.classList.add('row', 'mt-4');

        const departingTimeSelect = this.createSelectOption('Anytime', ['6:00 AM', '3:00 PM', '6:00 PM']);
        fourthRow.appendChild(departingTimeSelect);

        const arrivingTimeSelect = this.createSelectOption('Anytime', ['6:00 AM', '3:00 PM', '6:00 PM']);
        fourthRow.appendChild(arrivingTimeSelect);

        this.form.appendChild(fourthRow);
    }

    createFifthRow() {
        const fifthRow = document.createElement('div');
        fifthRow.classList.add('row');

        const kidsSelect = this.createSelectOption('Kids(0-14)', ['1', '2', '3']);
        fifthRow.appendChild(kidsSelect);

        const adultsSelect = this.createSelectOption('Adults(15-64)', ['1', '2', '3']);
        fifthRow.appendChild(adultsSelect);

        const seniorsSelect = this.createSelectOption('Seniors(65+)', ['1', '2', '3']);
        fifthRow.appendChild(seniorsSelect);

        this.form.appendChild(fifthRow);
    }

    createFindFlightsButton() {
        const findFlightsButton = document.createElement('a');
        findFlightsButton.setAttribute('href', '#');
        findFlightsButton.classList.add('btn', 'btn-primary', 'float-right', 'mt-5');
        findFlightsButton.textContent = 'Find Flights';
        this.form.appendChild(findFlightsButton);
    }

    render(container) {
        container.appendChild(this.form);
    }
}

const container = document.querySelector('#container');
const travelBookingForm = new TravelBookingForm();
travelBookingForm.render(container);