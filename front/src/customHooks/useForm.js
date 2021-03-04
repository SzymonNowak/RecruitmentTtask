import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeOrder } from "actions/order";
const useForm = (validateInfo, callback, order) => {
  const dispatch = useDispatch();

  const [values, setValues] = useState({
    first_name: "",
    last_name: "",
    city: "",
    zip_code: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const dlaKarola = {
    order: [
      {
        id: 457,
        quantity: 1,
      },
    ],
    first_name: values.first_name,
    last_name: values.last_name,
    city: values.city,
    zip_code: values.zip_code,
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateInfo(values));
    setIsSubmitting(true);
  };
  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      dispatch(makeOrder(dlaKarola));
      console.log(dlaKarola);
      callback();
    }
  }, [errors]);

  return { handleChange, values, handleSubmit, errors };
};

export default useForm;