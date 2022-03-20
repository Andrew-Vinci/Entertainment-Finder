var api_start = 'http://api.tvmaze.com/singlesearch/shows?q=';

function refreshPage(){
    window.location.reload();
} 

function setup(){
var input = document.getElementById("show").value;
fetch(api_start + input)
.then(data => {
    return data.json();
})
.then(response => {
    console.log(response);
    console.log(response.name);
        document.getElementById("name").innerHTML = response.name;
    console.log(response.image);
        var output = document.createElement('img');
        output.src = response.image.original;
        output.width = 250;
        output.length = 250;
        output.style.position = "absolute";
        output.style.right = 0;
        output.style.left = "-4";
        output.style.top = "-4";
        output.style.bottom = "225px";
        output.style.border = "thick solid gold";
        document.body.appendChild(output);
    console.log(response.network.name);
        document.getElementById("network").innerHTML = response.network.name;
    console.log(response.runtime);
        document.getElementById("run").innerHTML = response.runtime;
    console.log(response.schedule.days);
        document.getElementById("days").innerHTML = response.schedule.days;
    console.log(response.schedule.time);
        document.getElementById("time").innerHTML = response.schedule.time;
    console.log(response.status);
        document.getElementById("status").innerHTML = response.status;
    console.log(response.externals.imdb);
        document.getElementById("imdb").innerHTML = response.externals.imdb;
    document.getElementById('submit').removeAttribute("onclick");
});
}