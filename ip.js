
fetch('https://api64.ipify.org?format=json')
    .then((response) => response.json())
    .then((json) => {
        document.getElementById('ip').innerHTML = json.ip;
    });
    document.getElementById('ip').innerHTML=0;

    function myFunction() {
        /* Get the text field */
        var copyText = document.getElementById("op");
      
        /* Select the text field */
        copyText.select();
        copyText.setSelectionRange(0, 99999); /* For mobile devices */
      
        /* Copy the text inside the text field */
        document.execCommand("copy");
      
        /* Alert the copied text */
        alert("Copied the text: " + copyText.value);
      }