export default class DropdownList {
  constructor(dropdown) {
    this._dropdown = dropdown;
    this._dropdownContainer = document.querySelector(`.${this._dropdown}`);
    this._dropdownButton =
      this._dropdownContainer.querySelector(".dropdown__button");
    this._dropdownList =
      this._dropdownContainer.querySelector(".dropdown__select");
    this._currenPosition = null;
    this._openDropdownList = this._openDropdownList.bind(this);
    this._closeDropdownList = this._closeDropdownList.bind(this);
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
      this._currenPosition = evt.target.textContent;
      this._dropdownButton.textContent = this._currenPosition;      
      this._closeDropdownList();
    }
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
