// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

var basicPop = (baseData) => {
  baseData.forEach((ufoSighting) => {
      var row = tbody.append("tr");
      Object.entries(ufoSighting).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
      });
  });
}

//Shoe basic population from data.js
basicPop(data);

//construct variables to capture events
var button = d3.select("#filter-btn");
var form = d3.select("#datetime");

// Handler functions
button.on("click", runFilter);
form.on("submit", runFilter);
form.on("change", runFilter);

// Build a function to filter events by date
function runFilter() {
  d3.event.preventDefault(); //prevent refresh
  
  var inputDate = d3.select("#datetime").property("value"); //collect date to be filtered
  
  // console.log(tableData);

  // filter for desired date results
  var filterResults = tableData.filter(abc => abc.datetime === inputDate);
  
  // console.log(filterResults);

  //clear the current population on screen
  tbody.html("");
  
  //append the filtered population
  filterResults.forEach((newSighting) => {
    var row = tbody.append("tr");
    Object.entries(newSighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

  //Reset for basic population
  if (inputDate.length === 0) {
    basicPop(data);
  }

}

