export default function validateInfo(values) {
  let errors = {};

  if (!values.first_name.trim()) {
    errors.first_name = "First name required";
  } else if (values.first_name.length <= 3) {
    errors.first_name = "First name needs to be 4 characters or more";
  }

  if (!values.last_name.trim()) {
    errors.last_name = "Last name required";
  } else if (values.last_name.length <= 4) {
    errors.last_name = "Last name needs to be 5 characters or more";
  }

  if (!values.city.trim()) {
    errors.city = "City required";
  }

  if (!values.zip_code) {
    errors.zip_code = "Zip Code required";
  } else if (!/\d{2}\-\d{3}/.test(values.zip_code.trim())) {
    errors.zip_code = "Enter a valid zip code like 80-432";
  }

  return errors;
}
