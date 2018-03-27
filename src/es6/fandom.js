const showMore = (element) => {
  const lessText = "Show Less";
  if(element.innerHTML === lessText) {
    document.getElementById('theRest').classList.remove('active');
    element.innerHTML = "Show More";
  } else {
    document.getElementById('theRest').classList.add('active');
    element.innerHTML = lessText;
  }
}
