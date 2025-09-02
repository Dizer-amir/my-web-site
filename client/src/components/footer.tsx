const Footer = () => {
  return (
    <footer className="glass-card py-12 text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-3 mb-6" data-testid="footer-logo">
          <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white text-xl font-bold">
            💊
          </div>
          <span className="text-white text-2xl font-bold">Dawa</span>
        </div>
        <p className="text-white/80 text-lg mb-4" data-testid="footer-description">
          محلل الأدوية الذكي - رعاية صحية ذكية في متناول يدك
        </p>
        <p className="text-white/60" data-testid="footer-copyright">
          © 2025 Dawa. جميع الحقوق محفوظة. تطبيق تعليمي للمعلومات الطبية
        </p>
      </div>
    </footer>
  );
};

export default Footer;
