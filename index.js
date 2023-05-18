

function alertV2(){
    alert("Hi everyone!")
}

function titleClick(element){
    console.log(element.innerText);
    element.innerText = "MR Duck"
}

function likeDbz(element){
    console.log(element.innerText);
    // element.innerText = parseInt(element.innerText) + 1
    element.innerText++
    // console.log(typeof(element.innerText))
    let secPTag = document.querySelector("#sec_tag")
    console.log(secPTag);
}

