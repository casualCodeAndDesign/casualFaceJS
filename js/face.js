function facebookInit() {
    // Initialize Facebook Connection
    FB.api(
        "/BrewDogHel",
        'GET',
        {"fields":"posts.limit(10)"},
        function (response) {
            if (response && !response.error) {
                console.log("Success....")
                var faceSection = document.getElementById("facebook");
                var node = document.createElement("P");
                var textNode = document.createTextNode("Success...");
                node.appendChild(textNode);
                faceSection.appendChild(node);
            }
        }
    );
};
