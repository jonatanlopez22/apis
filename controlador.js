
let url="https://api.spotify.com/v1/artists/2laDE3zsNJYoX7n8nF3YPJ/top-tracks?market=US";


let urlPOST = "https://accounts.spotify.com/api/token";


let llave1 = "grant_type=client_credentials";
let llave2 = "client_id=237db8249664421f92206f06294930f8";
let llave3 = "client_secret=1a54c8d32ce9458fbab7dafabf02cdf9";

let parametrosPOST = {
    method: "POST",
    headers: { "Content-Type":   'application/x-www-form-urlencoded' },
    body: `${llave1}&${llave2}&${llave3}`
}


fetch(urlPOST, parametrosPOST)
    .then(respuesta => respuesta.json())
    .then(datos => obtenerToken(datos));

function obtenerToken(datos) {
    let token = datos.token_type + " " + datos.access_token;
    let parametrosGET = {

        method: "GET",
        headers: { "Authorization": token }

    }
    fetch(url, parametrosGET)
    .then(respuesta=>respuesta.json())
    .then(datos=>depurarDatos(datos));
}

function depurarDatos(datos)  {


    
    let titulo=document.getElementById("titulo");
    let imagen=document.getElementById("imagen");
    let audio=document.getElementById("audio");
    
    titulo.textContent=datos.tracks[3].name;
    imagen.src=datos.tracks[3].album.images[0].url;
    audio.src=datos.tracks[3].preview_url;
    
    let titulo1=document.getElementById("titulo1");
    let imagen1=document.getElementById("imagen1");
    let audio1=document.getElementById("audio1");
    
    titulo1.textContent=datos.tracks[5].name;
    imagen1.src=datos.tracks[5].album.images[0].url;
    audio1.src=datos.tracks[5].preview_url;
    
    let titulo2=document.getElementById("titulo2");
    let imagen2=document.getElementById("imagen2");
    let audio2=document.getElementById("audio2");
    
    titulo2.textContent=datos.tracks[2].name;
    imagen2.src=datos.tracks[2].album.images[0].url;
    audio2.src=datos.tracks[2].preview_url;
    
    let titulo3=document.getElementById("titulo3");
    let imagen3=document.getElementById("imagen3");
    let audio3=document.getElementById("audio3");
    
    titulo3.textContent=datos.tracks[6].name;
    imagen3.src=datos.tracks[6].album.images[0].url;
    audio3.src=datos.tracks[6].preview_url;
    
    let titulo7=document.getElementById("titulo4");
    let imagen7=document.getElementById("imagen4");
    let audio7=document.getElementById("audio4");
    
    titulo7.textContent=datos.tracks[1].name;
    imagen7.src=datos.tracks[1].album.images[0].url;
    audio7.src=datos.tracks[1].preview_url;
    
    let titulo8=document.getElementById("titulo5");
    let imagen8=document.getElementById("imagen5");
    let audio8=document.getElementById("audio5");
    
    titulo8.textContent=datos.tracks[7].name;
    imagen8.src=datos.tracks[7].album.images[0].url;
    audio8.src=datos.tracks[7].preview_url;
    
    let titulo9=document.getElementById("titulo6");
    let imagen9=document.getElementById("imagen6");
    let audio9=document.getElementById("audio6");
    
    titulo9.textContent=datos.tracks[8].name;
    imagen9.src=datos.tracks[8].album.images[0].url;
    audio9.src=datos.tracks[8].preview_url;

 
    
    }  
    
