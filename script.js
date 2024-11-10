function calculateSavings() {
    const mainIncome = parseFloat(document.getElementById('mainIncome').value);
    const rent = parseFloat(document.getElementById('rent').value);
    const food = parseFloat(document.getElementById('food').value);
    const clothes = parseFloat(document.getElementById('clothes').value);


    const totalExpenses = rent + food + clothes;


    if(mainIncome < totalExpenses){
       return Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Fokinni tor ato taka nai!! 🤪",
            
          });
    }

    const savings = mainIncome - totalExpenses;  


    document.getElementById('totalExpenses').innerText = `Total Expenses: ${totalExpenses.toFixed(2)} TK`;
    document.getElementById('savings').innerText = `Savings: ${savings.toFixed(2)} TK`;
}

