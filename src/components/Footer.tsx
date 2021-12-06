import './Footer.css';

export default function App() {
  return (
    <footer className="bg-light">
      <div
        className="text-center p-3"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
      >
        <p className="m-0">© 2021 &middot; Genshin Planner</p>
        <p className="m-0">
          Feito com 💕 por{' '}
          <a
            href="https://github.com/AloneInAbyss"
            target="_blank"
            rel="noreferrer"
          >
            Thiago Assi
          </a>
        </p>
      </div>
    </footer>
  );
}
