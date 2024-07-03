$(document).ready(function () {
  function getRandomMessage() {
    const message = [
      "Hello",
      "How you doing?",
      "hi",
      "how are you?",
      "what gives?",
      "How's your day?",
    ];
    let temp = Math.floor(Math.random() * message.length); //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    return message[temp];
  }

  function addMessage(msg, classname) {
    let date = new Date();
    let timestamp = date.toLocaleString(); //https://stackoverflow.com/questions/20456712/how-to-get-current-time-with-jquery
    let message = `
            <div class="message ${classname}">
                ${msg}
                <div class="timestamp">${timestamp}</div>
            </div>
        `;
    $("#chat-box").append(message);
    //$("#chat-box").scrollTop = $("#chat-box").scrollHeight;
    $("#chat-box").animate({ scrollTop: $("#chat-box")[0].scrollHeight }, 70); //https://stackoverflow.com/questions/75059290/scrolltop-to-follow-bottom-of-the-page
  }

  $("#sendbtn").click(function () {
    let msg = $("#userinput").val().trim();
    if (msg) {
      addMessage(msg, "user");
      $("#userinput").val(""); //https://stackoverflow.com/questions/10754874/how-do-i-empty-an-input-value-with-jquery#:~:text=Usual%20way%20to%20empty%20textbox,to%20get%20the%20input%20element.

      setTimeout(function () {
        addMessage(getRandomMessage(), "bot");
      }, 1200); //https://www.tutorialspoint.com/How-to-make-a-jQuery-function-call-after-X-seconds#:~:text=To%20make%20a%20jQuery%20function%20call%20after%20%E2%80%9CX%E2%80%9D%20seconds%2C,use%20the%20siteTimeout()%20method.
    }
  });

  $("#userinput").keypress(function (e) {
    //https://stackoverflow.com/questions/18160342/jquery-how-to-trigger-click-event-on-pressing-enter-key
    let key = e.which;
    if (key == 13) {
      $("#sendbtn").click();
      return false;
    }
  });
});
