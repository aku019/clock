const op = document.querySelector('#output');
const ip = document.querySelector('#input');
const  btn= document.querySelector('#btn');
const  btn2= document.querySelector('#btn2');
const ipType = document.querySelector('#iptype');
const opType = document.querySelector('#optype');

const url = new URL('https://api.mymemory.translated.net/get');
function translate() {
    if (ipType.value === 'English' && opType.value === 'Hindi') {
       
        const param = { q: ip.value, langpair: 'en|hi' };
        Object.keys(param).forEach((key) => {
            url.searchParams.append(key, param[key]);
        });
        url.search = new URLSearchParams(param).toString();
        const promise = fetch(url);
        promise
            .then((response) => response.json())
            .then((json) => {
                op.value = json.responseData.translatedText;
            });
    }
    else if (ipType.value === 'English' && opType.value === 'English') {
        op.value=ip.value;
       
    }
    else if (ipType.value === 'English' && opType.value === 'Italian') {
       
        const param = { q: ip.value, langpair: 'en|it' };
        Object.keys(param).forEach((key) => {
            url.searchParams.append(key, param[key]);
        });
        url.search = new URLSearchParams(param).toString();
        const promise = fetch(url);
        promise
            .then((response) => response.json())
            .then((json) => {
                op.value = json.responseData.translatedText;
            });
    }
    else if (ipType.value === 'Hindi' && opType.value === 'English') {
       
        const param = { q: ip.value, langpair: 'hi|en' };
        Object.keys(param).forEach((key) => {
            url.searchParams.append(key, param[key]);
        });
        url.search = new URLSearchParams(param).toString();
        const promise = fetch(url);
        promise
            .then((response) => response.json())
            .then((json) => {
                op.value = json.responseData.translatedText;
            });
    }
    else if (ipType.value === 'Hindi' && opType.value === 'Hindi') {
        op.value=ip.value;
       
    }
    else if (ipType.value === 'Hindi' && opType.value === 'Italian') {
       
        const param = { q: ip.value, langpair: 'hi|it' };
        Object.keys(param).forEach((key) => {
            url.searchParams.append(key, param[key]);
        });
        url.search = new URLSearchParams(param).toString();
        const promise = fetch(url);
        promise
            .then((response) => response.json())
            .then((json) => {
                op.value = json.responseData.translatedText;
            });
    }
    else if (ipType.value === 'Italian' && opType.value === 'English') {
       
        const param = { q: ip.value, langpair: 'it|en' };
        Object.keys(param).forEach((key) => {
            url.searchParams.append(key, param[key]);
        });
        url.search = new URLSearchParams(param).toString();
        const promise = fetch(url);
        promise
            .then((response) => response.json())
            .then((json) => {
                op.value = json.responseData.translatedText;
            });
    }
    else if (ipType.value === 'Italian' && opType.value === 'Italian') {
        op.value=ip.value;
       
    }
    else if (ipType.value === 'Italian' && opType.value === 'Hindi') {
       
        const param = { q: ip.value, langpair: 'it|hi' };
        Object.keys(param).forEach((key) => {
            url.searchParams.append(key, param[key]);
        });
        url.search = new URLSearchParams(param).toString();
        const promise = fetch(url);
        promise
            .then((response) => response.json())
            .then((json) => {
                op.value = json.responseData.translatedText;
            });
    }
}

btn.addEventListener('click', translate);
btn2.addEventListener('click', copyFunction);

function copyFunction() {
    var copyText = document.getElementById("op");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
  }
