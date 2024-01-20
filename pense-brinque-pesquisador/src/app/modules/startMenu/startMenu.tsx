'use client'

import { BarChartLineFill, ClipboardDataFill } from 'react-bootstrap-icons';
import { Card, CardBody, CardText, CardTitle } from "react-bootstrap";
import { Locators } from '@/app/constants/locator';
import { useCallback } from 'react';

import './startMenu.css'

export type StartMenuProps = {
    userRole: string;
};

export default function StartMenu(props: StartMenuProps) {
    const handleDashboardCardClick = useCallback(() => console.log('go to dashboard page.'), []);
    const handleReportCardClick = useCallback(() => console.log('go to report page.'), []);

    return (
        <div className='start-menu-container'>
                <Card onClick={handleDashboardCardClick}>
                    <CardBody id='start-menu-dashboard-card'>
                        <CardTitle id='start-menu-dashboard-title'><BarChartLineFill /><span>{Locators.StartMenu_DashboardTitle}</span></CardTitle>
                        <CardText id='start-menu-dashboard-description'>{Locators.StartMenu_DashboardDescription}</CardText>
                    </CardBody>
                </Card>
                <Card onClick={handleReportCardClick}>
                    <CardBody id='start-menu-report-card'>
                        <CardTitle id='start-menu-report-title'><ClipboardDataFill /><span>{Locators.StartMenu_ReportTitle}</span></CardTitle>
                        <CardText id='start-menu-report-description'>{Locators.StartMenu_ReportDescription}</CardText>
                    </CardBody>
                </Card>
        </div>
    );
}