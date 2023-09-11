import React from 'react';
import styles from './Login.module.css';

function Login() {
  return (
    <>
      <div id="particles-js"></div>
      <div className={styles.login}>
        <div className={styles.container}>
          <div className={styles.loginContainerWrapper}>
            <div className={styles.logo}>
              <i className="fa fa-sign-in"></i>
            </div>
            <div className={styles.welcome}>
              <strong>Let's get you logged in!</strong>
            </div>

            <form>
              <div className={styles.formGroup}>
                <input
                  id="login_username"
                  className={`form-control input-lg ${styles.input}`}
                  type="email"
                  placeholder="Username"
                  required
                />
                <i className="fa fa-user"></i>
              </div>
              <div className={styles.formGroup}>
                <input
                  id="login_password"
                  className={`form-control input-lg ${styles.input}`}
                  type="password"
                  placeholder="Password"
                  required
                />
                <i className="fa fa-lock"></i>
              </div>
              <div className={styles.formGroup}>
                <button
                  type="submit"
                  className={`btn btn-success btn-lg btn-block ${styles.btn}`}
                >
                  Login
                </button>
              </div>
              <div className={styles.forgotLinks}>
                <a href="#" className={styles.forgotUsername}>
                  Forgot Username?
                </a>
                <span className={styles.divider}>|</span>
                <a href="#" className={styles.forgotPassword}>
                  Forgot Password?
                </a>
              </div>
            </form>
            <div className={styles.registerLink}>
              <p>
                New to the world of online banking? Let's get you started –{' '}
                <a href="#">Register now!</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
