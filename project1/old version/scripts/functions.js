function defense()
{
let goalie = $('<div id="goalie"></div>');
let dive=Math.floor(Math.random()*3)+1;
console.log("dive to "+dive)

  if (dive===1)
  {
    goalie.attr('id','goalie1')
  }
  else if (dive===2)
  {
    goalie.attr('id','goalie2')
  }
  else if (dive===3)
  {
    goalie.attr('id','goalie3')
  }

  return dive;
 }

function oVd(shot,dive)
{
  if(shot!==dive)
  {
    console.log("Goal!");
  }
  else
  {
    console.log("save!");
  }
}
