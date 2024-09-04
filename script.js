document.getElementById("convert-btn").addEventListener("click", function() {
    const degree = parseFloat(document.getElementById("degree").value);
    const unit = document.getElementById("unit").value;
    const convertTo = document.getElementById("convert-in").value;
    let result = 0;

    if (isNaN(degree)) {
        alert("Please enter a valid number.");
        return;
    }

    if (unit === "celsius" && convertTo === "fahrenheit") {
        result = (degree * 9/5) + 32;
        displayResult(result, "F");
    }
    else if (unit === "fahrenheit" && convertTo === "celsius") {
        result = (degree - 32) * 5/9;
        displayResult(result, "C");
    }
    else {
        result = degree;
        displayResult(result, unit === "celsius" ? "C" : "F");
    }

    document.querySelector('.result').classList.add('show');
});

function displayResult(result, unit) {
    const resultElement = document.querySelector(".result h1");
    resultElement.innerHTML = `${result.toFixed(2)}<span>°${unit}</span>`;
}

