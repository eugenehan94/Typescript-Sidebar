const toggleBtn = document.querySelector<HTMLButtonElement>(".sidebar-toggle");
const closeBtn = document.querySelector<HTMLButtonElement>(".close-btn")
const sidebar = document.querySelector<HTMLElement>(".sidebar")

toggleBtn?.addEventListener("click", () => {
  if(sidebar?.classList.contains("show-sidebar")){
    sidebar.classList.remove("show-sidebar")
  }else {
    sidebar?.classList.add("show-sidebar")
  }
  //sidebar?.classList.toggle("show-sidebar")
})

closeBtn?.addEventListener("click", () => {
  sidebar?.classList.remove("show-sidebar")
})

export {}
