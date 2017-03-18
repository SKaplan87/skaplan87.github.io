jQuery(function() {

    let level1 = 500;
    let level2 = 1000;
    let level3 = 1500;
    let level4 = 2000;
    let level5 = 2500;
    let level6 = 3000;
    let level7 = 3500;
    let miss=[1,7,8,14,15,21,22,28,29,30,31,32,33,34,35];
    let offPost=[2,6,9,13,16,20,23,24,25,26,27];
    let onTarget=[3,4,5,10,11,12,17,18,19]
    let homePoints=$('#homepoints');
    let awayPoints=$('#awaypoints');
    let roundNum=$('#roundnum');
    let accuracybar=$('#accuracybar');
    let powerbar=$('#powerbar');
    let accuracyUp=$('<div id="accuracybar2"></div>');
    let powerUp=$('<div id="powerbar2"></div>');
    homePoints.text("0");
    awayPoints.text("0");
    roundNum.text("1");

    let startAcc;
    let startPow;
    let shotAcc=0;
    let shotPow=0;
    let homeScore=0;
    let awayScore=0;
    let turn=1;
    let ball = $('.ball');

    $('#shotpower').hide();

// borrowed logic from http://stackoverflow.com/questions/14586883/how-to-detect-a-long-press-on-a-div-in-jquery
// this is finding the actual physical time the button is clicked, then finding the actual time it is released, and finding the difference to calculate how long it was held.
    $("#shotaccuracy").on('mousedown', function(e) {//begin shot accuracy
        startAcc = new Date().getTime();
        accuracybar.append(accuracyUp);
        //start accuracy bar
    } );

    $("#shotaccuracy").on('mouseleave', function(e) {
        startAcc = 0;
    } );

    $("#shotaccuracy").on('mouseup', function(e) {
      //stop accuracy bar
      accuracyUp.remove();
        if ( new Date().getTime() <= ( startAcc + level1 )  )
        {
           // alert('level 1!');
           shotAcc=1;
        }
        else if(new Date().getTime() <= ( startAcc + level2 ))
        {
            // alert('level 2!');
            shotAcc=2;
        }
        else if(new Date().getTime() <= ( startAcc + level3 ))
        {
            // alert('level 3!');
            shotAcc=3;
        }
        else if(new Date().getTime() <= ( startAcc + level4 ))
        {
            // alert('level 4!');
            shotAcc=4;
        }
        else if(new Date().getTime() <= ( startAcc + level5 ))
        {
            // alert('level 5!');
            shotAcc=5;
        }
        else if(new Date().getTime() <= ( startAcc + level6 ))
        {
            // alert('level 6!');
            shotAcc=6;
        }
        else
        {
            // alert('level 7!');
            shotAcc=7;
        }
        $('#shotaccuracy').hide();
        $('#shotpower').show(); //switches button view
    } );

    $( "#shotpower" ).on( 'mousedown', function( e ) { //begin shot power
        startPow = new Date().getTime();
        powerbar.append(powerUp);
    } );

    $( "#shotpower" ).on( 'mouseleave', function( e ) {
        startPow = 0;
    } );

    $( "#shotpower" ).on( 'mouseup', function( e ) {
      powerUp.remove();
        if(new Date().getTime() <= ( startPow + level1 ))
        {
            // alert('level 1!');
            shotPow=1;
        }
        else if(new Date().getTime() <= ( startPow + level2 ))
        {
            // alert('level 2!');
            shotPow=2;
        }
        else if(new Date().getTime() <= ( startPow + level3 ))
        {
            // alert('level 3!');
            shotPow=3;
        }
        else if(new Date().getTime() <= ( startPow + level4 ))
        {
            // alert('level 4!');
            shotPow=4;
        }
        else
        {
         // alert('level 5!');
          shotPow=5;
        }

    zone=((((shotPow-1)*7)+1)+shotAcc)-1 //calculates what zone on the accuracy/power matrix
    alert(zone)
    moveBall(zone);

    // if (miss.includes(zone))
    // {
    //   alert("Misses the net completely!");
    // }
    // else if (offPost.includes(zone))
    // {
    //   alert("It goes off the post!");
    // }
    // else if (onTarget.includes(zone))
    // {
    //   alert("The shot is on target");
    // }
    // else
    // {
    //   alert("Woops, something went wrong");
    // }

if(isSaved(zone))
{
  console.log("SAVED!");
}
else
{
  console.log("GOAL!");
  if(turn%2===1)
  {
     homeScore++;
     homePoints.text(homeScore);
  }
  else
  {
    awayScore++;
    awayPoints.text(awayScore);
  }
}

  $('#shotaccuracy').show();
  $('#shotpower').hide();
  turn++;
  let round = Math.ceil(turn/2);
  roundNum.text(round);

  setTimeout(reset,3000)

  if (turn>4) //tests if game should end
  {
    if (homeScore>awayScore)
    {
      alert("The home team wins!")
    }
    else if (awayScore>homeScore)
    {
      alert("The away team wins!")
    }
    else
    {
      alert("Its a draw!")
    }
    scoreReset();
  }

  //reset board. ball/goalie back to original location. power/accuracy bars empty
    } );

  function isSaved(zone)
  {
    let totMiss=[1,2,6,7,8,9,13,14,15,16,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35];
    if (totMiss.includes(zone))
    {
      return true;
    }
    let save=Math.random()
    let probs=[[3,.0],[4,0],[5,.35],[10,.52],[11,.9],[12,.48],[17,.22],[18,.35],[19,.28]];

    for(i=0;i<probs.length;i++)
    {
      if (probs[i][0]===zone)
      {
        console.log(probs[i])
        console.log(save)
        if (save<probs[i][1])
         {return true;}
       else
          {return false}
      }
    }
  }

  function scoreReset()
  {
    homeScore=0;
    awayScore=0;
    turn=0;
    round=1;
    homePoints.text(homeScore);
    awayPoints.text(awayScore);
    roundNum.text(round);
  }

  function reset()
  {
    ball.removeAttr('id');
  }

  function moveBall(zone)
{
  ball.attr('id','ball'+zone);
}

})











