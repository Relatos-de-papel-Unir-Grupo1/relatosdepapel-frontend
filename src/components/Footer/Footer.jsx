
import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-shell footer-container">
        <div>
          <p className="eyebrow-chip mb-4">Editorial cálida</p>
          <p className="max-w-md text-sm leading-7 text-[var(--color-ink-muted)]">
            &copy; {new Date().getFullYear()} Relatos de Papel. Un espacio para descubrir lecturas con una navegación serena, clara y contemporánea.
          </p>
        </div>

        <div className="footer-links">
          <a href="/contact">Contacto</a>
          <a href="/terms">Terminos</a>
          <a href="/privacy">Privacidad</a>
          <a href="/help">Ayuda</a>
        </div>
      </div>
    </footer>
  );
}