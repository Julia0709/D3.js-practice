var data = [90, 95, 100, 76, 60, 62, 91, 72, 53, 57, 89];
var r = 300;

var color = d3.scaleOrdinal()
    .range(["#e60012", "#f39800", "#fff100", "#8fc31f", "#009944", "#009e96", "#00a0e9", "#0068b7", "#1d2088", "#920783", "#e4007f"]);

var canvas = d3.select("body").append("svg")
    .attr("width",1200)
    .attr("height", 1200);

var group = canvas.append("g")
    .attr("transform", "translate(300, 300)");

var arc = d3.arc()
    .innerRadius(180)
    .outerRadius(r);

var pie = d3.pie()
    .value(function (d) {return d; });

var arcs =group.selectAll(".arc")
    .data(pie(data))
    .enter()
    .append("g")
    .attr("class", "arc");

arcs.append("path")
    .attr("d", arc)
    .attr("fill", function (d) { return color(d.data); });

arcs.append("text")
    .attr("transform", function (d) {return "translate(" + arc.centroid(d) + ")"})
    .attr("text-anchor", "middle")
    .attr("text-size", "1.5em")
    .text(function (d) { return d.data; });
