
    // Data array
    const data = [
      { name: "Ali", email: "ali@example.com", age: 25 },
      { name: "Umer", email: "umer@example.com", age: 30 },
      { name: "Affan", email: "affan@example.com", age: 25 },
      { name: "Ahmed", email: "ahmed@example.com", age: 30 },
      { name: "Adnan", email: "adnan@example.com", age: 22 },
      { name: "Raza", email: "raza@example.com", age: 28 },
      { name: "Ayaan", email: "ayaan@example.com", age: 35 },
      { name: "Aryaan", email: "aryaan@example.com", age: 40 },
      { name: "Usman", email: "usman@example.com", age: 29 },
      { name: "Faiz", email: "faiz@example.com", age: 26 },
      { name: "Owais", email: "owais@example.com", age: 33 },
      { name: "Ayaz", email: "ayaz@example.com", age: 24 }
    ];

    // Validation booleans
    let isNameValid = false;
    let isEmailValid = false;
    let isAgeValid = false;

    // Validation functions
    function validateName() {
      const name = document.getElementById("name").value;
      const nameError = document.getElementById("nameError");
      isNameValid = name.length >= 3;
      nameError.style.display = isNameValid ? "none" : "block";
    }

    function validateEmail() {
      const email = document.getElementById("email").value;
      const emailError = document.getElementById("emailError");
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      isEmailValid = emailPattern.test(email);
      emailError.style.display = isEmailValid ? "none" : "block";
    }

    function validateAge() {
      const age = parseInt(document.getElementById("age").value, 10);
      const ageError = document.getElementById("ageError");
      isAgeValid = age > 0;
      ageError.style.display = isAgeValid ? "none" : "block";
    }

    // Submit handler
    function handleSubmit() {
      validateName();
      validateEmail();
      validateAge();

      if (isNameValid && isEmailValid && isAgeValid) {
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const age = parseInt(document.getElementById("age").value, 10);

        const result = data.find(
          (item) => item.name === name && item.email === email && item.age === age
        );

        const resultDiv = document.getElementById("result");
        const tableContainer = document.getElementById("table-container");

        if (result) {
          resultDiv.textContent = "Data Found:";
          tableContainer.innerHTML = `
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Age</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>${result.name}</td>
                  <td>${result.email}</td>
                  <td>${result.age}</td>
                </tr>
              </tbody>
            </table>`;
        } else {
          resultDiv.textContent = "Data not exist.";
          tableContainer.innerHTML = "";
        }
      }
    }
