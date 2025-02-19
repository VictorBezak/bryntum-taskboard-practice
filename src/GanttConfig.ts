import { StringHelper } from '@bryntum/gantt';
import { BryntumGantt, BryntumGanttProps } from '@bryntum/gantt-react';
// import { ColumnModel } from '@bryntum/gantt';

const prioTextMap = { 1 : 'High', 2 : 'Medium', 3 : 'Low' };

export const initGanttProps: (ganttRef: React.RefObject<BryntumGantt>) => BryntumGanttProps = (ganttRef) => {
    const project: BryntumGanttProps["project"] = {
        autoLoad: true,
        stm : {
            // NOTE, that this option does not enable the STM itself, this is done by the `undoredo` widget, defined in the toolbar
            // If you don't use `undoredo` widget in your app, you need to enable STM manually: `stm.enable()`,
            // otherwise, it won't be tracking changes in the data
            // It's usually best to enable STM after the initial data loading is completed.
            autoRecord : true
        },
        transport: {
            load: {
                url: 'data-wfp.json',
                params: {
                    startDate: new Date("jan 1 2019").toISOString(),
                    endDate: new Date("jan 31 2019").toISOString(),
                }
            },
        },
        onDataReady: () => {
            console.info("onDataReady");
        },
        taskStore: {
            fields : ['cost_code_id', 'label_id', 'job_title_name'],
            transformFlatData: true,
            transformLoadedData: (data) => {
                console.info("transformLoadedData:", data);
                return data;
            },
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
    const features: BryntumGanttProps = {
        tbar : [
            // 'Drag columns here to group',
            // { type : 'groupbar' },
            {
                type  : 'buttonGroup',
                items : [
                    {
                        type  : 'undoredo',
                        ref   : 'undoRedo',
                        items : {
                            transactionsCombo : null
                        }
                    } as any
                ]
            },
        ],
        treeGroupFeature: {
            hideGroupedColumns : true,
            // levels             : [
            //     'project_id'
            // ],
            parentRenderer({ field, value, column, record }) {
                // Do not html encode priority columns value, it uses custom markup
                if (column.field === 'priority') {
                    return `<div>${StringHelper.encodeHtml(column.text)}:</div> ${value}`;
                }
                // For generated group parent, prefix with the grouped column text
                return StringHelper.xss`<div>${column.text}: ${value}</div>`;
            }
        },
        columns : [
            {
                type       : 'name',
                flex       : 1,
                minWidth   : 300,
                htmlEncode : false,
                // renderer   : ({ value }) => StringHelper.xss`<div>${value}</div>`
                renderer   : (e) => {
                    console.info("renderer:", e);
                    let label = e.value;

                    if (e.record.getData("type") === "assignment") {
                        label = (ganttRef.current?.instance as any).resourceStore.getById(e.record.getData("resource_id")).getData("name");
                        debugger;
                    } else if (e.record.getData("type") === "request") {
                        label = "Request";
                    }
                    return StringHelper.xss`<div>${label}</div>`;
                },
            },
            // { field : 'cost', text : 'Cost', width : 150 },
            // {
            //     field    : 'priority',
            //     text     : 'Priority',
            //     width    : 120,
            //     type     : 'template',
            //     template : ({ value = '' }) => `<div class="b-prio b-prio-${StringHelper.encodeHtml(value)}">${prioTextMap[value] || ''}</div>`
            // },
            // { type : 'startdate' },
            // { type : 'duration', width : 150 }
        ]
    };

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
