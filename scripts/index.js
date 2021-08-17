// DOM Queries
const checkBox = document.querySelector(".menu-btn-checkbox")
const menuBtn = document.querySelector(".menu-btn")
const navLinks = document.querySelectorAll(".nav-link")

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("open")
})

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    const screenWidth = window.innerWidth

    if (screenWidth <= 576) {
      checkBox.checked = false
      menuBtn.classList.toggle("open")
    }
  })
})
