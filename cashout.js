document.getElementById('cashout-btn')
    .addEventListener('click', function () {
        // get agent num # validate 
        const cashoutNumberInput = document.getElementById('cashout-number');
        const cashoutNumber = cashoutNumberInput.value;
        console.log(cashoutNumber);

        const cashoutAmountInput = document.getElementById('cashout-amount');
        const cashoutAmount = cashoutAmountInput.value;
        console.log(cashoutAmount);

        const balanceElement = document.getElementById('balance');
        const balance = balanceElement.innerText;
        console.log(balance);
        const newBalance = Number(balance) - Number(cashoutAmount);


        if (newBalance < 0) {
            alert('Invalid Amount');
            return;
        }

        const cashoutPininput = document.getElementById('cashout-pin');
        const Pin = cashoutPininput.value;
        if (Pin === '1234') {
            alert('cashout successfull')
            console.log('new balance', newBalance);
            balanceElement.innerText = newBalance;

        }
        else {
            alert('Invalid pin');
            return;
        }


    })