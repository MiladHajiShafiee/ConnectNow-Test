import './contact-styles.css';

const Contact = () => {
  return (
    <div className='contact-page'>
      <div className='page-title'>GET IN TOUCH</div>
      <div className='page-description'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam totam
        culpa exercitationem laudantium quia debitis necessitatibus nam corporis
        quod veniam.
      </div>
      <div className='form'>
        <div className='form-label'>Contact Form</div>
        <div className='field'>
          <div className='field-label'>
            Name<span>*</span>
          </div>
          <input id='filed-name' className='field-input' />
        </div>
        <div className='field'>
          <div className='field-label'>
            Email Address <span>*</span>
          </div>
          <input id='field-email' className='field-input' />
        </div>
        <div className='field' id='message-field'>
          <div className='field-label'>
            Message<span>*</span>
          </div>
          <input id='field-message' className='field-input' />
        </div>
        <div className='button-wrapper'>
          <button id='send-button'>send</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
