const Footer = () => {
  return (
    <footer className="custom-footer mt-auto border-t border-neutral-200 py-6 text-center dark:border-neutral-700">
      <p className="text-sm text-neutral-500 dark:text-neutral-400">
        © 2024 Investigación Urgente. All rights reserved. Web design by{" "}
        <a
          href="mailto:arquitectoikerluna@gmail.com"
          className="link-underline rounded px-1 py-0.5 text-neutral-600 transition-colors duration-200 hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800/30 dark:hover:text-white"
        >
          Iker Luna
        </a>
      </p>
    </footer>
  );
};

export default Footer;
