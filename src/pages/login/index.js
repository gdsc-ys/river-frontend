import GithubLogo from '../../assets/GitHub-Mark-32px.png';
import styled, { css } from 'styled-components';
import { useForm } from 'react-hook-form';
/**
 * Login page
 */
const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isDirty, errors, isValid },
  } = useForm({
    mode: 'onChange',
  });

  //TODO: Change onSubmit login
  const onSubmit = (data) => {
    const userJson = JSON.stringify(data);
    const { email, password } = userJson;
  };

  return (
    <LoginContainer>
      <LoginWrapper>
        <LoginHeader>
          {/* TODO: put icon here! */}
          <span>Sign In</span>
        </LoginHeader>
        <LoginMain>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <InputWrapper>
              <LabelWrapper>
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="example@test.com"
                  aria-invalid={
                    !isDirty ? undefined : errors.email ? 'true' : 'false'
                  }
                  {...register('email', {
                    required: 'Email Input Required',
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message:
                        'Not valid Email. Please Check your Email Address',
                    },
                  })}
                />
                {errors.email && (
                  <InvalidMessage role="alert">
                    {errors.email.message}
                  </InvalidMessage>
                )}
              </LabelWrapper>
              <LabelWrapper>
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  type="password"
                  placeholder="********"
                  aria-invalid={
                    !isDirty ? undefined : errors.password ? 'true' : 'false'
                  }
                  {...register('password', {
                    required: 'Password Required',
                    minLength: {
                      value: 8,
                      message: 'Password must be minimum 8 letters',
                    },
                    maxLength: {
                      value: 30,
                      message: 'Password must be maximum 30 letters',
                    },
                  })}
                />
                {errors.password && (
                  <InvalidMessage role="alert">
                    {errors.password.message}
                  </InvalidMessage>
                )}
              </LabelWrapper>
            </InputWrapper>
            <LoginButton
              type="submit"
              disabled={isSubmitting}
              isValid={isValid}
            >
              sign in
            </LoginButton>
          </form>
          <GithubLoginButton disabled={isSubmitting}>
            <img src={GithubLogo} width="18" height="18" alt="GithubLogo" />
            sign in with github
          </GithubLoginButton>
          <LinkWrapper>
            <a href="/auth/register">
              <span>Not a member? Sign up here!</span>
            </a>
            <a href="/">
              <span>Lost your Password? Reset password</span>
            </a>
          </LinkWrapper>
        </LoginMain>
      </LoginWrapper>
    </LoginContainer>
  );
};

const flexCenter = ({ horizontal = true }) => css`
  display: flex;
  flex-direction: ${horizontal ? 'row' : 'column'};
  align-items: center;
  justify-content: center;
`;

const LoginContainer = styled.div`
  width: 100vw;
  height: 100vh;

  overflow: hidden;
  user-select: none;
`;

const LoginWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  ${flexCenter({ horizontal: false })}

  width: 45%;
  padding: 20px;

  background-color: #ebebeb;
  border-radius: 20px;
`;

const LoginHeader = styled.div`
  ${flexCenter({ horizontal: false })}
  gap: 10px;

  margin-bottom: 30px;

  span {
    // Sign in message
    font-size: 36px;
    font-weight: 500;
  }
`;

const LoginMain = styled.section`
  width: 80%;
  margin: 0 auto;
  ${flexCenter({ horizontal: false })}

  form {
    width: 100%;

    ${flexCenter({ horizontal: false })}

    gap: 40px;
  }

  label {
    // label: Email, Password
    margin-bottom: 10px;
    font-size: 24px;
    font-weight: 500;
  }

  input {
    width: calc(100% - 20px);
    border-radius: 5px;

    font-size: 24px;
    padding: 15px 10px;
    color: #616161;

    &:hover {
      border: 1px solid #000000;
      transition: border 0.2s ease-in-out;
    }

    &:not(hover) {
      border: 1px solid #7e7d7d;
      transition: border 0.2s ease-in-out;
    }

    &:invalid {
      border: 1px solid #f85151;
      transition: border 0.2s ease-in-out;
    }
  }
`;

const LabelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;

  gap: 30px;
`;

const InvalidMessage = styled.small`
  display: block;
  position: relative;
  top: 10px;

  font-size: 15px;
  color: #7e7d7d;
`;

const LoginButton = styled.button`
  width: 90%;
  height: fit-content;

  margin: 10px 0;
  padding: 10px 0;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${(props) => (props.isValid ? `#ffffff` : `#a39e9e`)};
  background-color: ${(props) => (props.isValid ? `#42a5f5` : `#736e6e`)};
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 1px -2px,
    rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;

  border: 0.5px solid #7e7d7d;
  border-radius: 5px;

  cursor: pointer;
  text-transform: uppercase;
  transition: background-color 0.25s ease-in-out 0s,
    box-shadow 0.25s ease-in-out 0s;
  font-size: 16px;
  font-weight: 600;

  &:hover {
    background-color: ${(props) => (props.isValid ? `#2e73ab` : `#736e6e`)};
  }

  &:active {
    box-shadow: rgb(0 0 0 / 20%) 0px 5px 5px -3px,
      rgb(0 0 0 / 14%) 0px 8px 10px 1px, rgb(0 0 0 / 12%) 0px 3px 14px 2px;
  }
`;

const GithubLoginButton = styled(LoginButton)`
  background-color: white;
  color: black;
  gap: 10px;

  &:hover {
    background-color: #d7d7d7;
  }
`;

const LinkWrapper = styled.div`
  width: 100%;

  margin: 10px auto;

  display: flex;
  justify-content: space-around;
  gap: 0;

  a {
    color: gray;

    &:link {
      text-decoration: none;
      color: rgb(46, 115, 171);
    }

    &:hover {
      color: black;
      transition: color 0.2s ease-in-out;
      text-decoration: underline;
    }
  }

  span {
    font-size: 15px;
  }
`;

export default LoginPage;
