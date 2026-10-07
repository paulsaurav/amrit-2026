export default function Container({ children }) {
  return (
    <div className="mx-auto max-w-[1175px] px-4">
      {children}
    </div>
  );
}
