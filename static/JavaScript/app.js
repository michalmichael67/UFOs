const tableData = data;
var tbody = d3.select("tbody");

function buildTable(data) {
    // clear existing data
    tbody.html("");

    // loop through each object in the data and append values to table
    data.forEach((dataRow) => {
        let row = tbody.append("tr");
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
        });
    });
}