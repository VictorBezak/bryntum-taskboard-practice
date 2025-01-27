import { BryntumGantt, BryntumGanttProps } from '@bryntum/gantt-react';
// import { ColumnModel } from '@bryntum/gantt';

export const initGanttProps: (ganttRef: React.RefObject<BryntumGantt>) => BryntumGanttProps = (ganttRef) => {
    const project: BryntumGanttProps["project"] = {
        autoLoad: true,
        loadUrl: 'data.json',
        onDataReady: () => {
            console.info("onDataReady");
        },
        taskStore: {
            onLoadStart: (e) => {
                console.info("onLoadStart:", e);
            },
            onLoad: (e) => {
            console.info("onLoad:", e);
            },
            onLoadChildrenStart: (e) => {
            console.info("onLoadChildrenStart:", e);
            },
            onLoadChildren: (e) => {
            console.info("onLoadChildren:", e);
            },
            onLoadDateRange: (e) => {
            console.info("onLoadDateRange:", e);
            },
        }
    };

    // Put everything with suffix of "Feature" in the features object for organization
    const features: BryntumGanttProps = {};

    // Put everything with prefix of "on" in the events object for organization
    const events: BryntumGanttProps = {
        // onTimeAxisChange: () => {
        //     console.info("onTimeAxisChange");
        // },
        // onDateRangeChange: () => {
        //     console.info("onDateRangeChange");
        // },
        // onDataChange: () => {
        //     console.info("onDataChange");
        // },
        // onScroll: () => {
        //     console.info("onScroll");
        // },
    };

    return {
        project,
        ...features,
        ...events,
        infiniteScroll: true,
    }
};
