function getRandom() {
    //Math.ramdom() 함수 사용해보기
    let num = Math.random() * 100;
    num = Math.ceil(num) * 1000;
    document.querySelector("#amount").value = num;
}
function touchNumberButtom() {
    $("#phoneNumber").val($("#phoneNumber").val() + this.value);
}

window.onload = function() {
    document.querySelector("#setAmount").addEventListener("click", getRandom);
    $(".btnNumber").click(touchNumberButtom);
}

/*$(document).ready(function() {
    //버튼의 이벤트 핸들러를 등록한다.
});*/