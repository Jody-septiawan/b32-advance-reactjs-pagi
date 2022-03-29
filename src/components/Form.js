import formStyle from '../styles/FormStyle';

// create Form component
function Form() {
  return (
    // code inside div
    <form style={formStyle.form}>
      <div style={formStyle.formGroup}>
        <label htmlFor="username" style={formStyle.formLabel}>
          Username
        </label>
        <input
          style={formStyle.formInput}
          type="text"
          id="username"
          placeholder="Input username here ..."
        />
      </div>
    </form>
  );
}

export default Form;
