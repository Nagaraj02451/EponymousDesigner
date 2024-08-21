import React, { useState } from 'react';

function PasswordInput({ onChange, value }) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="form-group">
      <input
        type={showPassword ? 'text' : 'password'}
        id="password_field"
        name="password"
        placeholder="Password"
        value={value}
        onChange={onChange}
        className="form-control"
      />
      <div className="password-toggle" onClick={togglePasswordVisibility}>
        {showPassword ? (
          <img src="/images/eye-open.svg" alt="Show Password" />
        ) : (
          <img src="/images/eye-closed.svg" alt="Hide Password" />
        )}
      </div>
    </div>
  );
}

export default PasswordInput;