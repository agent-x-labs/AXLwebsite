interface DetailRow {
  label: string;
  value: string;
}

interface EntityDetailsProps {
  rows: readonly DetailRow[];
}

export function EntityDetails({ rows }: EntityDetailsProps) {
  return (
    <dl className="legal-details">
      {rows.map((row) => (
        <div key={row.label}>
          <dt>{row.label}</dt>
          <dd>{row.value}</dd>
        </div>
      ))}
    </dl>
  );
}
