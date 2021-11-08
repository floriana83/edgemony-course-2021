// ----------- finestra modale -----------


const modal = document.querySelector(".modal");
const acceptBtn = document.querySelector("#btn-accept");

setTimeout (()=>{
  modal.style.zIndex=1;
  modal.style.opacity=1;
  }, 10000);


function hideModal() {
  modal.style.opacity = 0;

  setTimeout(() => {
    document.body.removeChild(modal);
  }, 350);
}

acceptBtn.addEventListener("click", hideModal, { once: true });



