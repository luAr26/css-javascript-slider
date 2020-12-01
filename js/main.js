(function () {
  const initslider = () => {
    // Define main containers
    const sliderContainer = document.getElementById('slider');
    const paginationContainer = document.createElement('div');

    // Create the pagination container
    paginationContainer.className = 'pagination';
    sliderContainer.prepend(paginationContainer);

    // Count the slides
    const slideCount = document.querySelectorAll('.slide').length;
    console.log(slideCount);

    for (let i = slideCount; i > 0; i--) {
      // Generate the radio buttons
      console.log(i);

      let radioBtn = document.createElement('input');
      radioBtn.type = 'radio';
      radioBtn.name = 'slide-radios';
      radioBtn.className = 'slide-radio';
      radioBtn.id = `slide-radio-${i}`;

      if (i === 1) {
        radioBtn.checked = true;
      }

      // Prepend the radio button to slider container
      sliderContainer.prepend(radioBtn);

      // Generate the labels
      let label = document.createElement('label');
      label.setAttribute('for', `slide-radio-${i}`);
      label.textContent = i;

      // Prepend the label to pagination container
      paginationContainer.prepend(label);
    }

    // 
  }
  document.body.onload = initslider;
}());