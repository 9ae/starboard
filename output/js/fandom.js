const showMore = element => {
  const lessText = "Show Less";
  if (element.innerHTML === lessText) {
    document.getElementById('theRest').classList.remove('active');
    element.innerHTML = "Show More";
  } else {
    document.getElementById('theRest').classList.add('active');
    element.innerHTML = lessText;
  }
};

window.onload = () => {
  document.getElementById('joinleave').addEventListener('click', evt => {
    if (evt.target.innerHTML === "Join") {
      evt.target.innerHTML = "Leave";
      evt.target.classList.add('btn-outline');
    } else {
      evt.target.innerHTML = "Join";
      evt.target.classList.remove('btn-outline');
    }
  });
};