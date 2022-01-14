function ageCalculate() {

    let date = document.getElementById('dob').value;
    let month = document.getElementById('month').value;
    let year = document.getElementById('doby').value;

    let dob = new Date(`${date} ${month} ${year}`);
    

    let calculateDate = document.getElementById('calculateDate').value;
    let calculateMonth = document.getElementById('calculateMonth').value;
    let calculateYear = document.getElementById('calculateYear').value;
    
    let dobCalculate = new Date(`${calculateDate} ${calculateMonth} ${calculateYear}`);

    if (date>31 || calculateDate >31 || date =="" || (year && calculateYear) < 0 ) {
        alert("Give valid date ");
        return;
    }

    let difference = dobCalculate - dob;

    if(difference < 0){
        alert('Enter valid date');
    }

    // console.log(difference);
    if(difference >= 0){
        let days = Math.floor(difference / (1000 * 60 * 60 * 24));
        // console.log(days);
        let years = Math.floor(days/365)
        let months = Math.floor(years *12);
        let weeks = months*4;

        document.getElementById("result").innerHTML += 
        `<h5>${years} years </h5>
        <h5>${months} months</h5>
        <h5>${weeks} weeks</h5>
        <h5>${days} days</h5>  
        `
    }
   
    

  
}
function refresh(){
    window.location.reload();
} 