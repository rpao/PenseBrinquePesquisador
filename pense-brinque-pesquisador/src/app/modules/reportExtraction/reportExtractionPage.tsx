import './reportExtractionPage.css';

import { useCallback } from "react";
import Button from "react-bootstrap/esm/Button";

export default function ReportExtractionPage() {
  const handleGeneralReportClick = useCallback(
    () => { console.log('relatorio geral') },
    []
  );

  const handleIndividualReportClick = useCallback(
    () => { console.log('relatorio individual') },
    []
  );

  return (
    <div className="main-container">
      <Button onClick={handleGeneralReportClick}>Relatorio Geral</Button>
      <Button onClick={handleIndividualReportClick}>Relatorio Individual</Button>
    </div>
  )
}