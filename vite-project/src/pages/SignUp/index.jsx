import { NavLink } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { CiFacebook } from "react-icons/ci";
import { FcGoogle } from "react-icons/fc";
import "./styles.css";

const SignUp = () => {
  const defaultValue = {
    fName: "",
    lName: "",
    email: "",
    password: "",
  };

  const handleSubmit = async (values) => {
    const response = await fetch("http://localhost:3000/admin/createUser", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    const data = await response.json();
    console.log(data)
    console.log(response);
  
  };

  return (
    <div className="mainContainer">
      <div className="col-md-4 text-center box-shadow pt-4 pb-4 ">
        <h2 className="h2">Signup</h2>

        <Formik initialValues={defaultValue} onSubmit={handleSubmit}>
          <Form>
            <div className="fieldContainer">
              <div className="col-md-10  ">
                <Field
                  type="text"
                  name="fName"
                  placeholder="Enter Your fName"
                  className="form-control"
                />
              </div>
              <div className="col-md-10 ">
                <Field
                  type="text"
                  name="lName"
                  placeholder="Enter Your lName"
                  className="form-control"
                />
              </div>
              <div className="col-md-10 ">
                <Field
                  type="email"
                  name="email"
                  placeholder="Enter Your email"
                  className="form-control"
                />
              </div>
              <div className="col-md-10 ">
                <Field
                  type="password"
                  name="password"
                  placeholder="Enter Your Password"
                  className="form-control"
                />
              </div>
              <div className="col-md-10">
                <button className="btn btn-primary col-md-12" type="submit">
                  Sign Up
                </button>
              </div>
              <label className="mt-2">
                Already have an account? <NavLink to="#">Sign In</NavLink>
              </label>
              <br />
              <label>OR</label>
              <div className="col-md-10 pb-3">
                <button className="btn btnColor col-md-12">
                  <CiFacebook />
                  Login With Facbook
                </button>
              </div>
              <div className="col-md-10 border">
                <button className="btn  col-md-12">
                  <FcGoogle />
                  Login With Google
                </button>
              </div>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default SignUp;
