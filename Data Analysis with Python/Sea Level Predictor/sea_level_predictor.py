import pandas as pd
import matplotlib.pyplot as plt
from scipy.stats import linregress

def draw_plot():
    # Read data from file
    df = pd.read_csv("epa-sea-level.csv")
    print(df.head())
    # Create scatter plot
    fig,ax=plt.subplots()
    plt.scatter(df["Year"], df["CSIRO Adjusted Sea Level"],s=3)

    # Create first line of best fit
    reg = linregress(df["Year"],df["CSIRO Adjusted Sea Level"])
    xcord = pd.Series([i for i in range(1880,2051)])
    ycord = reg.slope * xcord + reg.intercept
    plt.plot(xcord,ycord,"green")

    # Create second line of best fit
    df_ = df.loc[df["Year"]>=2000]
    reg2 = linregress(df_["Year"],df_["CSIRO Adjusted Sea Level"])
    xcord2 = pd.Series([i for i in range(2000,2051)])
    ycord2 = reg2.slope * xcord2 + reg2.intercept
    plt.plot(xcord2,ycord2,"red")

    # Add labels and title
    ax.set_xlabel("Year")
    ax.set_ylabel("Sea Level (inches)")
    ax.set_title("Rise in Sea Level")
    
    # Save plot and return data for testing (DO NOT MODIFY)
    plt.savefig('sea_level_plot.png')
    return plt.gca()

draw_plot()