class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    question.hide()
    //write code to change the background color here
    background("black")
    //write code to show a heading for showing the result of Quiz
    // var heading = createElement("h2")
    // heading.html("The Result")
    // heading.position(700,165)
    textSize(30)
    text("The Result",340,50)
    //call getContestantInfo( ) here
    Contestant.getPlayerInfo()

    //write condition to check if contestantInfor is not undefined
    if(allContestants != undefined){
      textSize(20)
      text("Contestant who answerd correctly will be highlighted in green.",130,230)
      var yPosition = 230;
      for(var i in allContestants){
        var correctAns = "2"
        if(correctAns === allContestants[i].answer){
          fill("green")
        }
        else{
          fill("red")
        }
        yPosition+=30
        textSize(20)
        text(allContestants[i].name+": "+allContestants[i].answer, 250,yPosition)
      }

    }
    //write code to add a note here

    //write code to highlight contest who answered correctly
    
  }

}
