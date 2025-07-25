// function toggleSidebar() {
//   const sidebar = document.getElementById("sidebar");
//   if (sidebar.style.width === "250px") {
//     sidebar.style.width = "0";
//   } else {
//     sidebar.style.width = "250px";
//   }
// }

function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  if (sidebar.style.display === "flex") {
    sidebar.style.display = "none";
  } else {
    sidebar.style.display = "flex";
  }
}
