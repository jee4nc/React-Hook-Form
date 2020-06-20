import React from "react";
import "./../SASS/Form.scss";
import { useForm } from "react-hook-form";
import Message from "./message";

const Formulario = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data, event) => {
    event.target.reset();
    Message();
  };

  return (
    <div className="containerForm">
      <div className="gridContainer">
        <form onSubmit={handleSubmit(onSubmit)} className="containerForm__Form">
          <div className="ContainerForm__InputROW">
            <label> Name: </label>
            <input
              name="name"
              placeholder="Type your name here"
              ref={register({
                required: true,
                maxLength: 35,
                pattern: "[A-Za-z]{3}"
              })}
            />
            {errors.name && (
              <span>
                Este campo es obligatorio y no puede superar 25 caracteres.
              </span>
            )}
          </div>
          <div className="ContainerForm__InputROW">
            <label> Email: </label>
            <input
              name="email"
              type="email"
              placeholder="Type your email here"
              ref={register({ required: true, maxLength: 30 })}
            />
            {errors.email && (
              <span>
                Este campo es obligatorio y no puede superar 25 caracteres.
              </span>
            )}
          </div>
          <div className="ContainerForm__InputROW">
            <label> Numero: </label>
            <input
              name="number"
              placeholder="Type your number here"
              type="number"
              ref={register({ required: true })}
            />
            {errors.number && (
              <span>Este campo es obligatorio y no puede contener letras.</span>
            )}
          </div>
          <div className="ContainerForm__InputROW">
            <label> Message: </label>
            <textarea
              className="text_area"
              name="message"
              placeholder="Type your message here"
              ref={register({ required: true, maxLength: 55 })}
            />
            {errors.message && (
              <span>
                Este campo es obligatorio y no puede contener más de 55
                caracteres.
              </span>
            )}
          </div>
          <input className="button_submit" type="submit" />
        </form>
      </div>
    </div>
  );
};
export default Formulario;
