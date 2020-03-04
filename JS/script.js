(function () {
    var ul = document.querySelector("ul");
    var currentStation = document.querySelector(".current-station");
    var stationInfo = document.getElementById("info");
    var picture = document.querySelector(".picture");
    var stations = [];
    var myRequest = new Request("https://gist.githubusercontent.com/gzvirblyte/745c8da9acb6d2d345b616775a8e4c30/raw/59007986c7e2360465295c642e53060287d5e2a3/stations.json");

    fetch(myRequest)
        .then(function (resp) {
            return resp.json();
        })
        .then(function (data) {
            data.results.forEach(function (item) {
                stations.push(item);
            })
            displayStations();
        })

    function displayStations() {
        stations.forEach(function (station) {
            var li = document.createElement("li");
            li.innerHTML = `${station.station}<span class="frequency">${station.frequency}</span>`;
            ul.appendChild(li);
            li.addEventListener("click", function showStationInfo() {
                currentStation.innerHTML = `<span class="current">CURRENTLY PLAYING</span><br><span class="current-station-font">${station.station}</span>`;
                var infoDisplay = document.createElement("div");
                infoDisplay = stationInfo;
                picture.src = station.picture;
                ul.insertBefore(infoDisplay, li);
                stationInfo.style.display = "block";
            })
        })
    }
})();
