const submitButtonEl = document.querySelector("#logout");


const logout = async () => {
    const response = await fetch('/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
    console.log('here')
    if (response) {
      document.location.replace('/');
      alert('Logging out..Bye!');
    } else {
      alert('Could not log out.');
    }
  };
  

document.querySelector('#logout').addEventListener('click', logout);



