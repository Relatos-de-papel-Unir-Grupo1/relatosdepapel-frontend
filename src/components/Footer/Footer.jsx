
import './Footer.css';

export default function Footer() {
  return (
    <footer>
      <div>
        <p>&copy; {new Date().getFullYear()} Relatos de Papel. Todos los derechos reservados.</p>
      </div>
      <div>
        <a href="/contact">Contacto</a>
        <a href="/terms">Terminos</a>
        <a href="/privacy">Privacidad</a>
        <a href="/help">Ayuda</a>
      </div>
    </footer>
  );
}