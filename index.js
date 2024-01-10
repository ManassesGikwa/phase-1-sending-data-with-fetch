// Add your code here
// const formData = {
//     name: "manasses",
//     email: "manassesgikwa@gmail.com",
//   };
  
//   const configurationObject = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//     },
//     body: JSON.stringify(formData),
//   };
  
//   fetch("http://localhost:3000/users", configurationObject)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (object) {
//       console.log(object);
//     });
function submitData(name, email) {
    const url = 'http://localhost:3000/users';
    const data = {
      name: name,
      email: email
    };
  
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(data)
    };
  
    fetch(url, options)
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error:', error));
    //   .catch(error => {
    //     console.error('Error:', error);
    //     appendErrorMessageToDOM(error.message);
 // });
  
}submitData("buddy", "buddy@gmail.com")