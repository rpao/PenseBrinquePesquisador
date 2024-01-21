'use client';
import './reportsPage.css';
import { useCallback } from 'react';
import Button from 'react-bootstrap/esm/Button';

export const ReportsHref = 'home/reports';

export default function ReportsPage() {
  const handleGeneralReportClick = useCallback(() => {
    console.log('relatorio geral');
  }, []);

  const handleIndividualReportClick = useCallback(() => {
    console.log('relatorio individual');
  }, []);

  return (
    <>
      <Button onClick={handleGeneralReportClick}>Relatorio Geral</Button>
      <Button onClick={handleIndividualReportClick}>
        Relatorio Individual
      </Button>
    </>
  );
}
