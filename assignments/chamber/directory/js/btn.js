document.querySelector("#list").addEventListener("click", () => {
    document.querySelector(".cards").classList.remove("myClass2");

    document.querySelector(".cards").classList.add("myClass1");
});

document.querySelector("#grid").addEventListener("click", () => {
    document.querySelector(".cards").classList.remove("myClass1");

    document.querySelector(".cards").classList.add("myClass2");
});