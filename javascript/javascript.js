let submitButton = document.getElementById("submitButton"),
    text = document.getElementById("searchInput"),
    data,
    firstMovieShow = document.getElementById("searchForMovie"),
    notFoundImage = document.getElementById("not-found-image"),
    movieDetailDiv = document.getElementById("movieDetail"),
    moviePoster = document.getElementById("moviePoster"),
    movieRelased = document.getElementById("movieYear"),
    movieName = document.getElementById("movieName"),
    movieActors = document.getElementById("movieActors"),
    movieRunTime = document.getElementById("movieRunTime"),
    movieAwards = document.getElementById("movieAwards"),
    moviePlot = document.getElementById("moviePlot"),
    moiveRate = document.getElementById("movieRate");


function correctData(innerData, defaultData) {
    if (innerData !== 'N/A') {
        return innerData;
    } else {
        defaultData;
    }
}


function getData(apiLink) {
    return new Promise((resolve, reject) => {
        let api = new XMLHttpRequest();
        api.open('GET', apiLink,true);
        api.send();
        api.addEventListener("load", function () {
            if (this.readyState === 4 && this.status === 200) {
                resolve(JSON.parse(this.responseText));
            } else {
                reject('fuck this error');
            }
        });

    }).then(
        (res) => {
            console.log(res);
            data = res;
            if (data.Error === undefined) {
                let color;
                firstMovieShow.style.display = 'none';
                notFoundImage.style.display = 'none';
                movieDetailDiv.style.display = 'flex';
                if (data.Poster !== 'N/A') {
                    moviePoster.setAttribute("src", data.Poster);
                } else {
                    moviePoster.setAttribute('src', '');
                    moviePoster.setAttribute("alt", "Not Available");
                }

                movieName.innerHTML = `Movie Title: ${correctData(data.Title, "????")}`;
                movieRelased.innerHTML = `Year: ${correctData(data.Released, "????")}`;
                movieActors.innerHTML = `Actors: ${correctData(data.Actors, "????")}`;
                movieAwards.innerHTML = `Awards: ${correctData(data.Awards, "????")}`;
                movieRunTime.innerHTML = `Run Time: ${correctData(data.Runtime, "????")}`;
                moviePlot.innerHTML = `Plot: ${correctData(data.Plot, "????")}`;
                movieLanguage.innerHTML = `Language: ${correctData(data.Language, "????")}`;
                moiveRate.innerHTML = `imdb Rating: ${correctData(data.imdbRating, "????")}⭐`;
                document.getElementById("pageBackgroundLayout").style.cssText = 'width: 100%;height: 80%;';
                document.getElementById("pageBackgroundLayout").style.cssText = 'width: 100%;height: 100%;';
                document.getElementById("movieShow").style.backgroundColor = color

            } else {
                firstMovieShow.style.display = 'none';
                movieDetailDiv.style.cssText = "display: none";
                notFoundImage.style.display = 'block';
            }
        },
        (rej) => Error(rej),
    )
}

text.addEventListener("keydown", function (event) {
    if (event.code.toLowerCase() === "enter") {
        submitButton.click();
    }
})

submitButton.addEventListener("click", function () {
    text = document.getElementById("searchInput").value.trim();
    let apiLink = `https://www.omdbapi.com/?t=${text}&apikey=d2322989`;
    getData(apiLink);
});


window.addEventListener("resize", function () {
    this.document.getElementById("pageBackgroundLayout").style.cssText = `width: ${window.innerWidth};height: ${window.innerHeight};`
})