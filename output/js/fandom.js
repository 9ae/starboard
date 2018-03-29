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

const showCats = element => {
  element.style.display = 'none';
  document.getElementById('tabMenu').classList.add('show');
};

const expandSearch = () => {
  document.getElementById('filterbutton').innerHTML = "";
  document.getElementById('filterbutton').classList.remove('show');
  document.getElementById('filterbutton').classList.add('hide');
};

const contractSearch = () => {
  document.getElementById('filterbutton').innerHTML = "Filter";
  document.getElementById('filterbutton').classList.remove('hide');
  document.getElementById('filterbutton').classList.add('show');
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