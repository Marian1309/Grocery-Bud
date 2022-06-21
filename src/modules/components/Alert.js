import { useEffect } from 'react';

const Alert = ({ type, mess, removeAlert, list }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 3000);
    return () => clearTimeout(timeout);
  }, [list]);
  return (
    <>
      <p className={`alert alert-${type}`}>{mess}</p>
    </>
  );
};

export { Alert };
