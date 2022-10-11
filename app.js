const tableBody = document.getElementById("table-body")

let flights = [
  {
    time: "08:11",
    destination: "FORT LAUDERDALE",
    flight: "XA 203",
    gate: "A 01",
    remarks: "ON TIME"
  },
  {
    time: "10:40",
    destination: "CHICAGO",
    flight: "BB 125",
    gate: "B 17",
    remarks: "ON TIME"
  },
  {
    time: "08:11",
    destination: "LOS ANGELES",
    flight: "OL 505",
    gate: "C 02",
    remarks: "CANCELLED"
  },
  {
    time: "08:11",
    destination: "CLEVELAND",
    flight: "GH 203",
    gate: "A 22",
    remarks: "ON TIME"
  },
  {
    time: "08:11",
    destination: "CHARLOTTE",
    flight: "0X 203",
    gate: "D 05",
    remarks: "DELAYED"
  },
]

function populateTable(){
  for(const flights of flights){
    const tableRow = document.createElement("tr")

    for(const flightDetail in flight){
      const tableCell = document.createElement('td')
      tableCell.innerText = flight[flightDetail]
      tableRow.append(tableCell)
    }
    
    tableBody.append(tableRow)
  }
}

populateTable()