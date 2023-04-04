import { ReactComponent as ArrowDown } from "../svg/arrow-down.svg";
import '../styles/sass/Arrow.sass'

function Arrow() {
  return (
    <section className="arrow container">
      <ArrowDown className="arrow__icon"/>
    </section>
  );
}

export default Arrow