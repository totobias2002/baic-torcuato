export default function Textarea({ label, error, id, className = '', ...props }) {
  return (
    <div className="ui-field">
      {label && <label htmlFor={id} className="ui-field__label">{label}</label>}
      <textarea id={id} className={`ui-textarea ${error ? 'ui-input--error' : ''} ${className}`} {...props} />
      {error && <span className="ui-field__error">{error}</span>}
    </div>
  )
}
