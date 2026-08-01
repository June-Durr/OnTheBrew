export default function Placeholder({ label, height = 'h-64' }) {
  return (
    <div
      className={`w-full ${height} flex items-center justify-center rounded-2xl border-2 border-dashed border-brand-line bg-brand-surface`}
    >
      <span className="font-sans text-sm text-brand-ink/40">{label}</span>
    </div>
  )
}
