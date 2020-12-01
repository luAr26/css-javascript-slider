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

    // Automate the slider change
    const changeSlide = () => {
      //Get the radio buttons
      const radioButtons = [...document.querySelectorAll('.slide-radio')];

      // Get the current index
      const currentIndex = radioButtons.findIndex(rb => rb.checked);

      // Check the next radio button
      radioButtons[(currentIndex + 1) % radioButtons.length].checked = true;
    };

    let autoRun = setInterval(changeSlide, 5000);

    // Stop autorun at mouse enter
    paginationContainer.addEventListener('mouseenter', () => clearInterval(autoRun));
    // Start again the auto at mouse leave
    paginationContainer.addEventListener('mouseleave', () => autoRun = setInterval(changeSlide, 5000));
  }
  document.body.onload = initslider;
}());