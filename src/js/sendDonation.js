const apiURL = "http://localhost:1337/api/donations";
const strapi_token =
  "9b6b503059cfda8fe1b256810c3d75273afb5cbf5689920c3b70dd0e67fc549decb30c62fc3c09f408edabda6bad462c9af082cd01a1b252614f8b1c435c5bec11e698e384905877b9972224b61d5c5beb613f4d23e058839c2d8986414b03814fc3852768c10861d6cdb4218565929ce2502399385cf10d72c64406172b73ef";
export function sendDonation(element) {
  //alert("se llama a la funcion sendDonation");
  
  function sendDonationTo() {
    //alert('entra a donation to', data);
    // let obj_constructed = {
    //   data: {
    //     email: data.email,
    //     donor_name: data.donor_name,
    //     reason: data.reason,
    //     donation: data.donation,
    //   },
    // };
    let obj_constructed = {
      "data": {
      "email":"kmorales201314@gmail.com",
      "donor_name":"Kevin Juarez",
      "reason":"sponsor",
      "donation": 34
  }};
    try {
      fetch(apiURL, {
        method: "POST",
        body: JSON.stringify(obj_constructed),
        headers: {
          "Content-Type": "application/json",
          Auhorization: `Bearer ${strapi_token}`,
        },
      }).then(res => res.json()).catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', response));
    } catch (error) {
      alert('error', error)
    }
    
  }  
  element.addEventListener('click', () => sendDonationTo());
}


