import data from './languageTable.json' with {type : 'json'}

let link = document.querySelectorAll('a')
console.log(link[0]);
console.log(link[1]);
console.log(link[2]);
console.log(link[3]);
let paragrafo = document.querySelectorAll('p')
let titulo = document.querySelectorAll('h1')
let subtitulo = document.querySelectorAll('h2')
let subsubtitulo = document.querySelectorAll('h3')
let label = document.querySelectorAll('label')
let button = document.querySelectorAll('button')
let isTranslated = true

function translate()
{
    if(isTranslated == true) 
    {
        link[1].innerText = data.a1E
        link[2].innerText = data.a2E
        link[3].innerText = data.a3E
        paragrafo[0].innerText = data.p0E
        paragrafo[1].innerText = data.p1E
        paragrafo[2].innerText = data.p2E
        paragrafo[3].innerText = data.p3E
        titulo[1].innerText = data.h11E
        titulo[2].innerText = data.h12E
        subtitulo[0].innerText = data.h2E
        subsubtitulo[0].innerText = data.h31E
        subsubtitulo[1].innerText = data.h32E
        label[0].innerText = data.label0E
        label[1].innerText = data.label1E
        label[3].innerText = data.label3E
        label[4].innerText = data.label4E
        button[0].innerText = data.button0P
        button[1].innerText = data.button1E
        button[2].innerText = data.button2E
        isTranslated = false
    } else if(isTranslated == false)
    {
        link[1].innerText = data.a1P
        link[2].innerText = data.a2P
        link[3].innerText = data.a3P
        paragrafo[0].innerText = data.p0P
        paragrafo[1].innerText = data.p1P
        paragrafo[2].innerText = data.p2P
        paragrafo[3].innerText = data.p3P
        titulo[1].innerText = data.h11P
        titulo[2].innerText = data.h12P
        subtitulo[0].innerText = data.h2P
        subsubtitulo[0].innerText = data.h31P
        subsubtitulo[1].innerText = data.h32P
        label[0].innerText = data.label0P
        label[1].innerText = data.label1P
        label[3].innerText = data.label3P
        label[4].innerText = data.label4P
        button[0].innerText = data.button0E
        button[1].innerText = data.button1P
        button[2].innerText = data.button2P
        isTranslated = true
    }
}

translate()

button[0].onclick = translate