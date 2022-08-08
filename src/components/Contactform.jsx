import React from "react";
import { useForm } from "react-hook-form";
import { Contactarea, FormContainer, FormTitle } from "./styled/Contact.styled";
import { Container } from "./styled/Container.styled";
import { ServiceCon } from "./styled/Service.styled";
import Mail from "../agroImg/mail.png";
import Down from "../agroImg/textdown.png";

const Contactform = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  console.log(errors);
  return (
    <ServiceCon>
      <Container>
        <Contactarea>
          <FormContainer>
            <FormTitle>
              <h3>Send us a Message</h3>
              <img src={Mail} alt="/" />
            </FormTitle>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="formControl">
                <div className="input">
                  <label htmlFor="firstname">Name</label>
                  <div>
                    <input
                      type="text"
                      placeholder="First Name"
                      id="firstname"
                      {...register("firstname", {
                        required: true,
                        maxLength: 80,
                      })}
                    />
                  </div>
                </div>
                <div className="input">
                  <label htmlFor="lastname" className="last">
                    Last
                  </label>
                  <div>
                    <input
                      type="text"
                      placeholder="Last Name"
                      id="lastname"
                      {...register("lastname", {
                        required: true,
                        maxLength: 80,
                      })}
                    />
                  </div>
                </div>
              </div>
              <div className="formControl">
                <div className="input">
                  <label htmlFor="email">Email</label>
                  <div>
                    <input
                      type="text"
                      placeholder="example@gmail.com"
                      id="email"
                      {...register("email", {
                        required: true,
                        pattern: /\S+@\S+\.\S+/,
                      })}
                    />
                  </div>
                </div>
                <div className="input">
                  <label htmlFor="tel">Phone</label>
                  <div>
                    <input
                      type="tel"
                      placeholder="+234 90674748883"
                      id="tel"
                      {...register("tel", {
                        required: true,
                        minLength: 9,
                        maxLength: 12,
                      })}
                    />
                  </div>
                </div>
              </div>
              <div className="formControl">
                <div className="input f-width">
                  <label htmlFor="company">Group or Company</label>
                  <div>
                    <input type="text" id="company" className="f-width" />
                  </div>
                </div>
              </div>
              <div className="formControl lastp">
                <div className="input f-width">
                  <label htmlFor="help">How can we help ?</label>
                  <div className="inputControls">
                    <textarea
                      name="help"
                      id="help"
                      cols="30"
                      rows="10"
                      className="f-width textfield"
                    ></textarea>
                    <img src={Down} alt="/" />
                  </div>
                </div>
              </div>
              <div className="submit">
                <button className="btn">Submit</button>
              </div>
            </form>
          </FormContainer>
        </Contactarea>
      </Container>
    </ServiceCon>
  );
};

export default Contactform;
