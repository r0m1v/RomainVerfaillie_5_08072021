const regexName = /^(([a-zA-ZÀ-ÿ]+[\s-]{1}[a-zA-ZÀ-ÿ]+)|([a-zA-ZÀ-ÿ]+))$/;
const regexCity = /^(([a-zA-ZÀ-ÿ]+[\s-]{1}[a-zA-ZÀ-ÿ]+)|([a-zA-ZÀ-ÿ]+)){1,10}$/;
const regexMail = /^[a-zA-Z0-9.-]+@[a-zA-Z0-9.-]{2,}.[a-z]{2,4}$/;
const regexAddress = /^(([a-zA-ZÀ-ÿ0-9]+[\s-]{1}[a-zA-ZÀ-ÿ0-9]+)){1,10}$/;



const send = () => {
  fetch("http://localhost:3000/api/teddies/order", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      lastName: "romain",
      firstName: "verfaillie",
      address:"6 avenue pasteur",
      city: "marnes la coquete",
      email: "rom1@gmail.com",
    }),
  })
    .then(function (res) {
      if (res.ok) {
        return res.json();
      }
    })
    .then(function (value) {
      /*document.getElementById("result").innerText = value.postData.text;*/
      console.log(value);
    });
};

document.getElementById("bloc_form").addEventListener("submit", (e) => {
  e.preventDefault();
  const contact = {
    lastName: document.getElementById("lastName").value,
    firstName: document.getElementById("firstName").value,
    address: document.getElementById("address").value,
    city: document.getElementById("city").value,
    email: document.getElementById("email").value, 
  };
  if (
      (regexName.test(contact.lastName) == true) &
      (regexName.test(contact.firstName) == true) &
      (regexAddress.test(contact.address) == true) &
      (regexCity.test(contact.city) == true) &
      (regexMail.test(contact.email) == true)
    ) 
  alert("Commande confirmée");
  send();
});
