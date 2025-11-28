class Dropdown {
  open;
  dropdown;
  dropdownItem;
  active;

  constructor(dropdown, dropdownItem) {
    this.dropdown = dropdown;
    this.open = false;
    this.dropdownItem = dropdownItem;
  }

  handleOpen() {
    this.open = true;
    this.dropdown.addClass("some-state");

    // restore active element
    handleSelect(ele){}

  }
  handleClose() {
    this.open = close;
  }

  handleSelect(ele){
    active=ele;
  }

  //   ... any other required methods or functions
}

const Dropdown = function () {
  let open = false;

  function init() {}

  function open() {
    open = !open;
  }

  function close() {
    open = !open;
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const dropdownsOnPage = document.querySelectorAll(
    '[data-sl-component="componentName"]'
  );

  const dropdownItemA = [1, 2, 3, 4, 5];
  const dropdownItemB = [6, 7, 8, 9, 10];

  const ele1 =<div></div>
  const ele2 =<div></div>

  new Dropdown(ele1, dropdownItemA);
  new Dropdown(ele2, dropdownItemB);


  for (const dropdown of dropdownsOnPage) {
    new Dropdown(dropdown, dropdownItem);
  }
});
