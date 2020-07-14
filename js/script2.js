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

function sendMessage(txt) {
  var template = $('#template-message-sent > div').clone();
  var target = $('.message-sent');

  template.find('#message-text').text(txt);
  template.find('#message-time').text(getActualTime);

  target.append(template);


  setTimeout(receiveMessage, 1000)
    function receiveMessage(txt) {
      var template = $('#template-message-received > div').clone();
      var target = $('.message-received');

      template.find('#message-text').text(txt);
      template.find('#message-time').text(getActualTime);

      target.append(template);

    };

}





function getActualTime() {
  var date = new Date();
  return date.getHours() + ':' + date.getMinutes();
}

// function showPanel() {
//   var panel = $('.message-panel');
//   $('#down').click();
//   panel.toggle();
// }



// cerca nei li le lettere dell'alfabeto e se ci sono stampa

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
  nomi.filter(txt)
}






function init() {
  addSentListener();
  cercaUtenti();

}

$(document).ready(init)
