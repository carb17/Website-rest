import { PORTAFOLIO } from '../../utils/config';

export function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__container'>
        <p className='footer__text'>
          © {new Date().getFullYear()} Restaurant · Web by:{' '}
          <a
            href={PORTAFOLIO}
            target='_blank'
            rel='noopener noreferrer'
            className='footer__item'
            aria-label="Beceiro Carla's portfolio"
          >
            Beceiro Carla
          </a>
        </p>
      </div>
    </footer>
  );
}
