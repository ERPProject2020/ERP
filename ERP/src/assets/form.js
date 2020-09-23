function addressFunction() {
    if (document.getElementById('same').checked) {
        document.getElementById('l_house_number').value = document.
        getElementById('p_house_number').value;
        document.getElementById('l_colony_name').value = document.
        getElementById('p_colony_name').value;


        document.getElementById('l_city').value = document.
        getElementById('p_city').value;
        document.getElementById('l_country').value = document.
        getElementById('p_country').value;

        document.getElementById('l_pincode').value = document.
        getElementById('p_pincode').value;
        //document.getElementById('l_landmark').value=document. 
        //  getElementById('p_landmark').value; 

        document.getElementById('l_state').value = document.
        getElementById('p_state').value;


    } else {
        document.getElementById('l_house_number').value = "";
        document.getElementById('l_colony_name').value = "";

        document.getElementById('l_pincode').value = "";
        document.getElementById('l_city').value = "";

        document.getElementById('l_country').value = "";
        document.getElementById('l_state').value = "";
        //document.getElementById('l_landmark').value = "";
        console.log(pstate);
    }
}