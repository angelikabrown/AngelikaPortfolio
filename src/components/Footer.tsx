const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Angelika. Built with passion for data.
          </p>
          <p className="text-sm text-muted-foreground">
            Designed with 💚
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
