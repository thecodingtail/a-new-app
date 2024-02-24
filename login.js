  export{inputRoomCreateEl, inputRoomJoinEl}

console.log("hej")
const submitBtnEl = document.getElementById("submit-btn")
const inputRoomCreateEl = document.getElementById("create-room").value
const inputRoomJoinEl = document.getElementById("join-room").value


submitBtnEl.addEventListener("click", function changeSite() {

    alert("clicked")
    document.location="index.html"
  
})

