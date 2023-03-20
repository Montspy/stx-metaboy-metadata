// console.log("loaded");
const darkTheme = document.querySelector("#dark");
const root = document.documentElement;

const storeTheme = (dark) => {
    localStorage.setItem("theme-dark", dark);
};

darkTheme.addEventListener("change", (e) => {
    console.log("changed" + e.currentTarget.checked);

    if (e.currentTarget.checked) {
        root.setAttribute("data-theme", "dark");
        storeTheme("dark");
    }
    else {
        root.setAttribute("data-theme", "light");
        storeTheme("light");
    }
});

const retrieveTheme = () => {
    const theme = localStorage.getItem("theme-dark");
    if (theme === "dark") {
        root.setAttribute("data-theme", "dark");
    }
    else {
        root.setAttribute("data-theme", "light");
    }
};

document.onload = retrieveTheme();