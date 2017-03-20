TMNT Soccer Shootout
Created by Scott Kaplan
General Assembly Web Development Immersive
Shoebill Cohort
Presented 3/20/2017

Story
Tired of fighting, The Ninja Turtles and the Foot have decided to settle their differences in a soccer shootout. Leonardo will be playing goalie for the TMNT squad, while Shredder protects the goal for the Foot.

Game Play
Press and hold the shot accuracy button. The longer you hold the button, the further right your shot. Next, press and hold the shot power button. The longer you hold the button, the higher your shot. There are 5 rounds. The winner is the team with the highest score at the end of those rounds.

Technology
The shooting buttons use the mousedown and mouseup functions. When mouse clicks down, the current time is taken. When the mouse releases, current time of release is taken. These two numbers are compared. Depending on the difference, the horizontal location is selected. The same process is used for shot power to establish the vertical location of the shot.

There are 35 different shot accuracy and power combinations, referred to as zones. Zones 3, 4, 5, 10, 11, 12, 17, 18, and 19 are on target and require an interaction with the goalie.  Each of those 9 zones have a probability of being saved. A random number is chosen, if the number falls within the save probability, the goalie dives to the zone of the shot. If the random number is outside of the save probability, the goalie dives to any random zone other than the shooting zone.

Planning
I began with hand written sketches of how everything would work. I tried to break it down into as fine tuned pieces as I could, listing out any functions that would be needed. When I began coding, I built the bare minimums first, then built on that foundation until I had a working game. I went through each area of the game, expanding on the code until I had the game that I wanted. This method created extra steps, and I ended up not using a lot of my early coding, but it ensured the product worked the way I wanted it to. For example, in the first iteration of the game you could click on the left, middle, or right side of the goal to shoot, and the goalie could only dive to one of the 3 sections.

Once gameplay was in place, I added to the imagery of the game. This included adding fans, press, field markers, and a message box.
