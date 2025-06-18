export const projectsData = [
    {
        id: 3,
        name: 'ClickHouse Metrics Extractor with Airflow & Docker',
        description: 'Developed an automated system to extract internal metrics from ClickHouse using Airflow and Python. Scheduled hourly jobs to query the `system.metrics` table and save outputs to daily CSV files. Leveraged Docker for full containerization and orchestration. Focused on learning task scheduling, execution context, and real-time metric monitoring in a micro-project setup.',
        tools: ['Python', 'Airflow', 'Docker', 'ClickHouse', 'clickhouse-connect'],
        role: 'Internship Project | Built for Automation & Monitoring Practice',
        code: 'https://github.com/mohhddhassan/clickhouse-metrics-extractor', // Replace with your actual repo URL
        demo: '', // Optional: Add a link if you visualize the metrics later
    },
    {
        id: 2,
        name: 'COVID-19 Data Pipeline with Airflow, Docker & PostgreSQL',
        description: 'Built a complete data pipeline from scratch to fetch daily COVID-19 stats from a public API and store them in PostgreSQL using Airflow. The setup is fully containerized with Docker and includes modular components like custom scripts, DAGs, and logs. Designed to understand real-world pipeline scheduling, task retries, and logging. Emphasized hands-on learning with a structured folder layout and future scalability plans like adding Streamlit or ClickHouse.',
        tools: ['Python', 'Airflow', 'Docker', 'PostgreSQL', 'Requests'],
        role: 'Internship Project | Learning Data Pipeline Architecture',
        code: 'https://github.com/mohhddhassan/covid-data-pipeline',
        demo: '',
    },
    {
        id: 3,
        name: 'TrendLite - Live Retail Insights with ClickHouse',
        description: 'Designed and deployed a real-time sales dashboard to monitor retail performance and KPIs. Enabled live insights with dynamic date filtering and backend query optimization. Delivered interactive visuals for revenue trends, top products, and category-wise breakdowns. Enhanced user experience with clean layout, responsive updates, and readable chart labels.',
        tools: ['Python', 'Streamlit', 'ClickHouse', 'Altair', 'Pandas'],
        role: 'Internship Project | Built for ETL Exploration',
        code: 'https://github.com/mohhddhassan/TrendLite',
        demo: '',
    },
    {
        id: 4,
        name: 'AutoTrend - Demand Prediction System',
        description: 'Developed a system using AutoML for end-to-end demand prediction, including preprocessing, EDA, model training, and evaluation. Enabled users to upload datasets, visualize EDA, select target columns, and view top 5 model results. Built ensemble model from top models for final predictions and performance comparison.',
        tools: ['Python', 'Streamlit', 'Scikit-learn', 'Pandas', 'YData Profiling'],
        role: 'Capstone Project | Team of 2',
        code: 'https://github.com/mohhddhassan/Auto_Trend',
        demo: '',
    },
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
// },