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
    console.log(response.genres);
        document.getElementById("genre").innerHTML = response.genres;
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
        output.style.border = "thick solid gold";
        document.body.appendChild(output);
    console.log(response.network);
    console.log(JSON.stringify(response.premiered));
        document.getElementById("premiered").innerHTML = response.premiered;
    console.log(response.rating);
        document.getElementById("rating").innerHTML = (JSON.stringify(response.rating.average))
    console.log(response.schedule);
    console.log(response.summary);
        document.getElementById("desc").innerHTML = (JSON.stringify(response.summary))
    document.getElementById('submit').removeAttribute("onclick");
});
}



async function getData(){
var input = document.getElementsByClassName("new").value
 const response = await fetch(api_start + input)
 const data = await response.json();
 const { genre, image, network, rating, schedule } = data
 console.log(genre);
};

