FB.api(
    "/BrewDogHel",
    function (response) {
        if (response && !response.error) {
            GreatSuccess();
        }
    }
);

function GreatSuccess() {
    alert("Hello World");
}