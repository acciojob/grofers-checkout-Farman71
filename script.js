const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  // Select all the price elements
  let prices = document.querySelectorAll(".price");
  let total = 0;

  // Loop through each price element and add it to the total
  prices.forEach(priceele => {
    total += parseFloat(priceele.textContent);
  });

  // Create a new row for the total
  let row = document.createElement("tr");

  // Create a cell for the total price and set its content
  let totCell = document.createElement("td");
  totCell.id = "ans";  // Assign the id 'ans' to the total price cell
  totCell.colSpan = 2;  // Make the cell span across both columns
  totCell.textContent = `Total is: Rs ${total}`;

  // Append the total cell to the row
  row.appendChild(totCell);

  // Select the table and append the new row
  const table = document.querySelector("table");
  table.appendChild(row);
};

getSumBtn.addEventListener("click", getSum);
