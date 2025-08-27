import * as Yup from "yup";

export const contact = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Please Enter a valid email")
    .required("Please enter an email")
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email"),
  subject: Yup.string().required("Subeject is required"),
  message: Yup.string().required("Field is Required"),
});
