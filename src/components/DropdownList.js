export default class DropdownList {
  constructor(dropdown, cityCoords) {
    this._dropdown = dropdown;
    this._cityCoords = cityCoords;
    this._dropdownContainer = document.querySelector(`.${this._dropdown}`);
    this._dropdownButton =
      this._dropdownContainer.querySelector(".dropdown__button");
    this._dropdownList =
      this._dropdownContainer.querySelector(".dropdown__select");
    this.currenPosition = "Moscow";
    this._openDropdownList = this._openDropdownList.bind(this);
    this._closeDropdownList = this._closeDropdownList.bind(this);
    this.getCurrenCoord = this.getCurrenCoord.bind(this);
  }

  _openDropdownList() {
    this._dropdownList.classList.remove("dropdown__select_close");
  }

  _closeDropdownList() {
    this._dropdownList.classList.add("dropdown__select_close");
  }

  _handeClose(evt) {
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

  _changeCurrenPlace(evt) {
    if (evt.target.classList.contains("dropdown__option")) {
      this.currenPosition = evt.target.textContent;
      this._dropdownButton.textContent = this.currenPosition;
      this._closeDropdownList();      
    }
  }

  getCurrenCoord() {    
    return this._cityCoords[this.currenPosition.split(" ").join("")];
  }

  setEventListener() {
    document.addEventListener("click", (evt) => {
      this._handeClose(evt);
    });
    this._dropdownList.addEventListener("click", (evt) => {
      this._changeCurrenPlace(evt);
    });
  }
}
