const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center justify-center text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Dulaj Upananda. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
