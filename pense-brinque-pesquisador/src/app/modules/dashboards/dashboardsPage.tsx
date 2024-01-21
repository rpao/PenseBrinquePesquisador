'use client'
import './dashboardsPage.css';
import { BarChart } from '@/app/components/charts/barChart';
import { Accordion, AccordionBody, AccordionHeader } from 'react-bootstrap';
import { DashboardPageProps } from './dashboards.type';

export default function DashboardPage({ dashboardCharts }: DashboardPageProps) {

  return (
    <div className='main-container'>
      <Accordion>
        <AccordionHeader>
          {dashboardCharts[0].headerTitle}
        </AccordionHeader>
        <AccordionBody>
          <BarChart {...dashboardCharts[0].chartData} />
        </AccordionBody>
      </Accordion>
    </div>
  );
}