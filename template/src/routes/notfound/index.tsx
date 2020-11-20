import { FunctionalComponent, h } from 'preact';
import * as style from './style.scss';
import { Link } from 'react-router-dom';

const Notfound: FunctionalComponent = () => {
  return (
    <div className={style.notfound}>
      <h1>Error 404</h1>
      <p>That page doesn&apos;t exist.</p>
      <Link to="/">
        <h4>Back to Home</h4>
      </Link>
    </div>
  );
};

export default Notfound;
