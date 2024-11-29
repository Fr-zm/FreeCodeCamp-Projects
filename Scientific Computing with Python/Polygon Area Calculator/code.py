class Rectangle():
    def __init__(self,width,height):
        self.width = width
        self.height = height
    
    def set_width(self,wid):
        self.width = wid
        if self.__class__ is Square:
            self.height = wid

    def set_height(self,hei):
        self.height = hei
        if self.__class__ is Square:
            self.width = hei
    
    def get_area(self):
        return self.width * self.height
    
    def get_perimeter(self):
        return 2 * self.width + 2 * self.height
    
    def get_diagonal(self):
        return (self.width ** 2 + self.height ** 2) ** .5
    
    def get_picture(self):
        if self.width > 50 or self.height > 50:
            return 'Too big for picture.'
        return self.height*("*" * self.width + "\n")
    
    def get_amount_inside(self, shape):
        widFit = round(self.width / shape.width)
        heiFit = round(self.height / shape.height)
        
        return widFit * heiFit
    
    def __str__(self):
        return f'Rectangle(width={self.width}, height={self.height})'

class Square(Rectangle):
    def __init__(self,side):
        self.width = side
        self.height = side
    
    def set_side(self,side):
        self.width = side
        self.height = side
    
    def __str__(self):
        return f'Square(side={self.width})'

rect = Rectangle(10, 5)
print(rect.get_area())
rect.set_height(3)
print(rect.get_perimeter())
print(rect)
print(rect.get_picture())

sq = Square(9)
print(sq.get_area())
sq.set_side(4)
print(sq.get_diagonal())
print(sq)
print(sq.get_picture())
sq.set_width(6)
print(sq.get_picture())

rect.set_height(8)
rect.set_width(16)
print(Rectangle(2,3).get_amount_inside(Rectangle(3, 6)))