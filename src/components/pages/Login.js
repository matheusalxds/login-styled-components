import { useEffect, useState } from 'react';

import { Form, PasswordInput, Input, Button, Spinner } from '../common';
import { PageLayout } from './PageLayout';

let timeout;

const Login = () => {
  const [formFields, setFormFields] = useState({ username: '', password: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormFields((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  useEffect(() => {
    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, []);

  return (
    <PageLayout>
      <h1>Login</h1>
      <Form onSubmit={(e) => handleSubmit(e)}>
        {loading ? (
          <Spinner />
        ) : (
          <>
            <Input value={formFields.username} name="username" placeholder="Username" onChange={handleChange} />
            <PasswordInput value={formFields.password} onChange={handleChange} />
            <Button lg type="submit">
              {loading ? 'Loading...' : 'Login'}
            </Button>
            {!loading && (
              <>
                <div className="alt-text">or</div>
                <Button secondary>Register</Button>
              </>
            )}
          </>
        )}
      </Form>
    </PageLayout>
  );
};

Login.propTypes = {};
Login.defaultProps = {};

export { Login };
