jQuery(function() {

    let level1 = 200;
    let level2 = 400;
    let level3 = 600;
    let level4 = 900;
    let level5 = 1400;
    let level6 = 1800;
    let level7 = 2000;

    let miss=[1,7,8,14,15,21,22,28,29,30,31,32,33,34,35];
    let offPost=[2,6,9,13,16,20,23,24,25,26,27];
    let onTarget=[3,4,5,10,11,12,17,18,19]

    for(i=0;i<6;i++)
    {
      //build ads here
    }

    let homePoints=$('#homepoints');
    let awayPoints=$('#awaypoints');
    let roundNum=$('#roundnum');
    let accuracybar=$('#accuracybar');
    let powerbar=$('#powerbar');
    let accuracyUp=$('<div id="accuracybar2"></div>');
    let powerUp=$('<div id="powerbar2"></div>');
    let leo=$('.leo')
    let shred=$('.shred')

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
    leo.hide();

// borrowed logic from http://stackoverflow.com/questions/14586883/how-to-detect-a-long-press-on-a-div-in-jquery
// this is finding the actual physical time the button is clicked, then finding the actual time it is released, and finding the difference to calculate how long it was held.
    $("#shotaccuracy").on('mousedown', function(e) {//begin shot accuracy
        startAcc = new Date().getTime();
        accuracybar.append(accuracyUp);
    } );

    $("#shotaccuracy").on('mouseleave', function(e) {
        startAcc = 0;
    } );

    $("#shotaccuracy").on('mouseup', function(e) {
      accuracyUp.remove();
        if ( new Date().getTime() <= ( startAcc + level1 )  )
        {
           shotAcc=1;
        }
        else if(new Date().getTime() <= ( startAcc + level2 ))
        {
            shotAcc=2;
        }
        else if(new Date().getTime() <= ( startAcc + level3 ))
        {
            shotAcc=3;
        }
        else if(new Date().getTime() <= ( startAcc + level4 ))
        {
            shotAcc=4;
        }
        else if(new Date().getTime() <= ( startAcc + level5 ))
        {
            shotAcc=5;
        }
        else if(new Date().getTime() <= ( startAcc + level6 ))
        {
            shotAcc=6;
        }
        else
        {
            shotAcc=7;
        }
        $('#shotaccuracy').hide();
        $('#shotpower').show(); //switches button view
        if (turn===1)
        {
          $('#messagebox').text("Hold down the 'Shot Power' button. The longer you hold, the higher your shot!")
        }
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
            shotPow=1;
        }
        else if(new Date().getTime() <= ( startPow + level2 ))
        {
            shotPow=2;
        }
        else if(new Date().getTime() <= ( startPow + level3 ))
        {
            shotPow=3;
        }
        else if(new Date().getTime() <= ( startPow + level4 ))
        {
            shotPow=4;
        }
        else
        {
          shotPow=5;
        }

    zone=((((shotPow-1)*7)+1)+shotAcc)-1 //calculates what zone on the accuracy/power matrix
    moveBall(zone);
    let bool = isSaved(zone);
    defense(zone,bool,turn);
if(bool===true)
{
  if (miss.includes(zone))
  {
    $('#messagebox').text("He misses the goal entirely!")
  }
  else if (offPost.includes(zone))
  {
    $('#messagebox').text("It hits the post! So close, but no goal!")
  }
  else
  {
    $('#messagebox').text("The goalie stops it! What a save!!!!!!")
  }
}
else
{
  $('#messagebox').text(" GOAL!! GOAL!! GOAL!! GOAL!! GOAL!!")
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
  if (round>5){round=5};
  roundNum.text(round);

  setTimeout(reset,1500);

  if (turn>10) //tests if game should end
  {
    if (homeScore>awayScore)
    {
      $('#messagebox').text("The Ninja Turtles win the game!");
    }
    else if (awayScore>homeScore)
    {
      $('#messagebox').text("The bad guys get the victory!");
    }
    else
    {
      $('#messagebox').text("Its a draw! Nobody wins...")
    }
    setTimeout(scoreReset,3500);
  }
    });

  function isSaved(zone)
  {

    let totMiss=[1,2,6,7,8,9,13,14,15,16,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35];
    if (totMiss.includes(zone))
    {
      return true;
    }
    let save=Math.random()
    let probs=[[3,.5],[4,.85],[5,.35],[10,.52],[11,.9],[12,.48],[17,.22],[18,.35],[19,.25]];

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

  function defense (zone, save,turn)
{
  let totMiss=[1,2,6,7,8,9,13,14,15,16,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35];
  let leo = $('.leo');
  let shred = $('.shred');
  let diveZone;
  let dive;
 if (totMiss.includes(zone))
  {
    dive=Math.round(Math.random()*8.99)+1;
  }
  else
  {
    if (zone===3)
    {
      diveZone=1;
    }
    else if (zone===4)
    {
      diveZone=2;
    }
    else if (zone===5)
    {
      diveZone=3;
    }
    else if (zone===10)
    {
      diveZone=4;
    }
    else if (zone===11)
    {
      diveZone=5;
    }
    else if (zone===12)
    {
      diveZone=6;
    }
    else if (zone===17)
    {
      diveZone=7;
    }
    else if (zone===18)
    {
      diveZone=8;
    }
    else
    {
      diveZone=9;
    }

    if (save===true)
    {
      dive=diveZone;
    }
    else
    {
      dive=Math.floor(Math.random()*8.99)+1;
      if(dive===diveZone)
      {
        while (dive===diveZone)
        {
          dive=Math.floor(Math.random()*8.99)+1;
        }
      }
    }
  }
    shred.attr('id','shred'+dive);
    leo.attr('id','leo'+dive);
    console.log(zone);
    console.log(diveZone);
    console.log(dive)

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
    leo.removeAttr('id');
    shred.removeAttr('id');
    if (turn%2===1)
    {
      shred.show();
      leo.hide();
    }
    else
    {
      leo.show();
      shred.hide();
    }
  }

  function moveBall(zone)
{
  ball.attr('id','ball'+zone);
}

})
