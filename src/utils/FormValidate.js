export const formValidation = (email, password) => {
  const validEmail = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/.test(email),
    validPassword = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(
      password
    );
  // validName = /(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/.test(fullname);
  // if (!validName)
  //     return 'Enter a valid Name';

  if (!validEmail) return "Email ID is not Valid";

  if (!validPassword) return "Password is not Valid";
};
