function animateSearchResults() {
    var results = document.getElementsByClassName("result");
    for (var i = 0; i < results.length; i++) {
        var result = results[i];
        result.classList.add("animate");
    }
}

function showDescription(resultId) {
    var results = document.getElementsByClassName("result");
    for (var i = 0; i < results.length; i++) {
        var result = results[i];
        if (result.id !== resultId) {
            result.style.display = "none";
        } else {
            result.removeAttribute("onclick");
        }
    }

    var description = document.getElementById(resultId + "-description");
    description.style.display = "block";

    var returnButton = document.getElementById("return-button");
    returnButton.style.display = "block";

    var clickedResult = document.getElementById(resultId);
    clickedResult.classList.add("enlarge");
}

function returnToResults(resultId) {
    var results = document.getElementsByClassName("result");
    for (var i = 0; i < results.length; i++) {
        results[i].style.display = "block";
        results[i].setAttribute("onclick", "showDescription('" + results[i].id + "')");
    }

    var descriptions = document.getElementsByClassName("description");
    for (var i = 0; i < descriptions.length; i++) {
        descriptions[i].style.display = "none";
    }

    var returnButton = document.getElementById("return-button");
    returnButton.style.display = "none";

    var enlargedResult = document.getElementsByClassName("enlarge");
    if (enlargedResult.length > 0) {
        enlargedResult[0].classList.remove("enlarge");
    }
}

function showNoResults() {
    const noResultsContainer = document.getElementById('no-results-message');
    noResultsContainer.style.display = 'block';
    noResultsContainer.classList.add('show');
}

window.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.querySelector(".search-bar input");
    const searchResults = document.getElementsByClassName("result");

    function searchProducts() {
        const keyword = searchInput.value.toLowerCase();
        let found = false;

        Array.from(searchResults).forEach(function (result) {
            const resultId = result.id.toLowerCase();
            const resultName = result.getElementsByTagName("h3")[0].innerText.toLowerCase();
            const resultDescription = result.getElementsByTagName("p")[0].innerText.toLowerCase();

            if (resultId.includes(keyword) || resultName.includes(keyword) || resultDescription.includes(keyword)) {
                result.style.display = "block";
                result.classList.add("animate");
                found = true;
            } else {
                showNoResults();
                result.style.display = "none";
            }
        });

        const noResultsMessage = document.getElementById("no-results-message");
        noResultsMessage.style.display = found ? "none" : "block";
    }

    searchInput.addEventListener("input", searchProducts);
});
