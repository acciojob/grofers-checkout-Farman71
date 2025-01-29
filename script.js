const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	let prices=document.querySelectorAll(".prices");
	let total=0;
	prices.forEach(priceele=>{
		total=total+parseFloat(priceele.textContent);
	});
	let row=document.createElement("tr");
	let totCell=document.createElement("td")
	totCell.colSpan=2;
	totCell.textContent=`Total is : ${total}`;
	  row.appendChild(totCell);
	 const table = document.querySelector("table");
  table.appendChild(row);
};

getSumBtn.addEventListener("click", getSum);

