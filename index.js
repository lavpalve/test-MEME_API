var getMeme;
var refreshMeme;

getMeme = () =>{
    fetch("https://meme-api.herokuapp.com/gimme")
    .then(function(response){
        console.log(response);
        return response.json();
    })
    .then(function(data){
        console.log(data);
        for(var i=0;i<data.preview.length;i++){
            var createEle = document.createElement('div');
            createEle.className = 'col-4 memeBox pb-3';
            createEle.innerHTML = `<img src=${data.preview[i]}>`;
            document.getElementById('memeRow').appendChild(createEle);
        }

    });
}

refreshMeme = () =>{
    document.getElementById('memeRow').innerHTML = "";
    getMeme();
}

getMeme();