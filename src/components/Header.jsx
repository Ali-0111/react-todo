import styles from '@/styles/Header.module.css';
import Navbar from '@/components/Navbar';

const Header = () => {

  const HeaderStyle = {
    padding: '20px 0',
    lineHeight: '1.5em',
    color: '#aeadad',
    textAlign: 'center',
  };
  return (
    <header style={HeaderStyle} className={styles.header}>
      <Navbar />
    <h1>todos</h1>
    <p>Items will persist in the browser local storage</p>
  </header>
  )
}

export default Header;