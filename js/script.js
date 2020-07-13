function scriviMes(){
  $('#invia').click(inviaMes)
}


function inviaMes() {
  var mes;
  mes = $("#scrivi").val();
  console.log(mes);
  $(mes).clone();
  $('p.testo').append(mes);

}


function init() {
  scriviMes();
  inviaMes();
}

$(document).ready(init);
