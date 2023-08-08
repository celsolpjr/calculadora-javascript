function Calculator() {

    this.display = document.querySelector(".display");

    this.start = () => {
        this.captureClick();
        this.pressEnter();
    }

    this.captureClick = () => {
        document.addEventListener("click", (event) => {
            const selectedTarget = event.target;

            if (selectedTarget.classList.contains("btn-num")) this.addDisplay(selectedTarget);
            if (selectedTarget.classList.contains("btn-clear")) this.clearDisplay();
            if (selectedTarget.classList.contains("btn-ac")) this.removeNumber();
            if (selectedTarget.classList.contains("btn-equal")) this.calcule();
        })
    }

    this.pressEnter = () => {
        document.addEventListener("keyup", (event) => {
            if (event.keyCode === 13) {
                this.calcule();
            }
        })
    }

    this.addDisplay = (value) => {
        this.display.value += value.innerText;
        this.display.focus();
    }

    this.calcule = () => {
        try {

            const equation = eval(this.display.value);

            if (!equation) {
                alert("Operação inválida");
            } 
            else {
                this.display.value = equation;
            }
        }
        catch {
            alert("Operação inválida");
        }
    }

    this.clearDisplay = () => {
        this.display.value = '';
    }

    this.removeNumber = () => {
        this.display.value = this.display.value.slice(0, -1);
    }

}

const calculator = new Calculator();
calculator.start();