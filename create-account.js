function createAccount(pin, amount=0) {
    return {
        checkBalance(pinCheck) {
            if (pinCheck !== pin) {
                return "Invalid PIN."
            }
            return `$${amount}`;
        },
        deposit(pinCheck, added) {
            if (pinCheck !== pin) {
                return "Invalid PIN."
            }
            amount += added;
            return `Successfully deposited $${added}. Current balance: $${amount}.`
        },
        withdraw(pinCheck, spent) {
            if (pinCheck !== pin) {
                return "Invalid PIN."
            }
            if (spent > amount) {
                return "Withdrawal amount exceeds account balance. Transaction cancelled."
            }
            amount -= spent;
            return `Successfully withdrew $${spent}. Current balance: $${amount}.`;
        },
        changePin(pinCheck, newPin) {
            if (pinCheck !== pin) {
                return "Invalid PIN."
            }
            pin = newPin;
            return "PIN successfully changed!"
        }
    }
}

module.exports = { createAccount };
