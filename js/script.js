// Carga dinámica del archivo JSON
document.addEventListener("DOMContentLoaded", () => {
  fetch("data/data.json")
    .then(response => response.json())
    .then(data => {
      const tbody = document.querySelector("#tablaProcesos tbody");
      data.procesos.forEach(proc => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${proc.nombre}</td>
          <td>${proc.reactivos}</td>
          <td>${proc.eficiencia}</td>
        `;
        tbody.appendChild(row);
      });
    })
    .catch(error => console.error("Error cargando JSON:", error));
});
