FB.api(
    "/BrewDogHel",
    'GET',
    {"fields":"posts.limit(10)"},
    function (response) {
        if (response && !response.error) {
            console.log("Success....")
        }
    }
);
