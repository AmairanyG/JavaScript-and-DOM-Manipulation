// from data.js
var tableData = data;
var tbody = d3.select("tbody");

// Function to build table
function buildTable(data){
    // Clear out existing data
    tbody.html("");
    data.forEach(dataRow => {
        console.table(dataRow);
        var row = tbody.append("tr");
       // Append table data 
       console.table(Object.values(dataRow));
       Object.values(dataRow).forEach((val) => {
           var cell = row.append("td");
           cell.text(val);
       });
    });
};

// Event that calls a function named handleClick
function handleClick(){
    d3.event.preventDefault() // Event to prevent the form from refreshing the page
    
    // store the type date value on date variable
    var date = d3.select("#datetime").property("value");
    var filterData = tableData;

    // If date is entered, filter the data using that date, so only rows matching the filter value are displayed
    if (date){
        filterData = filterData.filter((row) => row.datetime === date);
    };
    
    // Execute build table function, so data may be filtered when a date is typed
    buildTable(filterData);
};

// Execute handleClick function when filter button is clicked
d3.selectAll("#filter-btn").on("click", handleClick);

// Execute funtion to display table data
buildTable(tableData);