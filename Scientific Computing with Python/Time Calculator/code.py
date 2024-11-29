def add_time(start, duration, day=''):
    
    # splitting the input into parts if there is an AM or PM
    if 'AM' in start or 'PM' in start:
        splitted = start.split(' ')

        dayORnight = splitted[1]
        startHour, startMinute = map(int, splitted[0].split(":"))
        if dayORnight == 'PM' and startHour != 12:
            startHour += 12
        elif dayORnight == 'AM' and startHour == 12:
            startHour = 0
    else:
        startHour, startMinute = map(int, start.split(':'))


    # splitting the duration into hours and minutes
    durHour, durMinute = map(int, duration.split(':'))

    # starting time plus duration
    totalMinutes = (startHour * 60 + startMinute) + (durHour * 60 + durMinute)

    # calculating the final time
    finHour = (totalMinutes // 60) % 24
    finMinute = totalMinutes % 60

    # calculating the days past
    daysPast = totalMinutes // (24 * 60)

    # AM/PM
    if finHour >= 12:
        dayORnight = 'PM'
        if finHour > 12:
            finHour -= 12
    else:
        dayORnight = 'AM'
        if finHour == 0:
            finHour = 12

    # Adjust day of the week
    if day:
        weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        weekIndex = (weekDays.index(day.capitalize()) + daysPast) % 7
        day = weekDays[weekIndex]

    # final minute value
    if finMinute < 10:
        finMinute = f'0{finMinute}'

    # final time output
    finTime = f'{finHour}:{finMinute} {dayORnight}'

    if day:
        finTime += f', {day}'

    # handling days later output
    if daysPast == 1:
        finTime += ' (next day)'
    elif daysPast > 1:
        finTime += f' ({daysPast} days later)'

    return finTime

print(add_time('8:16 PM', '466:02'))