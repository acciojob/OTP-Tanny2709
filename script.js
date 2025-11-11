// Your JS code here

const inputs = document.querySelectorAll(".code");

// Auto-focus first box on load
inputs[0].focus();

inputs.forEach((input, index) => {
  
  // Typing forward
  input.addEventListener("input", () => {
    const value = input.value;

    if (value.length === 1 && index < inputs.length - 1) {
      inputs[index + 1].focus();
    }
  });

  // Backspace behavior
  input.addEventListener("keydown", (e) => {
    if (e.key === "Backspace") {
      input.value = "";  // clear current box

      if (index > 0) {
        inputs[index - 1].focus();
      }
    }
  });
});
