import { ReactComponent as Icon } from "../svg/arrow-down.svg";
import '../styles/sass/Arrow.sass'

function Arrow() {
  return (
    <section className="arrow container">
      <Icon className="arrow__icon"/>
    </section>
  );
}

export default Arrow