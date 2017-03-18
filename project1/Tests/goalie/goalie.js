jQuery(function() {

function defense (zone, save)
{
  let totMiss=[1,2,6,7,8,9,13,14,15,16,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35];
  let goalie = $('.goalie');
  let dive;
 if (totMiss.includes(zone))
  {
    dive=Math.round(Math.random()*8.99)+1;
  }
  else
  {
    if (zone===3)
    {
      zone=1;
    }
    else if (zone===4)
    {
      zone=2;
    }
    else if (zone===5)
    {
      zone=3;
    }
    else if (zone===10)
    {
      zone=4;
    }
    else if (zone===11)
    {
      zone=5;
    }
    else if (zone===12)
    {
      zone=6;
    }
    else if (zone===17)
    {
      zone=7;
    }
    else if (zone===18)
    {
      zone=8;
    }
    else
    {
      zone=9;
    }

    if (save===true)
    {
      dive=zone;
    }
    else
    {
      dive=Math.floor(Math.random()*8.99)+1;
      if(dive===zone)
      {
        while (dive===zone)
        {
          dive=Math.floor(Math.random()*8.99)+1;
        }
      }
    }
  }


  goalie.attr('id','goalie'+dive)
}

defense(3,false);
});
