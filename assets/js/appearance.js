const sitePreference = document.documentElement.getAttribute(
  "data-default-appearance",
);
let userPreference = null;
try {
  userPreference = localStorage.getItem("appearance");
} catch {} // default appearance

function saveAppearance(appearance) {
  try {
    localStorage.setItem("appearance", appearance);
  } catch {} // switch appearance anyway
}

function clearAppearance() {
  try {
    localStorage.removeItem("appearance");
  } catch {} // can't clear it anyway
}

if (
  (sitePreference === "dark" && userPreference === null) ||
  userPreference === "dark"
) {
  document.documentElement.classList.add("dark");
}

if (document.documentElement.getAttribute("data-auto-appearance") === "true") {
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches &&
    userPreference !== "light"
  ) {
    document.documentElement.classList.add("dark");
  }
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (event) => {
      if (event.matches) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    });
}

window.addEventListener("DOMContentLoaded", (event) => {
  const switcher = document.getElementById("appearance-switcher");
  const switcherMobile = document.getElementById("appearance-switcher-mobile");

  const darkLabel = {{ i18n "footer.dark_appearance" | jsonify }};
  const lightLabel = {{ i18n "footer.light_appearance" | jsonify }};

  updateMeta();

  const updateTooltip = (targetAppearance) => {
    const label = targetAppearance === "dark" ? lightLabel : darkLabel;
    if (switcher) {
      switcher.setAttribute("aria-label", label);
      switcher.setAttribute("title", label);
    }
    if (switcherMobile) {
      switcherMobile.setAttribute("aria-label", label);
      switcherMobile.setAttribute("title", label);
    }
  };

  updateTooltip(getTargetAppearance());

  if (switcher) {
    switcher.addEventListener("click", () => {
      toggleDark();
      var targetAppearance = getTargetAppearance();
      saveAppearance(targetAppearance);
      updateMeta();
      updateTooltip(targetAppearance);
    });
    switcher.addEventListener("contextmenu", (event) => {
      event.preventDefault();
      clearAppearance();
    });
  }
  if (switcherMobile) {
    switcherMobile.addEventListener("click", () => {
      toggleDark();
      var targetAppearance = getTargetAppearance();
      saveAppearance(targetAppearance);
      updateMeta();
      updateTooltip(targetAppearance);
    });
    switcherMobile.addEventListener("contextmenu", (event) => {
      event.preventDefault();
      clearAppearance();
    });
  }
});

var updateMeta = () => {
  var elem, style;
  elem = document.querySelector("body");
  style = getComputedStyle(elem);
  document
    .querySelector('meta[name="theme-color"]')
    .setAttribute("content", style.backgroundColor);
};

var getTargetAppearance = () => {
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
};

var toggleDark = () => {
  document.documentElement.classList.add("no-transitions");
  document.documentElement.classList.toggle("dark");
  void document.documentElement.offsetHeight; // force reflow to guarantee theme switches before transitions return
  document.documentElement.classList.remove("no-transitions");
};
