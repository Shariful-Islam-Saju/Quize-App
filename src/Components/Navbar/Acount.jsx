import style from './style.module.css'

const Acount = () => {
  return (
    <>

      <div className={style.account}>
        <span className="material-icons-outlined" title="Account">
          account_circle
        </span>
        <a href="signup.html">Signup</a>
        <span className="material-icons-outlined" title="Logout">
          {" "}
          logout{" "}
        </span>
      </div>
    </>
  );
};

export default Acount;
