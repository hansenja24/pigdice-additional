/////BACKEND
var element1 = function(currentScore){
  var dice = Math.floor((Math.random() * 6) + 1);
      if(dice < 2) {
        var currentScore = 0;
        return currentScore;
      } else if(dice >= 2){
        currentScore += dice
        var i = 0;
        return currentScore;
      };
    };


/////FRONTEND
$(document).ready(function() {

//beginning variables
  var total1 = 0;
  var total2 = 0;
  var index = 0;
  var result1 = 0;
  var result2 = 0;
  var dice = 0;
  $("#point").text(0)
  $("#result1").text(0);
  $("#result2").text(0);
  $("#dice").text(0);

///player turn
  var execute = function(){
    $("button#roll").click(function(){
      if(index === 0){
        result1 = element1(result1);
        if(result1 > 0) {
          $("#dice").text(result1 - dice);
        }else{
          $("#dice").text("1");
        }
        dice = result1
        $("#point").text(result1)
        if(result1 === 0){
          index = 1;
          dice = 0;
          execute();
        } else if((result1 + total1) >= 100) {
          total1 += result1;
          $("#result1").text(total1);
          alert("You Win!");
          index = 2;
        }
      }
    });

    $("button#pass").click(function(){
      if (index === 0) {
        index = 1;
        dice = 0;
        total1 += result1;
        $("#result1").text(total1);
        $("#point").text(0)
        result1 = 0;
        execute();
      }
    });

  //bot turn
    if(index === 1) {
      result2 = element1(result2);
      alert(result2)
      if(result2 > 0) {
        $("#dice").text(result2 - dice);
      }else{
        $("#dice").text("1");
      }
      dice = result2
      $("#point").text(result2)
      if(result2 === 0){
        index = 0;
        dice = 0;
      } else if((result2 + total2) >= 100) {
        total2 += result2;
        $("#result2").text(total2);
        alert("You Lose!");
        index = 2;
      } else{
        total2 += result2
        $("#result2").text(total2);
        index = 0;
        dice = 0;
        result2 = 0;
      }
    }

    // if(index === 1){
    //   debugger;
    //   if(((total1 - total2) <= 10) && ((total1 - total2) > 0)) {
    //     for(i = 0; i <= 13; i += result2){
    //       result2 = element1(result2);
    //       if(result2 > 0) {
    //         $("#dice").text(result2 - dice);
    //       } else{
    //         $("#dice").text("1");
    //       }
    //       dice = result2
    //       $("#point").text(result2)
    //
    //       if(result2 === 0){
    //         index = 0;
    //         dice = 0;
    //         i += 100;
    //         $("#result2").text(total2);
    //         $("#turn2").hide();
    //         $("#turn1").show();
    //       } else if((result2 + total2) >= 100) {
    //         total2 += result2;
    //         $("#result2").text(total2);
    //         alert("You Lose!");
    //         index = 2;
    //         i += 100;
    //       }
    //       if(index === 1){
    //         index = 0;
    //         total2 += result2;
    //         result2 = 0;
    //         dice = 0;
    //         $("#result2").text(total2);
    //         $("#point").text(result2)
    //         $("#turn2").hide();
    //         $("#turn1").show();
    //       }
    //     }
    //   } else if(((total1 - total2) <= 100) && ((total1 - total2)) > 10) {
    //     for(i = 0; i <= 19; i += result2){
    //       result2 = element1(result2);
    //       if(result2 > 0) {
    //         $("#dice").text(result2 - dice);
    //       }else{
    //         $("#dice").text("1");
    //       }
    //       dice = result2
    //       $("#point").text(result2)
    //
    //       if(result2 === 0){
    //         index = 0;
    //         dice = 0;
    //         i += 100;
    //         $("#result2").text(total2);
    //         $("#turn2").hide();
    //         $("#turn1").show();
    //       } else if((result2 + total2) >= 100) {
    //         total2 += result2;
    //         $("#result2").text(total2);
    //         alert("You Lose!");
    //         i += 100;
    //         index = 2;
    //       }
    //     }
    //     if(index === 1){
    //       index = 0;
    //       total2 += result2;
    //       result2 = 0;
    //       dice = 0;
    //       $("#result2").text(total2);
    //       $("#point").text(result2)
    //       $("#turn2").hide();
    //       $("#turn1").show();
    //     }
    //   } else if((total1 - total2) <= 0) {
    //     for(i = 0; i <= 11; i += result2){
    //       result2 = element1(result2);
          // if(result2 > 0) {
    //         $("#dice").text(result2 - dice);
    //       }else{
    //         $("#dice").text("1");
    //       }
    //       dice = result2
    //       $("#point").text(result2)
    //
    //       if(result2 === 0){
    //         index = 0;
    //         dice = 0;
    //         i += 100;
    //         $("#result2").text(total2);
    //         $("#turn2").hide();
    //         $("#turn1").show();
    //       } else if((result2 + total2) >= 100) {
    //         total2 += result2;
    //         $("#result2").text(total2);
    //         alert("You Lose!");
    //         index = 2;
    //         i += 100
    //       }
    //       if(index === 1){
    //         index = 0;
    //         total2 += result2;
    //         result2 = 0;
    //         dice = 0;
    //         $("#result2").text(total2);
    //         $("#point").text(result2)
    //         $("#turn2").hide();
    //         $("#turn1").show();
    //       }
    //     }
    //   }
    }


    $("button#restart").click(function() {
      total1 = 0;
      total2 = 0;
      index = 0;
      result1 = 0;
      result2 = 0;
      $("#point").text(0)
      $("#result1").text(0);
      $("#result2").text(0);
    })
  execute();
});
