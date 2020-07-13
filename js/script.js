

function invioTastiera() {

  $("#scrivi").keydown(function(){
    if (event.which == 13 || event.which == 76) {
      inviaMes()
    }
  });
}

function scriviMes(){
  $('#invia').click(inviaMes);
}


function inviaMes() {
  var mes;
  mes = $("#scrivi").val();
  console.log(mes);
  var myClone = $('.template p').clone();
  console.log(myClone);
  myClone.append(mes);
  $('.messaggi').append(myClone);
}





function init() {
  scriviMes();
  invioTastiera();

}

$(document).ready(init);
