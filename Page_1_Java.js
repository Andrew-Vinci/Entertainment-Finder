var api_start2 = 'http://api.tvmaze.com/search/people?q=';

    function refreshPage(){
        window.location.reload();
    } 

    function actorLookUp(){
        var input = document.getElementById("show").value;
        fetch(api_start2 + input)
        .then(data => {
            return data.json();
        })
        .then(response => {
            console.log(response);
            console.log(JSON.stringify(response[0].person.name));
                document.getElementById("person").innerHTML = (JSON.stringify(response[0].person.name));
            console.log(response[0].person.image.original);
                var output = document.createElement('img');
                output.src = response[0].person.image.original;
                output.width = 250;
                output.length = 250;
                output.style.position = "absolute";
                output.style.right = 0;
                output.style.left = "-4";
                output.style.top = "-4";
                output.style.bottom = "225px";
                output.style.border = "thick solid gold";
                document.body.appendChild(output);
            console.log(response[0].person.country.name);
                document.getElementById("country").innerHTML = response[0].person.country.name;
            console.log(response[0].person.birthday);
                document.getElementById("birthday").innerHTML = response[0].person.birthday;
            console.log(response[0].person.gender);
                document.getElementById("gender").innerHTML = response[0].person.gender;
            document.getElementById('submit').removeAttribute("onclick");
        });
        }
    