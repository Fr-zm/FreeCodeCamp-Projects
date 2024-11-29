class Category:
    categoryCount = 0
    categoryNames = []
    def __init__(self, name):
        self.categoryCount += 1
        self.name = name
        self.categoryNames.append(name)
        self.ledger = []
        self.funds = 0
        self.spent = 0

    def check_funds(self, amount):
        return amount <= self.funds

    def deposit(self, amount, description=""):
        self.funds += amount
        self.ledger.append({'amount': amount, 'description': description})

    def withdraw(self, amount, description=""):
        if self.check_funds(amount):
            self.funds -= amount
            self.ledger.append({'amount': -amount, 'description': description})
            self.spent += amount
            return True
        return False

    def get_balance(self):
        return self.funds

    def transfer(self, amount, category):
        if self.check_funds(amount):
            self.withdraw(amount, f"Transfer to {category.name}")
            category.deposit(amount, f"Transfer from {self.name}")
            return True
        return False

    def __str__(self):
        result = f"{self.name:*^30}\n"
        
        for entry in self.ledger:
            
            description = entry['description'][:23]
            amount = f"{entry['amount']:>7.2f}"
            result += f"{description:<23}{amount}\n"
        result += f"Total: {self.funds:.2f}"

        return result

def create_spend_chart(categories):
    total_spent = sum(category.spent for category in categories)
    
    spent_percentages = [
        int((category.spent / total_spent) * 100) // 10 * 10
        for category in categories
    ]
    
    result = 'Percentage spent by category\n'
    for percent in range(100, -1, -10):
        result += f"{percent:>3}| "
        for spent_percentage in spent_percentages:
            if spent_percentage >= percent:
                result += "o  "
            else:
                result += "   "
        result += "\n"
    
    result += "    -" + "---" * len(categories) + "\n"
    
    maxNameLength = max(len(category.name) for category in categories)
    names = [category.name.ljust(maxNameLength) for category in categories]
    
    for i in range(maxNameLength):
        result += "     "
        for name in names:
            result += name[i] + "  "
        result += "\n"
    
    return result.strip("\n")

auto = Category('Auto')
food = Category('Food')
food.deposit(1000, 'initial deposit')
food.withdraw(10.15, 'groceries')
food.withdraw(15.89, 'restaurant and more food for dessert')
clothing = Category('Clothing')
food.transfer(50, clothing)
clothing.withdraw(20.10,'dress')

print(create_spend_chart([food, clothing, auto]))




    
    


auto = Category('Auto')
food = Category('Food')
food.deposit(1000, 'initial deposit')
food.withdraw(10.15, 'groceries')
food.withdraw(15.89, 'restaurant and more food for dessert')
clothing = Category('Clothing')
food.transfer(50, clothing)
print(food)
create_spend_chart([food,clothing])