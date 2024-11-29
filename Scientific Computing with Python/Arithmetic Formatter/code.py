def arithmetic_arranger(problems, show_answers=False):
    
    if len(problems) > 5:
        return 'Error: Too many problems.'
    
    operators = list(map(lambda i: i.split()[1], problems))

    if not all(op in ['-', '+'] for op in operators):
        return "Error: Operator must be '+' or '-'."
    
    numbers = []  # splitting the numbers from the operators
    for i in problems:
        p = i.split()
        numbers.extend([p[0], p[2]])

    for i in numbers:
        if len(i) > 4:
            return 'Error: Numbers cannot be more than four digits.'
            
        if not i.isdigit():
            return 'Error: Numbers must only contain digits.'
    
    numbers1 = numbers[::2]
    numbers2 = numbers[1::2]

    row1 = ""
    row2 = ""
    row3 = ""
    row4 = ""

    for i in range(len(numbers1)):
        high = max(len(numbers1[i]), len(numbers2[i]))  #width
        row1 += " " * (high + 2 - len(numbers1[i])) + numbers1[i]
        row2 += operators[i] + " " * (high + 1 - len(numbers2[i])) + numbers2[i]
        row3 += "-" * (high + 2)

        if show_answers:
            if operators[i] == '+':
                result = str(int(numbers1[i]) + int(numbers2[i]))
            else:
                result = str(int(numbers1[i]) - int(numbers2[i]))
            row4 += " " * (high + 2 - len(result)) + result

        if i < len(numbers1) - 1:  #adding spaces
            row1 += "    "
            row2 += "    "
            row3 += "    "
            if show_answers:
                row4 += "    "

        #end of the loop

    if show_answers:
        return row1 + "\n" + row2 + "\n" + row3 + "\n" + row4
    else:
        return row1 + "\n" + row2 + "\n" + row3

print(f'\n{arithmetic_arranger(["32 + 698", "3801 - 2", "45 + 43", "123 + 49"])}')