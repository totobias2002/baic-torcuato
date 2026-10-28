export default function Select({ label, error, id, options = [], className = '', ...props }) {
  return (
    <div className="ui-field">
      {label && <label htmlFor={id} className="ui-field__label">{label}</label>}
      <select id={id} className={`ui-select ${error ? 'ui-input--error' : ''} ${className}`} {...props}>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
      {error && <span className="ui-field__error">{error}</span>}
    </div>
  )
}
