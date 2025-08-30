function generate(){
    let min=parseInt(document.getElementById("min").value);
    let max=parseInt(document.getElementById("max").value);
    let result=document.getElementById("result");

     if (min > max) {
        result.innerText="Invalid Range";
        return;
    }

    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    result.innerText="Generated Number: " + randomNumber;
}

function reset(){
    document.getElementById("min").value="";
    document.getElementById("max").value = "";
    document.getElementById("result").innerText="Click the button to generate";
}

