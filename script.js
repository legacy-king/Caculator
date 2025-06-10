const display = document.getElementById('display');
 let currentInput = '';
    let firstOperand = null;
    let secondOperand = null;
    let operator = null;
    let resultDisplayed = false;

      const add = (a, b) => a + b;
    const subtract = (a, b) => a - b;
    const multiply = (a, b) => a * b;
    const divide = (a, b) => b === 0 ? 'Nope.' : a / b;

    const operate = (op, a, b) => {
      a = parseFloat(a);
      b = parseFloat(b);
      switch (op) {
        case '+': return add(a, b);
        case '-': return subtract(a, b);
        case '*': return multiply(a, b);
        case '/': return divide(a, b);
        default: return null;
      }
       };

    document.querySelectorAll('button').forEach(btn => {
      btn.addEventListener('click', () => {
        const value = btn.textContent;

        if (btn.classList.contains('clear')) {
          currentInput = '';
          firstOperand = null;
          secondOperand = null;
          operator = null;
          resultDisplayed = false;
          display.textContent = '0';
          return;
        }

        if (btn.classList.contains('backspace')) {
          if (!resultDisplayed) {
            currentInput = currentInput.slice(0, -1);
            display.textContent = currentInput || '0';
          }
          return;
        }

        if (btn.classList.contains('decimal')) {
          if (!currentInput.includes('.')) {
            currentInput += '.';
            display.textContent = currentInput;
          }
          return;
        }

        if (btn.classList.contains('operator')) {
          if (firstOperand && operator && currentInput) {
            secondOperand = currentInput;
            let result = operate(operator, firstOperand, secondOperand);
            result = (typeof result === 'number') ? Math.round(result * 100000) / 100000 : result;
            display.textContent = result;
            firstOperand = result;
            currentInput = '';
          } else if (currentInput) {
            firstOperand = currentInput;
            currentInput = '';
          }
          operator = value;
          resultDisplayed = false;
          return;
        }

        if (btn.classList.contains('equal')) {
          if (firstOperand && operator && currentInput) {
            secondOperand = currentInput;
            let result = operate(operator, firstOperand, secondOperand);
            result = (typeof result === 'number') ? Math.round(result * 100000) / 100000 : result;
            display.textContent = result;
            currentInput = result.toString();
            firstOperand = null;
            operator = null;
            resultDisplayed = true;
          }
          return;
        }

        // If result was just displayed and user presses a digit, start new input
        if (resultDisplayed) {
          currentInput = value;
          resultDisplayed = false;
        } else {
          currentInput += value;
        }
        display.textContent = currentInput;
      });
    });

    // Optional: Keyboard Support
    document.addEventListener('keydown', (e) => {
      const key = e.key;
      const map = {
        'Enter': '=',
        'Escape': 'C',
        'Backspace': '←'
      };
      const btn = Array.from(document.querySelectorAll('button')).find(b => b.textContent === (map[key] || key));
      if (btn) btn.click();
    });