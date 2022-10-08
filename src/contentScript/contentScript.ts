const rules: {
    [url: string]: () => void;
} = {
    "https://economictimes.indiatimes.com/": economictTimes,
};

function economictTimes() {
    const parentOne = document.getElementById(
        "google_ads_iframe_/7176/Economictimes/ET_Home/ET_Home_Home/ET_HP_Skin_RHS_125_0__container__"
    );
    console.log(parentOne);
    // console.log(" i am present here bros");
    const wrapper = document.getElementById("SkinningContainer");
    parentOne.removeChild(wrapper);
}

if (document.URL in rules) {
    rules[document.URL]();
}

// console.log("I am present here before the window addeventListener");
