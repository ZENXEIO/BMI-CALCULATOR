let button = document.getElementById('btn');

var bmi;

button.addEventListener('click', () => {
    
    const height = parseInt(document.getElementById('hight').value)/100;

    const weight = parseInt(document.getElementById('weight').value);

    const result = document.getElementById('output');

    let height_status = false, weight_status = false;


    if(height === '' || isNaN(height) || (height<=0))
    {
        document.getElementById('height_error').innerHTML = 'Please provide a valid hight' + '<br>';
    }

    else
    {
        document.getElementById('height_error').innerHTML = '';
        height_status = true;
    }
    
    if(weight === '' || isNaN(weight) || (weight<=0))
    {
        document.getElementById('weight_error').innerHTML = 'Please provide a valid weight' + '<br>';
    }

    else
    {
        document.getElementById('weight_error').innerHTML = '';
        weight_status = true;
    }


    if(height_status && weight_status)
    {
        bmi = (weight/(height * height).toFixed(2));

        if(bmi < 18.6)
        {
            result.innerHTML = 'You are underweight :' + bmi;
        }

        else if( bmi >= 18.6 && bmi < 24.9)
        {
            result.innerHTML = 'You are healthy :' + bmi;
        }

        else if(bmi>=24.9 && bmi<30)
        {
            result.innerHTML = 'You are Overweight :' + bmi;
        }

        else
        {
            result.innerHTML = 'you are Obese :' + bmi;
        }
    }

    else
    {
        alert('The Forms has errors');
        result.innerHTML = '';
    }

    

});