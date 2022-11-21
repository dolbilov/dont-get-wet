export default class DropdownList {
  constructor(dropdown, cityCoords, onChangeHandler) {
    this._dropdown = dropdown;
    this._cityCoords = cityCoords;
    this._onChangeHandler = onChangeHandler;

    this._dropdownContainer = document.querySelector(`.${this._dropdown}`);
    this._dropdownButton =
      this._dropdownContainer.querySelector(".dropdown__button");
    this._dropdownList =
      this._dropdownContainer.querySelector(".dropdown__select");
    this.currentPosition = "Moscow";
    this._openDropdownList = this._openDropdownList.bind(this);
    this._closeDropdownList = this._closeDropdownList.bind(this);
    this.getCurrentCoords = this.getCurrentCoords.bind(this);
  }

  _openDropdownList() {
    this._dropdownList.classList.remove("dropdown__select_close");
  }

  _closeDropdownList() {
    this._dropdownList.classList.add("dropdown__select_close");
  }

  _handleClose(evt) {
    if (
      evt.target.classList.contains("dropdown__button") &&
      this._dropdownList.classList.contains("dropdown__select_close")
    ) {
      this._openDropdownList();
    } else {
      this._closeDropdownList();
    }

    if (evt.target.classList.contains("body")) {
      this._closeDropdownList();
    }
  }

  _changeCurrentPlace(evt) {
    if (evt.target.classList.contains("dropdown__option")) {
      this.currentPosition = evt.target.textContent;
      this._dropdownButton.textContent = this.currentPosition;
      this._closeDropdownList();
    }
  }

  getCurrentCoords() {
    return this._cityCoords[this.currentPosition.split(" ").join("")];
  }

  setEventListener() {
    document.addEventListener("click", (evt) => {
      this._handleClose(evt);
    });
    this._dropdownList.addEventListener("click", (evt) => {
      this._changeCurrentPlace(evt);

      const currentCoords = this.getCurrentCoords();
      this._onChangeHandler(currentCoords);
    });
  }
}
