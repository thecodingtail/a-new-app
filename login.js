  export{inputRoomCreateEl, inputRoomJoinEl}


const submitBtnEl = document.getElementById("submit-btn")
const inputRoomCreateEl = document.getElementById("create-room-input").value
const inputRoomJoinEl = document.getElementById("join-room-input").value


submitBtnEl.addEventListener("click", function changeSite() {

    alert("clicked")
    document.location="index.html"
  
})

