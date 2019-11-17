function validateUsername() {
  var username = document.getElementById("username").value;
  if (username =='') {
    alert("Empty username.");
    document.getElementById("Username").focus();

      return false;
    }

    return true;
  }


  function validateEmail() {
    var email = document.getElementById("email").value;
    if (email =='') {
      alert("Empty email.");
      document.getElementById("Email").focus();

        return false;
      }

      return true;
    }


    function validatePassword() {
      var password = document.getElementById("password").value;
      if (password =='') {
        alert("Empty password.");
        document.getElementById("Password").focus();

          return false;
        }

        return true;
      }


  function validateForm() {

    if (!validateUsername()) {
      return false;
    }

    if (!validateEmail()) {
      return false;
    }

    if (!validatePassword()) {
      return false;
    }

    return true;
  }
