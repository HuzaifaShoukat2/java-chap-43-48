// Script For Question 1
function alertOnClick(){
    alert("Thank You For Clicking");
}

// Script For Question 2

function mobilePurchased(){
    alert("Thank You For Purchasing");
}

// Script For Question 3

 // Function to add a new row to the table
 function addRow() {
    const table = document.getElementById("studentTable").getElementsByTagName('tbody')[0];
    const newRow = table.insertRow(table.rows.length);

    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);

    cell1.innerHTML = table.rows.length;
    cell2.innerHTML = '<input type="text" class="student-name">';
    cell3.innerHTML = '<input type="text" class="class-number">';
    cell4.innerHTML = '<button onclick="deleteRow(this)" class="delete-btn">Delete</button>';
}

// Function to delete a row
function deleteRow(btn) {
    const row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);

    // Update row numbers after deletion
    const table = document.getElementById("studentTable").getElementsByTagName('tbody')[0];
    for (let i = 0; i < table.rows.length; i++) {
        table.rows[i].cells[0].innerHTML = i + 1;
    }
}

// Script For Question 5
i=0;
function increment()
{
    i++;
document.getElementById("Numbering").innerHTML=i;
}
function decrement()
{
     i--;
document.getElementById("Numbering").innerHTML=i;
}