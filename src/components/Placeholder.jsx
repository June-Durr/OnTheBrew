export default function Placeholder({ label, height = 'h-64' }) {
  return (
    <div
      className={`w-full ${height} flex items-center justify-center rounded-2xl border-2 border-dashed border-brand-accent bg-brand-bg`}
    >
      <span className="text-sm text-brand-accent">{label}</span>
    </div>
  )
}
