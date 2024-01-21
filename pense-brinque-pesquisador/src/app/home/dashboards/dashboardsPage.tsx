"use client";
import "./dashboardsPage.css";
import { BarChart } from "@/app/components/Charts/BarChart";
import { Accordion, AccordionBody, AccordionHeader } from "react-bootstrap";
import { DashboardPageProps } from "./dashboards.type";

export const DashboardHref = "home/dashboards";

export default function DashboardPage({ dashboardCharts }: DashboardPageProps) {
  return (
    <Accordion>
      <AccordionHeader>{dashboardCharts[0].headerTitle}</AccordionHeader>
      <AccordionBody>
        <BarChart {...dashboardCharts[0].chartData} />
      </AccordionBody>
    </Accordion>
  );
}
