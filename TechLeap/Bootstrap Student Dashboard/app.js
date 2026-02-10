console.log("JS Loaded");

/* -------------------------
   STEP 1: Fetch students
-------------------------- */

async function fetchStudents() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const students = await response.json();
    return students;
}

/* -------------------------
   STEP 2: Display students
-------------------------- */

async function displayStudents() {
    const students = await fetchStudents();

    // Select the container from HTML
    const studentRow = document.getElementById("studentRow");

    students.forEach((student) => {
        // Create column
        const col = document.createElement("div");
        col.className = "col-md-4";

        // Insert Bootstrap card inside column
        col.innerHTML = `
  <div class="card mb-3">
    <div class="card-body">
      <h5 class="card-title">${student.name}</h5>
      <p class="card-text">Email: ${student.email}</p>
      <p class="card-text">City: ${student.address.city}</p>
    </div>
  </div>
`;


        // 🔴 THIS is what makes it visible
        studentRow.appendChild(col);
    });
}

/* -------------------------
   STEP 3: Run the program
-------------------------- */

displayStudents();

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("bg-dark", "text-white");
}


const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("bg-dark");
    document.body.classList.toggle("text-white");

    if (document.body.classList.contains("bg-dark")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});
