module.exports.validateRegisterInput = (
  username,
  email,
  password,
  confirmPassword
) => {
  const errors = {};
  if (username.trim() === '') {
    errors.username = 'Kullanıcı adı boş geçilemez';
  }
  if (email.trim() === '') {
    errors.email = 'Email boş geçilemez';
  } else {
    const regEx = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;
    if (!email.match(regEx)) {
      errors.email = 'Geçerli bir email giriniz.';
    }
  }
  if (password === '') {
    errors.password = 'Parola boş geçilemez.';
  } else if (password !== confirmPassword) {
    errors.confirmPassword = 'Parolalar farklı.';
  }

  return {
    errors,
    valid: Object.keys(errors).length < 1
  };
};

module.exports.validateLoginInput = (username, password) => {
  const errors = {};
  if (username.trim() === '') {
    errors.username = 'Kullanıcı adı boş geçilemez.';
  }
  if (password.trim() === '') {
    errors.password = 'Parola boş geçilemez.';
  }

  return {
    errors,
    valid: Object.keys(errors).length < 1
  };
};
