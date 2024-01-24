import './LabeledData.css';

export type LabeledDataProps = {
  label: string;
  data: string;
};

export default function LabeledData({ label, data }: LabeledDataProps) {
  return (
    <div className="labeled-data-container">
      <span className="label-container">{label}</span>
      <span className="data-container">{data}</span>
    </div>
  );
}
