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

var cerca = $('#ricerca-utenti')
function cercaUtenti(cerca) {
  var arrayLettere = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'z'];

  for (var i = 0; i < arrayLettere.length; i++) {
    if ($('.chat-recenti > li').contains(arrayLettere[i])) {
    }
    return true;
  }
};


function init() {
  addSentListener();

}

$(document).ready(init)
