import numpy as np

def calculate(list):

    if len(list) < 9:
        raise ValueError("List must contain nine numbers.")

    arr = np.array(list)
    arr3 = np.array(list).reshape((3,3))

    meanCOL = np.mean(arr3,axis=0).tolist()
    meanROW = np.mean(arr3,axis=1).tolist()
    meanFLA = np.mean(arr).tolist()
    meanTOL = [meanCOL,meanROW,meanFLA]

    varCOL = np.var(arr3,axis=0).tolist()
    varROW = np.var(arr3,axis=1).tolist()
    varFLA = np.var(arr).tolist()
    varTOL = [varCOL,varROW,varFLA]

    stdCOL = np.std(arr3,axis=0).tolist()
    stdROW = np.std(arr3,axis=1).tolist()
    stdFLA = np.std(arr).tolist()
    stdTOL = [stdCOL,stdROW,stdFLA]

    maxCOL = np.max(arr3,axis=0).tolist()
    maxROW = np.max(arr3,axis=1).tolist()
    maxFLA = np.max(arr).tolist()
    maxTOL = [maxCOL,maxROW,maxFLA]

    minCOL = np.min(arr3,axis=0).tolist()
    minROW = np.min(arr3,axis=1).tolist()
    minFLA = np.min(arr).tolist()
    minTOL = [minCOL,minROW,minFLA]

    sumCOL = np.sum(arr3,axis=0).tolist()
    sumROW = np.sum(arr3,axis=1).tolist()
    sumFLA = np.sum(arr).tolist()
    sumTOL = [sumCOL,sumROW,sumFLA]


    calculations={
    'mean': meanTOL,
    'variance': varTOL,
    'standard deviation': stdTOL,
    'max': maxTOL,
    'min': minTOL,
    'sum': sumTOL
    }


    return calculations
