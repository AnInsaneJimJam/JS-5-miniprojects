const input = document.getElementById("input")

function check() {
    const value = input.value;
    const reverse = reverseString(value);
    if(value === reverse){
        alert("P A L i N D R O M E")
    }
    else{
        alert("Not today")
    }
    input.value = '';
}

function reverseString(str){
    return str.split("").reverse().join("");
}

