FB.api(
    "/BrewDogHel",
    'GET',
    {"fields":"posts.limit(10)"},
    function (response) {
        if (response && !response.error) {
            GreatSuccess();
        }
    }
);

function GreatSuccess() {
    alert("Hello World");
}