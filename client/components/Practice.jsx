import React from 'react'

class Practice extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
   }

  render () {
    var width = 750;
    var height = 600;
    var radius = Math.min(width, height) / 2

    var b = {
      w: 75, h: 30, s: 3, t: 10
    }


// Mapping of step names to colors.
var colors = {
  "home": "#5687d1",
  "product": "#7b615c",
  "search": "#de783b",
  "account": "#6ab975",
  "other": "#a173d1",
  "end": "#bbbbbb"
}

// Total size of all segments; we set this later, after loading the data.
var totalSize = 0 

var vis = d3.select("#chart").append("svg:svg")
    .attr("width", width)
    .attr("height", height)
    .append("svg:g")
    .attr("id", "container")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")")

var partition = d3.layout.partition()
    .size([2 * Math.PI, radius * radius])
    .value(function(d) { return d.size; })

var arc = d3.svg.arc()
    .startAngle(function(d) { return d.x; })
    .endAngle(function(d) { return d.x + d.dx; })
    .innerRadius(function(d) { return Math.sqrt(d.y); })
    .outerRadius(function(d) { return Math.sqrt(d.y + d.dy); })

    d3.text("visit-sequences.csv", function(text) {
      var csv = d3.csv.parseRows(text);
      var json = buildHierarchy(csv);
      createVisualization(json);
    })
    return (
    <div>
      // Main function to draw and set up the visualization, once we have the data.
function createVisualization(json) {

  // Basic setup of page elements.
  initializeBreadcrumbTrail()
  drawLegend()
  d3.select("#togglelegend").on("click", toggleLegend);
      
              
    </div>
    )
  }
}


export default Practice