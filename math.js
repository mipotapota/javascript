function getRandom() {
    //Math.ramdom() 함수 사용해보기
    let num = Math.random() * 100;
    num = (Math.ceil(num) + ",000원");
    document.querySelector("#amount").value = num;
}
function touchNumberButtom() {
    if(($("#phoneNumber").val()+"").length == 3)
        $("#phoneNumber").val($("#phoneNumber").val() + "-" + this.value);
    else if(($("#phoneNumber").val()+"").length == 8)
        $("#phoneNumber").val($("#phoneNumber").val() + "-" + this.value);
    else
        $("#phoneNumber").val($("#phoneNumber").val() + this.value);
}
function touchBackSpace() {
    $("#phoneNumber").val(($("#phoneNumber").val()+"").substring(0, ($("#phoneNumber").val()+"").length-1));
}
function saveToStorage() {
    let saving = JSON.parse(localStorage.getItem($("#phoneNumber").val()));
    let arrSave = [];
    if(saving != null){
        saving.push($("#amount").val());
        arrSave = saving;
    }
    else {
        arrSave.push($("#amount").val());
    }
    //let value = $("#amount").val();
    localStorage.setItem($("#phoneNumber").val(), JSON.stringify(arrSave));
}

window.onload = function() {
    document.querySelector("#setAmount").addEventListener("click", getRandom);
    $(".btnNumber").click(touchNumberButtom);
    document.querySelector("#save").addEventListener("click", saveToStorage);
}

/*$(document).ready(function() {
    //버튼의 이벤트 핸들러를 등록한다.
});*/

