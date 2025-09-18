export default function Section({ children, className }) {
  const styles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  };

  return (
    <section className={className} style={styles}>
      {children}
    </section>
  );
}
