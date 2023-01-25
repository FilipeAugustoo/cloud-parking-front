import logo from 'assets/logo_cloud.png';

export default function Header() {
  return (
    <header>
      <h1><img src={logo} alt="Logo do site" /></h1>      
    </header>
  );
}