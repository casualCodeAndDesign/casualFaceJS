FB.api(
    "/BrewDogHel",
    function (response) {
        if (response && !response.error) {
            alert("Hello World");
        }
    }
);

window.onload = FB.api;