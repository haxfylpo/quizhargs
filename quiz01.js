var quiz = {
    questions: [
      {
        question: "(1/11) Quando foi O Dia?",
        choices: ["13/03/2022", "13/02/2021", "13/02/2022"],
        answer: "13/02/2022"
      },
      {
        question: "(2/11) Quando foi que nos casamos?",
        choices: ["27/07/2021", "28/07/2021", "26/07/2022"],
        answer: "27/07/2021"
      },
      {
        question: "(3/11) Quem é a mais linda desse mundao inteiro?",
        choices: ["Outra pessoa", "Eu mesma julia nargs!", "Não sei!!!"],
        answer: "Eu mesma julia nargs!",
        randompos: "Outra pessoa",
        randomposi: "Não sei!!!"
      },
      {
        question: "(4/11) Quem é a melhor namorada que o felipinho hacker poderia sonhar ter?",
        choices: ["julia nargs!!!!!", "Não sei."],
        answer: "julia nargs!!!!!",
        randompos: "Não sei."
      },
      {
        question: "(5/11) Qual a capital de Cabo Verde?",
        choices: ["Santiago", "Platô", "São Vicente", "Praia"],
        answer: "Praia"
      },
      {
        question: "(6/11) O que é melhor?",
        choices: ["Frio","Calor"],
        answer:"Frio",
        randompos: "Calor"
      },
      {
        question: "(7/11) Quem tem o cabelo mai perfeito q tem porai?",
        choices: ["julia argolis."],
        answer:"julia argolis."
      },
      {
        question: "(8/11) Quando eu penso em você, qual a primeira música que me vem na mente?",
        choices: ["Paper Rings (by loirinha)","Lover (by loirinha)","Just the Way You Are (by bruno márcio)","18 (by one directio)"],
        answer:"Paper Rings (by loirinha)"
      },
      {
        question: "(9/11) Qual o jogo preferido do teu namorado?",
        choices: ["FIFA14","Godofó","The Last of Us","LOL"],
        answer:"Godofó"
      },
      {
        question: "(10/11) Qual o maior time do mundo.",
        choices: ["O GALO DOIDO","Barcenola"],
        answer:"O GALO DOIDO"
      }
    ],
    currentQuestion: 0,
    displayQuestion: function() {
      var question = quiz.questions[quiz.currentQuestion].question;
      var choices = quiz.questions[quiz.currentQuestion].choices;
      var choicesHTML = "";
      for (var i = 0; i < choices.length; i++) {
        choicesHTML += "<button onclick='quiz.checkAnswer(this)'>" + choices[i] + "</button>";
      }
      document.getElementById("question").innerHTML = question;
      document.getElementById("choices").innerHTML = choicesHTML;
    },

    checkAnswer: function(button) {
      var answer = quiz.questions[quiz.currentQuestion].answer;
      var randompos = quiz.questions[quiz.currentQuestion].randompos;
      var randomposi = quiz.questions[quiz.currentQuestion].randomposi;
      if (button.innerHTML == answer) {
        alert("Acertou!!!");
        quiz.currentQuestion++;
        if (quiz.currentQuestion < quiz.questions.length) {
          quiz.displayQuestion();
        } else {
          window.location.href = "end.html";
        }
      } else {
          if (button.innerHTML == randompos) {
            var x = Math.floor(Math.random() * 300);
            var y = Math.floor(Math.random() * 300);
            button.style.position = "absolute";
            button.style.left = x + "px";
            button.style.top = y + "px";
          } else {
              if (button.innerHTML == randomposi) {
               var x = Math.floor(Math.random() * 300);
               var y = Math.floor(Math.random() * 300);
               button.style.position = "absolute";
                button.style.left = x + "px";
               button.style.top = y + "px";
              } else {
                alert("ta errado mozao. te dou mais uma chance.");
              }
          }
      }
    }
  }
  
  quiz.displayQuestion();