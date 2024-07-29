let nuM = 0;
function double() {
    var names = ["Не нажимай", 
"1XBET - Лёгкие выйгрышы", 
"Деньги Money Лавэ<br>🤑💵", 
"BYE BYE<br>🤫🧏",
'<i><a style="font-famaly: monospace; margin-left: 0px; font-size: 30px;" href="https://rsis.rarescrap.dev/">rsis.<br>rarescrap.<br>dev</a></b><i>',
"лол зачем ты тут тапаешь?",
"МООНДЕЙ ЛЕТ МИ БРОУКЕН",
"ВенаИчеИн<br>ЗеСамер",
"Хомячок",
""]
    var randomIndex = Math.floor(Math.random() * names.length);
    var randomName = names[randomIndex];
    nuM += 1;
    document.getElementById('baton').innerHTML = randomName;
    document.getElementById('batton').innerHTML = `Счётчик: ${nuM}`;
}
let isProcessing = false;
function what() {
    if (isProcessing) {
        return; // Не запускать функцию, если она уже обрабатывает запрос
      }
      isProcessing = true;
    setTimeout(function() {
        document.getElementById("info").innerText = "Это прикол, чел.\nНу типа лол, рофлов не выкупаешь?\nНу ты и мамонт конечно, мда.";
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth"
          });
        setTimeout(function() {
          document.getElementById("info").innerText = "";
          isProcessing = false;
        }, 3000);
        
      }, 100);
}

function another() {
    if (isProcessing) {
        return; // Не запускать функцию, если она уже обрабатывает запрос
      }
    
    isProcessing = true;

    const link = document.createElement('a');
    link.href = "https://artemprogrammerit.github.io/CostMessage/cometns/index.html";
    link.textContent = 'CostMessage - Общайтесь с другими людьми!';
    document.body.appendChild(link);
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth" // Можно заменить на "instant" для мгновенного перехода
      });
    setTimeout(() => {
        document.body.removeChild(link);
        isProcessing = false;
    }, 3000);

}
