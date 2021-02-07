//Loading spinner
export default function Loader({ show }) {
  return show ? (
    <div className="spinner">
  <div className="dot1 bg-card-dark dark:bg-card-light"></div>
  <div className="dot2 bg-card-dark dark:bg-card-light"></div>
</div>
  ) : null;
}
