function check_text_length(){
    var text_field = document.getElementById("text_box");
    var text_val = text_field.value;
    var result = text_val.length + "자"
    document.getElementById("text_length").innerText = result;
    document.getElementById("text_length").textContent = result;
}

document.addEventListener("keyup", check_text_length)
