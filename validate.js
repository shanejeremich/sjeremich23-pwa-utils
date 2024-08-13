const validateName = (req, res, next) => {
  const { name } = req.body;
  const regex = /^[a-zA-Z ]+$/;

  if (name && !regex.test(req.body.name)) {
    return res.status(422).json({
      status: false,
      message: "Name is not valid.  Only letters and spaces are allowed",
    });
  }
  next();
};

const validateEmail = (req, res, next) => {
  const { email } = req.body;
  const regex =
    /^(?:[a-zA-Z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+\/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-zA-Z0-9-]*[a-zA-Z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)])$/;

  if (email && !regex.test(req.body.email)) {
    return res.status(422).json({
      status: false,
      message: "Email is not valid.  Valid format is RFC 5322 standard",
    });
  }
  next();
};

const validatePhone = (req, res, next) => {
  const { phone } = req.body;
  const regex = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
  if (phone && !regex.test(req.body.phone)) {
    return res.status(422).json({
      status: false,
      message: "Phone is not valid. Valid format is xxx-xxx-xxxx",
    });
  }
  next();
};

const validateBirthday = (req, res, next) => {
  const { birthday } = req.body;
  const regex = /(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.](19|20)\d\d/;
  if (birthday && !regex.test(req.body.birthday)) {
    return res.status(422).json({
      status: false,
      message:
        "Birthday is not valid.  Valid format is mm/dd/yyyy, mm-dd-yyyy, mm.dd.yyyy, or mm dd yyyy",
    });
  }
  next();
};

const validatePassword = (req, res, next) => {
  const { password } = req.body;
  const regex = /^(?=.*[a-z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  if (password && !regex.test(req.body.password)) {
    return res.status(422).json({
      status: false,
      message:
        "Password is not valid.  Must be at least 8 characters long and contain at least one letter and one number",
    });
  }
  next();
};

const validateAll = async (req, res, next) => {
  const validations = [
    validateName,
    validateEmail,
    validatePhone,
    validateBirthday,
    validatePassword,
  ];

  try {
    for (let validate of validations) {
      await new Promise((resolve, reject) => {
        validate(req, res, err => {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        });
      });

      if (res.headersSent) {
        return;
      }
    }
    next();
  } catch (err) {
    next(err);
  }
};

module.exports = {
  validateAll,
  validateBirthday,
  validateEmail,
  validatePassword,
  validatePhone,
};
