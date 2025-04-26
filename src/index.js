import "./styles.css";

function initializeDropdown(dropdownElement) {
  const dropdownItems = dropdownElement.children[1].children;
  for (const item of dropdownItems) {
    item.style.display = "none";
  }
  dropdownElement.addEventListener("mouseover", () => {
    for (const item of dropdownItems) {
      item.style.display = "block";
    }
  });
  dropdownElement.addEventListener("mouseout", () => {
    for (const item of dropdownItems) {
      item.style.display = "none";
    }
  });
}

initializeDropdown(document.querySelector("#dropdown1"));
initializeDropdown(document.querySelector("#dropdown2"));

export default initializeDropdown;