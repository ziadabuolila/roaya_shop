const menuToggle = document.getElementById("menuToggle");
const sidebar = document.getElementById("sidebar");
const closeBtn = document.getElementById("closeSidebar");
menuToggle.addEventListener("click", () => {
sidebar.classList.toggle("open");
});
closeBtn.addEventListener("click", () => {
sidebar.classList.remove("open");
});
function toggleSubmenu(element) {
const submenu = element.nextElementSibling;
submenu.classList.toggle("open");
const arrow = element.querySelector(".arrow");
arrow.classList.toggle("rotate");
}
document.addEventListener("click", function (e) {
const isOutsideSidebar = !sidebar.contains(e.target);
const isNotToggle = !menuToggle.contains(e.target);
const isLink = e.target.tagName === 'A';
const isCloseBtn = e.target.id === 'closeSidebar';
if ((isOutsideSidebar && isNotToggle) || isCloseBtn) {
    sidebar.classList.remove("open");
}
});