# Caculator
# JavaScript Calculator

This project is a simple yet robust calculator built with **HTML**, **CSS**, and **JavaScript**. It performs basic arithmetic operations and handles various user interactions gracefully without using `eval()` or `Function()` for security and learning purposes.

---

## 🚀 Features

* Basic math operations: **Add**, **Subtract**, **Multiply**, **Divide**
* Operate on two numbers at a time
* Keyboard support
* Decimal input with validation
* Snarky message for division by zero ("Nope.")
* Clears display and resets state
* Backspace support to undo inputs
* Prevents invalid inputs (e.g., multiple decimals)
* Starts new input after displaying a result
* Rounds results to 5 decimal places to prevent display overflow

---

## 📁 Files

* `index.html` – Contains HTML structure, embedded CSS, and JavaScript logic.
* `README.md` – This file, with project overview and usage.

---

## 📦 How to Use

1. **Clone the repository**

   ```bash
   git clone https://github.com/legacy-king/Caculator.git
   ```
2. **Open `index.html` in your browser**

   ```bash
   open index.html  # or just double-click it
   ```
3. **Interact with the calculator** using buttons or your keyboard.

---

## 🛠️ Implementation Details

* **No `eval()` or `Function()` used** – all logic is explicitly handled via functions.
* Handles edge cases like:

  * Pressing operator multiple times consecutively
  * Division by zero
  * Starting new calculation after result is shown
  * Entering incomplete expressions

---

## 📈 Extra Credit Features

* [x] Decimal input with validation
* [x] Backspace support
* [x] Keyboard interaction

---

## 📚 Learning Outcomes

* DOM manipulation
* Event delegation
* Handling user input in a stateful app
* Secure string parsing for mathematical operations

---

## 🧠 Future Improvements

* Add support for parentheses
* Add operation history or expression log
* Use CSS Grid for a responsive layout
* Implement memory functions (MC, MR, M+, etc.)

---

## 👨‍💻 Author

**Kingsley Ivom**
[GitHub Profile](https://github.com/legacy-king)

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
