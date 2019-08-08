import React from 'react';
import Fieldinput from './formComponents/Fieldinput';
import Select from './formPseudoElems/Select';
import Label from './formPseudoElems/Label';
import Button from '../Button';
import { connect } from 'react-redux';
import * as actions from '../../tools/redux/actions/index';

const HeroForm = (props) => {

  let
  {
    formFieldSet,
    nameVal,
    lastVal,
    phoneVal,
    mailVal,

    updateFormName,
    updateFormLast,
    updateFormPhone,
    updateFormEmail
  } = props;

  const validateForm = () => {

    if (nameVal && lastVal && phoneVal && mailVal) {

      return ('is-outlined is-info is-radiusless is-large is-fullwidth has-text-white');

    } else {

      return ('is-static is-outlined is-dark is-radiusless is-large is-fullwidth has-text-dark');

    }
  }

  let optionsCall = [
    "Please select an option",
    "9:00 am - 12:00 pm",
    "12:00 pm - 3:00 pm",
    "3:00 pm - 6:00 pm"
  ]
  let optionsDates = [
    "Please select an option",
    "January - April",
    "May - August",
    "September - December"
  ]

  return (
    <React.Fragment>
      <div id="mc_embed_signup">
        <form
          action="https://gmail.us20.list-manage.com/subscribe/post?u=da9e327496004c1c6803cf0b4&amp;id=769ad4dfad"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
          noValidate
        >
          <div className="columns">
            <div className="column">
              <div className="mc-field-group">
                <Fieldinput
                  Type='text'
                  Name='FNAME'
                  _Id='mce-FNAME'
                  Placeholder='Please enter your first name'
                  inputIcon={nameVal ? ('fas fa-user-check') : ('far fa-user')}
                  Value={formFieldSet.nameValue || ''}
                  formHandler={e => updateFormName(e)}
                >
                  First Name
              </Fieldinput>
              </div>
              <div className="mc-field-group">
                <Fieldinput
                  Type='tel'
                  Name='PHONE'
                  _Id='mce-PHONE'
                  Placeholder='123 456 7890'
                  inputIcon={phoneVal ? ('fas fa-mobile-alt') : ('fas fa-mobile')}
                  Value={formFieldSet.phoneValue || ''}
                  formHandler={e => updateFormPhone(e)}
                >
                  Phone number
              </Fieldinput>
              </div>
            </div>
            <div className="column">
              <div className="mc-field-group">
                <Fieldinput
                  Type='text'
                  Name='LNAME'
                  _Id='mce-LNAME'
                  Placeholder='Please enter your last name'
                  inputIcon={lastVal ? ('fas fa-user-check') : ('far fa-user')}
                  Value={formFieldSet.lastValue || ''}
                  formHandler={e => updateFormLast(e)}
                >
                  Last Name
              </Fieldinput>
              </div>
              <div className="mc-field-group">
                <Fieldinput
                  Type='email'
                  Name='EMAIL'
                  _Id='mce-EMAIL'
                  Placeholder='mail@mailme.com'
                  inputIcon={mailVal ? ('far fa-envelope') : ('far fa-envelope-open')}
                  Value={formFieldSet.emailValue || ''}
                  formHandler={e => updateFormEmail(e)}
                >
                  e-mail
              </Fieldinput>
              </div>
              <div id="mce-responses" className="clear">
                <div className="response" id="mce-error-response"></div>
                <div className="response" id="mce-success-response"></div>
              </div>
            </div>
          </div>
          <div className="columns" id='dropdown'>
            <div className="column is-flex">
              <p className='is-small has-text-shadow'><strong className='has-text-white '>What's the best time to contact you?</strong></p>
              <div className="mc-field-group">
                
                <Select
                  Options={optionsCall}
                  Name='CALL_AT'
                  _Id='mce-CALL_AT'
                >
                </Select>
              </div>
              </div><div className="column is-flex">
              <p className='is-small has-text-shadow'><strong className='has-text-white '>When are you coming to Mexico?</strong></p>
              <div className="mc-field-group">
                
                <Select
                  Options={optionsDates}
                  Name='PREF_DATES'
                  _Id='mce-PREF_DATES'
                >
                </Select>
              </div>
            </div>
          </div>
          <Button
            addClass={validateForm()}
            Type='submit'
            Value='Subscribe'
            _Id='mc-embedded-subscribe'
          >
            Begin your booking
          </Button>
        </form>
      </div>
    </React.Fragment>
  )
}

const mapStateToProps = ({ actions }) => {
  const {
    nameVal,
    lastVal,
    phoneVal,
    mailVal,
    formFieldSet }
    = actions
  return {
    nameVal,
    lastVal,
    phoneVal,
    mailVal,
    formFieldSet
  }
}

export default connect(mapStateToProps, actions)(HeroForm)