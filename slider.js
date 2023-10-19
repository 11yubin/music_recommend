const rangeThumb1 = document.getElementById('range-thumb-1'),
      rangeNumber1 = document.getElementById('range-number-1'),
      rangeLine1 = document.getElementById('range-line-1'),
    happy = document.getElementById('range-input-1')

const happyRangeInputSlider = () =>{
    rangeNumber1.textContent = happy.value

   const thumbPosition = (happy.value / happy.max),
         space = happy.offsetWidth - rangeThumb1.offsetWidth

   // We insert the position of the input thumb
   // thumbPosition = 0.5, space = 216 (0.5 * 216 = 108)
   rangeThumb1.style.left = (thumbPosition * space) + 'px'

   // We insert the width to the slider with the value of the input value
   // rangeInput.value = 50, ancho = 50%
   rangeLine1.style.width = happy.value + '%'

   // We call the range input
   happy.addEventListener('input', happyRangeInputSlider)
}

const rangeThumb2 = document.getElementById('range-thumb-2'),
      rangeNumber2 = document.getElementById('range-number-2'),
      rangeLine2 = document.getElementById('range-line-2'),
     calm = document.getElementById('range-input-2')

const calmRangeInputSlider = () =>{
    rangeNumber2.textContent = calm.value

   const thumbPosition = (calm.value / calm.max),
         space = calm.offsetWidth - rangeThumb2.offsetWidth

   // We insert the position of the input thumb
   // thumbPosition = 0.5, space = 216 (0.5 * 216 = 108)
   rangeThumb2.style.left = (thumbPosition * space) + 'px'

   // We insert the width to the slider with the value of the input value
   // rangeInput.value = 50, ancho = 50%
   rangeLine2.style.width = calm.value + '%'

   // We call the range input
   calm.addEventListener('input', calmRangeInputSlider)
}

const rangeThumb3 = document.getElementById('range-thumb-3'),
      rangeNumber3 = document.getElementById('range-number-3'),
      rangeLine3 = document.getElementById('range-line-3'),
     sent = document.getElementById('range-input-3')

const sentRangeInputSlider = () =>{
    rangeNumber3.textContent = sent.value

   const thumbPosition = (sent.value / sent.max),
         space = sent.offsetWidth - rangeThumb3.offsetWidth

   // We insert the position of the input thumb
   // thumbPosition = 0.5, space = 216 (0.5 * 216 = 108)
   rangeThumb3.style.left = (thumbPosition * space) + 'px'

   // We insert the width to the slider with the value of the input value
   // rangeInput.value = 50, ancho = 50%
   rangeLine3.style.width = sent.value + '%'

   // We call the range input
   sent.addEventListener('input', sentRangeInputSlider)
}

happyRangeInputSlider()
calmRangeInputSlider()
sentRangeInputSlider()