export default function Footer() {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 pt-4 mt-8 border-t border-gold/30">
      <div className="flex gap-6 text-2xl">
        <a href="#" className="text-gray-400 hover:text-gold transition">
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a href="#" className="text-gray-400 hover:text-gold transition">
          <i className="fas fa-envelope"></i>
        </a>
        <a href="#" className="text-gray-400 hover:text-gold transition">
          <i className="fas fa-phone-alt"></i>
        </a>
      </div>
      <div className="text-sm text-gray-400">
        <span className="text-gold">✉</span> hello@fablopez.com ·{" "}
        <span className="text-gold">📞</span> +1 (555) 123-4567
      </div>
      <div className="text-xs text-gray-500">© 2026 Fabio Lopez · UEFA Pro</div>
    </div>
  );
}
