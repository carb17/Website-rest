import { PORTAFOLIO } from '../../utils/config';

export function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__container'>
        <p className='footer__text'>
          &copy; {new Date().getFullYear()} Desarrollado por{' '}
          <a
            href={PORTAFOLIO}
            target='_blank'
            rel='noopener noreferrer'
            className='footer__item'
          >
            Beceiro Carla
          </a>
        </p>
      </div>
    </footer>
  );
}
