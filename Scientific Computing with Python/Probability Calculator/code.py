import copy
import random

class Hat:
    def __init__(self,**args): #Infinite arguments
        self.balls = args #A dict

        self.contents = [key for key, value in self.balls.items() for _ in range(value)] 
        #Adding the balls to a list called contents based on the number of balls we have for every color


    def draw(self,draw):
        draw = min(draw, len(self.contents))#Handling if draw > len(self.contents)
        draws = [] #List of balls drawn
        for _ in range(draw):
            randomBall = random.choice(self.contents)#Pick a ball
            draws.append(randomBall)#Add the ball to the new list
            self.contents.remove(randomBall)#Remove the ball from the hat list

        return draws
    

def experiment(hat, expected_balls, num_balls_drawn, num_experiments):
    
    matches = 0 


    for _ in range(num_experiments):

        _hat = copy.deepcopy(hat) #Making a copy of the hat
        
        drawnDict = {}
        draw = _hat.draw(num_balls_drawn)#Draw balls

        for i in draw: #Turn them into a dict
            if i in drawnDict:
                drawnDict[i] += 1
            else:
                drawnDict[i] = 1


        
        if all(drawnDict.get(key, 0) >= value for key, value in expected_balls.items()): #Check if the expected balls are a subset of the drawn balls

            matches += 1
            


        


    return matches / num_experiments


    

hat = Hat(black=6, red=4, green=3)


probability = experiment(hat=hat,
                  expected_balls={'red':2,'green':1},
                  num_balls_drawn=5,
                  num_experiments=6)

print(probability)