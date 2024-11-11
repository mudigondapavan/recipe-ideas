import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='bg-white py-3'>
      <h1 className='text-2xl font-semibold tracking-widest uppercase mx-5'>
        <Link to='/'>Recipe Ideas</Link>
      </h1>
    </div>
  );
}

export default Header;
