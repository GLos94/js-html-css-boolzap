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



// cerca i contatti per singola lettera
function cercaUtenti() {
  var target = $('#ricerca-utenti');
  target.keyup(searchKeyup);
};

function searchKeyup() {
  var input = $(this);
  var txt = input.val();

  var contacts = $('.chat-recenti  li');

  contacts.each(function () {
    var contact = $(this);
    var name = contact.find('.nomi').text();
    console.log(name);


    if (name.toLowerCase().includes(txt.toLowerCase())) {
    contact.show();
    } else {
    contact.hide();
    }

  });

};


// mostra il pannello per intervenire sul mess
function addTestListener() {

    var infoMes = $('.message-panel');
    var info = $(this);

    $(document).on('click', '#down', function () {
      infoMes.toggle();
    });


  };


// cancella il messaggio
var cancella = $('.message-destroy');
cancella.click(function () {
  $('.messaggi > div').hide();
})


// click sul contatto e mostra la conversazione corrispondente



// inizializza le funzioni
function init() {
  addSentListener();
  cercaUtenti();
  addTestListener();
}

$(document).ready(init)
