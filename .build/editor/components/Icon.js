export const Icon = ({ name, strokeWidth = 2 }) => {
  return <svg className="icon" width={24} height={24} strokeWidth={strokeWidth}>
    <use xlinkHref={`#icon-${name}`} />
  </svg>
}
