export default function SourceFooter() {
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "unknown-app";
  const utmUrl = `https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  return (
    <footer className="animate-fade-up-8 pb-16 pt-12 text-center">
      <p className="font-mono text-[11px] leading-[1.8] text-fin-muted">
        Notes are phrased to avoid "glossary-as-requirements" mistakes and to
        separate <strong className="text-fin-text/70">protocol-native</strong>{" "}
        capability from{" "}
        <strong className="text-fin-text/70">system-level</strong> (wrappers)
        and <strong className="text-fin-text/70">deployment claims</strong> that
        need citations.
      </p>
      <p className="mt-6 font-mono text-[11px] text-fin-muted/60">
        © {new Date().getFullYear()} Built with{" "}
        <span className="text-fin-cyan" aria-label="love">
          ♥
        </span>{" "}
        using{" "}
        <a
          href={utmUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-fin-cyan transition-opacity hover:opacity-80"
        >
          caffeine.ai
        </a>
      </p>
    </footer>
  );
}
