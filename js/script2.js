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

    $(document).on('click', '#down', function () {
      $(this).siblings('.message-panel').toggle();
    });


  };


// cancella il messaggio

$(document).on('click', '.message-destroy', function () {
  $(this).parents('.messaggi > div').hide();
});


// click sul contatto e mostra la conversazione corrispondente
function addContactClickListener() {
  var contacts = $(".chat-recenti li");
  contacts.click(contactClick);

  // evidenzio chat attiva a sinista
  function contactClick() {
    var clickedContact = $(this);
    var id = clickedContact.data('id');
    var contacts = $(".chat-recenti  li");

    contacts.removeClass("active");
    clickedContact.addClass("active");

    var conversations = $('.container-messaggi');
    var selectedCoversation = $('.container-messaggi[data-id=' + id + ']');


    conversations.removeClass('active');
    selectedCoversation.addClass('active');

    var name = $(this).find('.nomi strong').text();
    $(".container-messaggi .nome-chat-fixed").find(".nome-chat").text(name);

    var img = $(this).find('.contact-img').attr('src');
    $('.container-messaggi .nome-chat-fixed' ).find('.icon-chat').attr("src", img);

    // var ultimoAccesso = da fare! 

  }





};





// inizializza le funzioni
function init() {
  addSentListener();
  cercaUtenti();
  addTestListener();
  addContactClickListener();
};

$(document).ready(init);
