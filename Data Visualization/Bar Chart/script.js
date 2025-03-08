fetch('https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json')
    .then(response => response.json())
    .then(data => {
        const dataset = data.data;
        const w = 1200;
        const h = 600;
        const padding = 80;

        // Parse the date
        const parseDate = d3.timeParse("%Y-%m-%d");

        const xScale = d3.scaleTime()
            .domain([d3.min(dataset, d => parseDate(d[0])), d3.max(dataset, d => parseDate(d[0]))])
            .range([padding, w - padding]);

        const yScale = d3.scaleLinear()
            .domain([0, d3.max(dataset, d => d[1])])
            .range([h - padding, padding]);

        // SVG
        const svg = d3.select("body")
            .append("svg")
            .attr("width", w)
            .attr("height", h);

        //title
        svg.append("text")
            .attr("x", w / 2 - 50)
            .attr("y", padding - 40)
            .style("font-size", "24px")
            .style("font-weight", "bold")
            .text("US GDP")
            .attr("id", "title");

        //tooltip    
        const tooltip = d3.select("body")
            .append("div")
            .attr("id", "tooltip")

        //bars
        svg.selectAll("rect")
            .data(dataset)
            .enter()
            .append("rect")
            .attr("class", "bar")
            .attr("x", (d, i) => xScale(parseDate(d[0])))
            .attr("y", d => yScale(d[1]))
            .attr("width", (w - 2 * padding) / dataset.length)
            .attr("height", d => h - padding - yScale(d[1]))
            .attr("fill", "steelblue")
            .attr("data-date", d => d[0])
            .attr("data-gdp", d => d[1])
            .on("mouseover", function (event) {
                const date = d3.select(this).attr("data-date");
                const gdp = d3.select(this).attr("data-gdp");

                tooltip.style("visibility", "visible")
                    .html(`Date: ${date}<br>GDP: $${gdp} Billion`)
                    .attr("data-date", date)
                    .style("left", `${event.pageX + 10}px`)
                    .style("top", `${event.pageY - 30}px`)
                    .style("opacity", 100);
            })
            .on("mouseout", () => {

                tooltip.style("opacity", 0)
                    .style("visibility", "hidden");

            });



        const xAxis = d3.axisBottom(xScale)
            .ticks(d3.timeYear.every(5))
            .tickFormat(d3.timeFormat("%Y"));

        svg.append("g")
            .attr("id", "x-axis")
            .attr("transform", `translate(0,${h - padding})`)
            .call(xAxis)
            .selectAll("text")
            .style("text-anchor", "end")
            .attr("dx", "-8px")
            .attr("dy", "2px")
            .attr("transform", "rotate(-65)");


        const yAxis = d3.axisLeft(yScale);
        svg.append("g")
            .attr("id", "y-axis")
            .attr("transform", `translate(${padding},0)`)
            .call(yAxis);

        svg.append("text")
            .attr("x", -h / 2)
            .attr("y", padding + 30)
            .attr("text-anchor", "middle")
            .attr("transform", "rotate(-90)")
            .style("font-size", "18px")
            .text("Gross Domestic Product (GDP)");
    })
    .catch(error => console.error("Error fetching data:", error));