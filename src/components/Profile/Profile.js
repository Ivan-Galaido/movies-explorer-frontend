import { PROPS_PROFILE } from "../../utils/constants";
import React, { useContext } from "react";
import "./Profile.css";
import Form, { Field, Submit } from "../Form/Form";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Profile({ onUpdateUser, onExit }) {

  const { name, email } = useContext(CurrentUserContext);

  const fieldList = PROPS_PROFILE.inputsList.map(item => (
      <Field key={`profile-${item.name}`} name={item.name}>
        {
          ({ isInvalid, errorMessage, ...inputProps }) => {
            return (
              <div className="profile__field">
                <label htmlFor={item.name} className="profile__label"> {item.label} </label>
                <input
                  className={`profile__input ${isInvalid ? "profile__input_error" : ""} `}
                  {...inputProps}
                  {...item}/>
                <span
                  className={`profile__error ${isInvalid ? "profile__error_visible" : ""} `}>
                {errorMessage || "Текст ошибки"}
              </span>
              </div>
            );
          }
        }
      </Field>
    ),
  );

  return (
    <Form
      className="profile"
      name="profile"
      onSubmit={onUpdateUser}
      validators={PROPS_PROFILE.validators}
      defaultValues={{ name, email }}
      isOpen={true}
    >
      <h2 className="profile__title">Привет, {name}!</h2>
      <fieldset className="profile__fieldset">
        {fieldList}
      </fieldset>
      <Submit>
        {
          ({ disabled }) => (
            <button
              className={`profile__btn ${disabled ? "profile__btn_disabled" : ""} `}
              type="submit"
              disabled={disabled}>
              Редактировать
            </button>
          )
        }
      </Submit>
      <button className="profile__btn profile__btn_type_exit" type="button" onClick={onExit}>Выйти из аккаунта</button>
    </Form>
  );
}

export default Profile;