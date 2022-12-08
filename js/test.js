let number1 = "";
let number2 = ""
let array = "";
let districtMenu = document.getElementById("districtMenu")
console.log(districtMenu)
fetch('https://provinces.open-api.vn/api/?depth=3')
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        /*  renderProvince(data)
           //console.log(data);              
           renderDistrict(data); */
        array = data;
        renderProvince()
        /* renderDistrict() */
    });

function renderProvince() {
    let result1 = ""
    for (let i = 0; i < array.length; i++) {
        result1 += `    
                     <p id="province${i}" onclick="selectProvince(${i}, '${array[i].name}')">${array[i].name}</p> 
                                                                                   
                  `
    }
    // console.log(result1, "67767");
    let provinceMenu = document.getElementById("provinceMenu");
    // console.log(provinceMenu);

    provinceMenu.innerHTML = result1
}


function selectProvince(i, name) {
    number1 = i;
    document.getElementById("province").value = name
    console.log(i, name)
    document.getElementById("provinceMenu").style.display = "none"
    renderDistrict()
}
function showProvince() {
    if (document.getElementById("provinceMenu").style.display == "none"||document.getElementById("provinceMenu").style.display =="" ) {

        document.getElementById("provinceMenu").style.display = "block"
    }else{
    document.getElementById("provinceMenu").style.display = "none"    
    }
    document.getElementById("province").value = ""
    document.getElementById("district").value = ""
    document.getElementById("village").value = ""
}


function renderDistrict() {
    document.getElementById("district").innerHTML = ""
    let result = ""
    // let districtMenu = document.getElementById("districtMenu")
    // console.log(districtMenu)
    for (let j = 0; j < array[number1].districts.length; j++) {
        console.log(array[number1].districts[j]);
        result += `    
                    <p id="district${j}" onclick="selectDistrict(${j})">${array[number1].districts[j].name}</p>                                                                          
                 `

    }
    console.log(result)
    districtMenu.innerHTML=result
}
function selectDistrict(j) {
    number2 = j;
    let district = document.getElementById(`district${j}`).innerHTML
    console.log(district);
    console.log(j);
    document.getElementById("district").value = district
    document.getElementById("districtMenu").style.display = "none"
    renderVillage()
}

function showDistrict() {
    if (document.getElementById("province").value=="") {
        document.getElementById("districtMenu").style.display = "none"
    }else{
        console.log(districtMenu.style.display)
        if (districtMenu.style.display == "none" || districtMenu.style.display == "") {
            console.log("hello")
            districtMenu.style.display ="block"
            renderDistrict()
        }else{
            
            districtMenu.style.display ="none"
            // console.log("hello")
        }
    
    document.getElementById("district").value = ""
    document.getElementById("village").value = ""
    }
}
function renderVillage(){
    document.getElementById("village").value = ""
    console.log(array[number1].districts[number2].wards);
    let result = ""
    let villageMenu = document.getElementById("villageMenu");
    for (let k = 0; k < array[number1].districts[number2].wards.length; k++) {
        
        result += `    
                    <p id="village${k}" onclick="selectVillage(${k})">${array[number1].districts[number2].wards[k].name}</p>                                                                          
                 `

        console.log(result);
    }villageMenu.innerHTML=result
}
function showVillage() {
    if(document.getElementById("province").value==""||document.getElementById("district").value==""){
    document.getElementById("villageMenu").style.display = "none"
    }else{
        if (document.getElementById("villageMenu").style.display == "none"||document.getElementById("villageMenu").style.display =="" ) {
    document.getElementById("villageMenu").style.display = "block"       
        }else{
            document.getElementById("villageMenu").style.display = "none"
        }
    document.getElementById("village").innerHTML = ""
    }
}
function selectVillage(k) {
    let village = document.getElementById(`village${k}`).innerHTML
    console.log(district);
    
    document.getElementById("village").value = village
    document.getElementById("villageMenu").style.display = "none"
}