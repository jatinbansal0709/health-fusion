const openFormButton = document.getElementById("openForm");
const formContainer = document.getElementById("formContainer");
const entriesBody = document.getElementById("entriesBody");
const moreDetailsButton = document.querySelector('#more-details-button');
const moreDetailsForm = document.querySelector('#more-details-form');





moreDetailsButton.addEventListener('click', () => {
  moreDetailsForm.style.display = 'block';
});



const familyData = JSON.parse(localStorage.getItem("family"));
if(familyData != null){
  familyData.forEach(element => {
    const entry = document.createElement("tr");
    entry.innerHTML = `
      <td>${element.name}</td>
      <td>${element.email}</td>
      <td>${element.age}</td>
      <td>${element.dob}</td>
      <td>${element.phno}</td>
      <td><a href="#">GO TO</a></td>
    `;
    entriesBody.appendChild(entry);
  });
}


openFormButton.addEventListener("click", function() {
  formContainer.style.display = "block";
});

const form = document.querySelector("form");
form.addEventListener("submit", function(event) {
  event.preventDefault();
  
  const name = form.elements.name.value;
  const email = form.elements.email.value;
  const age = form.elements.age.value;
  const dob = form.elements.dob.value;
  const phno = form.elements.phno.value;

  const formData = [{
    "name": name,
    "email": email,
    "age": age,
    "dob": dob,
    "phno": phno
  }];


  
  if(familyData != null){
    const newData = [...familyData,...formData];
    localStorage.setItem("family",JSON.stringify(newData));
    formData.forEach(element => {
      const entry = document.createElement("tr");
      entry.innerHTML = `
        <td>${element.name}</td>
        <td>${element.email}</td>
        <td>${element.age}</td>
        <td>${element.dob}</td>
        <td>${element.phno}</td>
        <td><a href="#">GO TO</a></td>
      `;
      entriesBody.appendChild(entry);
    });
  }else{
    localStorage.setItem("family",JSON.stringify(formData));
    formData.forEach( ele => {
      const entry = document.createElement("tr");
      entry.innerHTML = `
        <td>${ele.name}</td>
        <td>${ele.email}</td>
        <td>${ele.age}</td>
        <td>${ele.dob}</td>
        <td>${ele.phno}</td>
      `;
      entriesBody.appendChild(entry);
    })
  }

  

  
  
  formContainer.style.display = "none";
});
