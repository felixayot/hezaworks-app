/* eslint-disable */
// @ts-nocheck
// const { default: rJ, paginate, searchJobs } = await import("./api/realJobs.js");

export const paginate = (dataSet, page, perPage) => {
    const end = page * perPage;
    const start = end - perPage;

    return dataSet.slice(start, end);
}

export const searchJobs = (dataSet, queryString) => {
    let results = [];
    dataSet.map((job) => {
        if (job.title.includes(queryString)) {
            results.push(job);
        };
    })
    return results;
}

const RealJobs = [
    {
        title: "Software Developer",
        company: "Staffaro",
        location: "KE(Remote)",
        jobURL: "https://apply.workable.com/j/697585BEA5"
    },
    {
        title: "Senior Backend Engineer, Markets (Kenya)",
        company: "Tala",
        location: "Nairobi (Hybrid)",
        jobURL: "https://jobs.lever.co/tala/0dbed9f6-539b-43a2-b075-89559b64f648?lever-origin=applied&lever-source=xhiring"
    },
    {
        title: "Junior System Developer",
        company: "Volt Management Services Limited",
        location: "Nairobi, Nairobi County, Kenya",
        jobURL: "https://www.careers-page.com/volt-management-services-limited/job/QX8YV3W3/apply"
    },
    {
        title: "System Solutions Engineer",
        company: "Bosch",
        location: "Nairobi, Nairobi County, ke",
        jobURL: "https://jobs.smartrecruiters.com/BoschGroup/744000002792925-system-solutions-engineer"
    },
    {
        title: "QA Test Lead",
        company: "Deloitte",
        location: "Nairobi, Nairobi County, ke",
        jobURL: "https://jobs.smartrecruiters.com/Deloitte6/744000003540751-qa-test-lead"
    },
    {
        title: "Senior Cloud Engineer",
        company: "Deloitte",
        location: "Nairobi, Nairobi County, ke",
        jobURL: "https://jobs.smartrecruiters.com/Deloitte6/744000003540355-senior-cloud-engineer"
    },
    {
        title: "Junior Cloud Engineer",
        company: "Deloitte",
        location: "Nairobi, Nairobi County, ke",
        jobURL: "https://jobs.smartrecruiters.com/Deloitte6/744000003540925-junior-cloud-engineer"
    },
    {
        title: "Orma - Audio Data Creator",
        company: "Welocalize",
        location: "Nairobi, Kenya (Remote)",
        jobURL: "https://jobs.lever.co/welocalize/56f3e15e-63db-4442-8585-d0bb811f6f9b?lever-origin=applied&lever-source=xhiring"
    },
    {
        title: "Senior Android Engineer - KE",
        company: "Tala",
        location: "Nairobi(Hybrid)",
        jobURL: "https://jobs.lever.co/tala/675f7485-7ccd-4511-9ad6-988b58911022?lever-origin=applied&lever-source=xhiring"
    },
    {
        title: "Solution Engineer - API Integration Developer",
        company: "Deloitte",
        location: "Nairobi, Nairobi County, ke",
        jobURL: "https://jobs.smartrecruiters.com/Deloitte6/743999999388236-solution-engineer-api-integration-developer"
    },
    {
        title: "Data Scientist for Climate Services and Agronomy Decision Support",
        company: "International Institute of Tropical Agriculture(IITA)",
        location: "Nairobi, Nairobi County, Kenya",
        jobURL: "https://apply.workable.com/j/EEA852443F"
    },
    {
        title: "Monitoring and Evaluation Officer, Nurturing Futures (Nairobi, Kenya)",
        company: "Plan International",
        location: "Nairobi, Kenya",
        jobURL: "https://jobs.plan-international.org/job/Nairobi-Monitoring-and-Evaluation-Officer,-Nurturing-Futures/1096020801/"
    },
    {
        title: "Orma - Linguist",
        company: "Welocalize",
        location: "Nairobi, Kenya (Remote)",
        jobURL: "https://jobs.lever.co/welocalize/f7e63a32-caf9-492e-8e65-9ad05029bf29?lever-origin=applied&lever-source=xhiring"
    },
    {
        title: "HEALTH AND SAFETY SUPERVISOR - SUB CONTRATOR",
        company: "SGS",
        location: "Nairobi, Nairobi County, ke",
        jobURL: "https://jobs.smartrecruiters.com/SGS/743999989834894-health-and-safety-supervisor-sub-contrator"
    },
    {
        title: "Software Quality Engineer I (SQE I) (Johannesburg, ZA)",
        company: "Nedbank",
        location: "Johannesburg, ZA",
        jobURL: "https://jobs.nedbank.co.za/job/Johannesburg-Software-Quality-Engineer-I-(SQE-I)/1011585701/"
    },
    {
        title: "Crypto QA Automation Engineer (Cape town-Remote)",
        company: "Token Metrics",
        location: "Capetown (Remote)",
        jobURL: "https://jobs.lever.co/tokenmetrics/33e3b855-de72-4dc3-89c1-aff730497ab0/apply?lever-source=Job%20postings%20feed"
    },
    {
        title: "Software Engineer: Full Stack III (Payments, AWS,C#) (Stellenbosch OR Sandton)x2 (Sandton, GT, ZA)",
        company: "Capitec",
        location: "Sandton, GT, ZA",
        jobURL: "https://careers.capitecbank.co.za/job/Sandton-Software-Engineer-Full-Stack-III-(Payments,-AWS,C)-(Stellenbosch-OR-Sandton)x2-GT/1007054601/"
    },
    {
        title: "Mechanical Engineer",
        company: "Hire Resolve",
        location: "Cape Town, Western Cape, ZA",
        jobURL: "https://apply.workable.com/j/8F26EB8E02"
    },
    {
        title: "Full-Stack Engineer - NextGen (.NET/Vue)",
        company: "Deel",
        location: "Cape Town, South Africa (Remote)",
        jobURL: "https://jobs.ashbyhq.com/Deel/599a4f67-5c96-4057-86d8-f5f3fb6a4c03"
    },
    {
        title: "Assistant Resident Engineer",
        company: "Hire Resolve",
        location: "Durban, KwaZulu-Natal, ZA",
        jobURL: "https://apply.workable.com/j/FA6BDCF29D"
    },
    {
        title: "Engineer - Electrical",
        company: "AECOM",
        location: "Centurion, 263A WEST AVENUE, za",
        jobURL: "https://jobs.smartrecruiters.com/AECOM2/743999993684915-engineer-electrical"
    },
    {
        title: "Software Engineer",
        company: "The Rank Group",
        location: "Cape Town, WC, za",
        jobURL: "https://jobs.smartrecruiters.com/TheRankGroup/743999994912208-software-engineer"
    },
    {
        title: "Software Engineer (Python/Linux/Packaging)",
        company: "Canonical",
        location: "Home based - Americas, EMEA (Onsite)",
        jobURL: "https://boards.greenhouse.io/canonical/jobs/2413329"
    },
    {
        title: "Systems Integrations Software Engineer",
        company: "Canonical",
        location: "Home based - Americas, EMEA (Onsite)",
        jobURL: "https://boards.greenhouse.io/canonical/jobs/5692068"
    },
    {
        title: "Billing System Software Engineer",
        company: "Canonical",
        location: "Home based - Americas, EMEA (Onsite)",
        jobURL: "https://boards.greenhouse.io/canonical/jobs/5692063"
    },
    {
        title: "Software Engineer, Commercial Systems",
        company: "Canonical",
        location: "Home based - Americas, EMEA (Onsite)",
        jobURL: "https://boards.greenhouse.io/canonical/jobs/3719564"
    },
    {
        title: "Software Engineer - Micro/Private/Bare-Metal Cloud",
        company: "Canonical",
        location: "Home based - Americas, EMEA (Onsite)",
        jobURL: "https://boards.greenhouse.io/canonical/jobs/4023725"
    },
    {
        title: "Senior Software Engineer - MAAS",
        company: "Canonical",
        location: "Home based - Americas, EMEA (Onsite)",
        jobURL: "https://boards.greenhouse.io/canonical/jobs/3003389"
    },
    {
        title: "Staff Software Engineer - MetaMask",
        company: "Consensys",
        location: "EMEA - Remote, UNITED STATES - Remote (Remote)",
        jobURL: "https://consensys.io/open-roles/5928007?gh_jid=5928007"
    },
    {
        title: "Senior Software Engineer - MetaMask",
        company: "Consensys",
        location: "EMEA - Remote, UNITED STATES - Remote (Remote)",
        jobURL: "https://consensys.io/open-roles/5923720?gh_jid=5923720"
    },
    {
        title: "Software Engineer (DeFi) - SMG",
        company: "Consensys",
        location: "CANADA - Remote, EMEA - Remote, LATAM - Remote, UNITED STATES - Remote (Remote)",
        jobURL: "https://consensys.io/open-roles/6073531?gh_jid=6073531"
    },
    {
        title: "Senior Software Engineer - Dashboard",
        company: "Fivetran",
        location: "Novi Sad, South Bačka, Serbia, EMEA (Onsite)",
        jobURL: "https://www.fivetran.com/careers/job?gh_jid=6047003003"
    },
    {
        title: "Senior Software Engineer (Database Internals)",
        company: "EDB",
        location: "EMEA(Onsite)",
        jobURL: "https://www.enterprisedb.com/careers/job-openings?gh_jid=6010966003"
    },
]

export default RealJobs;
