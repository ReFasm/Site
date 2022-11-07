import { NavbarLink } from './NavbarLink';
import styles from "../styles/style.module.css";


export default function Navbar(): JSX.Element {
  console.log(styles.animated_in);
  return (
    <nav id={styles.navbar}>
      <NavbarLink icon="&#xE71B;" href="/" title="Shorten a link" />
      <NavbarLink icon="&#xE74C;" href="/dashboard" title="Dashboard" />
      <NavbarLink icon="&#xE946;" href="/about" title="About" />
      <NavbarLink icon="&#xE910;" href="/login" title="Login" additionalClasses={[styles.align_right, styles.colors_alt_minimal, styles.pr_fix]} iconAdditionalClasses={[styles.colors_alt_minimal]}/>
    </nav>
  );
}
