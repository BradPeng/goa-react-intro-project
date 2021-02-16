import Button from '@material-ui/core/Button';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Path } from '../constants/path';

function PrimaryNav() {
  const location = useLocation();

  return (
    <nav>
      <ul>
        <li>
          <Link to={Path.Home}>
            <Button color="primary" disabled={location.pathname === Path.Home}>
              Home
            </Button>
          </Link>
        </li>
        <li>
          <Link to={Path.Language}>
            <Button color="primary" disabled={location.pathname === Path.Language}>
              Language
            </Button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default PrimaryNav;
