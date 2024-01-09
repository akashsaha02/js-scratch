const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#results')

    if (height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = `please give a valid height`
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = `please give a valid weight`
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2)

        // result.innerHTML = `Your BMI is: <span>${bmi}</span>`
        const resDiv = document.createElement('div')
        resDiv.appendChild(document.createTextNode(`Your BMI is: ${bmi}`))
        result.appendChild(resDiv)

        if (bmi < 18.6) {
            result.appendChild(document.createElement('p').appendChild(document.createTextNode('You are underweight')))

        }
        else if (bmi >= 18.6 && bmi < 25.9) {
            result.appendChild(document.createElement('p').appendChild(document.createTextNode('Your BMI is in the normal range')))
        }
        else {
            result.appendChild(document.createElement('p').appendChild(document.createTextNode('You are overweight')))
        }


    }
})