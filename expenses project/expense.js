document
  .getElementById("expense-form")
  .addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default form submission
    var expenseValue = document.getElementById("expense").value;
    var amountValue = document.getElementById("amount").value;
    var categoryValue = document.getElementById("category").value;
    console.log(expenseValue, "kjhgfdertfgh");
    // Create a new div to display the expense details
    var expenseDiv = document.createElement("div");
    expenseDiv.className = "expense-item";
    expenseDiv.innerHTML = `
      <p><strong>Expense:</strong> ${expenseValue}</p>
      <p><strong>Amount:</strong> ${amountValue}</p>
      <p><strong>Category:</strong> ${categoryValue}</p>
  `;

    // Append the new expense div to the expense list container
    document.getElementById("expense-list").appendChild(expenseDiv);

    // Clear form fields after submission
    document.getElementById("expense-form").reset();
  });
