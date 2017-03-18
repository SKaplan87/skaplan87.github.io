console.log("linked")

//goalie logic

function isSaved(zone)
{

let save=Math.random()
let probs=[[3,.35],[4,.8],[5,.35],[10,.52],[11,.9],[12,.48],[17,.22],[18,.35],[19,.28]];

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



// if (zone===3)
// {
//   if (save>.35)
//     {return true;}
//   else
//     {return false}
// }
// else if (zone===4)
// {
//   if (save>.80)
//     {return true;}
//   else
//     {return false}
// }
// else if (zone===5)
// {
//   if (save>.35)
//     {return true;}
//   else
//     {return false}
// }
// else if (zone===10)
// {
//   if (save>.52)
//     {return true;}
//   else
//     {return false}
// }
// else if (zone===11)
// {
//   if (save>.90)
//     {return true;}
//   else
//     {return false}
// }
// else if (zone===12)
// {
//   if (save>.48)
//     {return true;}
//   else
//     {return false}
// }
// else if (zone===17)
// {
//   if (save>.22)
//     {return true;}
//   else
//     {return false}
// }
// else if (zone===18)
// {
//   if (save>.35)
//     {return true;}
//   else
//     {return false}
// }
// else if (zone===19)
// {
//   if (save>.28)
//     {return true;}
//   else
//     {return false}
// }
// else
// {
//   alert("SOMETHING WENT WRONG!")
// }
}
