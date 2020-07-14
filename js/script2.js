// registra il valore dell'input
function addSentListener() {
  var target = $('#scrivi');
  target.keyup(sendKeyup);
}

function sendKeyup(event) {
  var key = event.which;
  if (key == 13) {
    var input = $(this);
    var txt = input.val();

    input.val('');
    sendMessage(txt);
  }
}

// invia e ricevi conferma mess
function sendMessage(txt) {
  var template = $('#template-message-sent > div').clone();
  var target = $('.messaggi');

  template.find('.message-text').text(txt);
  template.find('.message-time').text(getActualTime());

  target.append(template);


  setTimeout(receiveMessage, 1000)
    function receiveMessage(txt) {
      var template = $('#template-message-received > div').clone();
      var target = $('.messaggi');

      template.find('.message-text').text(txt);
      template.find('.message-time').text(getActualTime());

      target.append(template);

    };

}


// cattura tempo attuale
function getActualTime() {
  var date = new Date();
  return date.getHours() + ':' + date.getMinutes();
}


// mostra il pannello per intervenire sul mess
// function showPanel() {
//   var panel = $('.message-panel');
//   $('#down').click();
//   panel.toggle();
// }



// cerca i contatti per singola lettera
function cercaUtenti() {
  var target = $('#ricerca-utenti');
  target.keyup(searchKeyup);
};

function searchKeyup() {

  var key = event.which;

    if (key == 13) {
      var input = $(this);
      var txt = input.val();

      input.val('');
      ricercaContatto(txt);
    }

}

function ricercaContatto(txt) {
  var nomi = $('.nomi');
  nomi.each(function(){
      if(nomi.includes(txt)){
          $(this).closest('.chat-recenti').show();
      }else{
          $(this).closest('.chat-recenti').hide();
      }
    })

};



// inizializza le funzioni
function init() {
  addSentListener();
  cercaUtenti();

}

$(document).ready(init)
