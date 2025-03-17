import type { Experience } from "../types";

export const EXPERIENCES: Experience[] = [
    {
        company: "Quaric Co., Ltd.",
        companyLogo: "/images/companies/quaric.png",
        positions: [
            {
                id: "30d3a9fb-021d-452a-9d27-83655369b4b9",
                title: "Software Engineer",
                year: "03.2024 - present",
                employmentType: "Part-time",
                icon: "code",
                description:
                    "In-house Project: [Quaric Website](https://quaric.com)\n- Integrated the [VNPAY-QR](https://vnpay.vn) payment gateway, enabling seamless and secure transactions.\n- Registered the e-commerce website with the Ministry of Industry and Trade ([online.gov.vn](http://online.gov.vn/Home/WebDetails/115855)) to ensure compliance with regulatory requirements.\n- Developed an online ordering feature, streamlining the purchasing process for users.\n\nIn-house Project: [ZaDark](https://zadark.com)\n- Create and maintain ZaDark.com using Docusaurus, incorporating Google AdSense for monetization and analytics.\n- Develop and maintain the ZaDark extension for Zalo Web across Chrome, Safari, Edge, and Firefox.\n",
                skills: [
                    "Next.js",
                    "Strapi",
                    "Auth0",
                    "VNPAY-QR",
                    "Docker",
                    "NGINX",
                    "Google Cloud",
                    "Docusaurus",
                    "Extension",
                    "UX/UI Design",
                    "UX Writing",
                    "Research",
                    "Project Management",
                ],
                expanded: true,
            },
            {
                id: "7586afb2-40e8-49c4-8983-2254c9446540",
                title: "Product Designer",
                year: "03.2024 - present",
                employmentType: "Part-time",
                icon: "design",
                description:
                    "- Designing UI/UX for Quaric Website, ensuring a seamless user experience and modern interface.\n- Developing the Design System to standardize the interface and optimize the design-to-development workflow.\n- Completed Quaric's brand design, including logo, identity system, and brand guidelines.",
                skills: ["UI/UX Design", "Design System", "Brand Design", "Figma"],
                expanded: true,
            },
            {
                id: "991692c4-7d02-4666-8d31-933c4831768d",
                title: "Founder / Director",
                year: "03.2024 - present",
                employmentType: "Part-time",
                description:
                    "- Lead and manage the company's strategy.\n- Oversee technical teams and product development.\n- Manage relationships with customers and partners.",
                skills: ["Business Ownership", "Business Law", "Business Tax"],
            },
        ],
        current: true,
    },
    {
        company: "Freelance",
        positions: [
            {
                id: "f0becfba-057d-40db-b252-739e1654faa1",
                title: "Web Developer",
                year: "2018-2020",
                employmentType: "Part-time",
                description:
                    "- Developed a website for order placement, order management, and tracking delivery progress on a map for drivers.\n- Developed an e-commerce website for a company specializing in bird's nest products.\n- Developed a map to display information about monitoring stations.\n- Designed and developed a Landing Page interface for WordPress, allowing clients to modify content according to their needs.",
                icon: "code",
                skills: [
                    "Laravel",
                    "React",
                    "Express.js",
                    "Socket.IO",
                    "MongoDB",
                    "Firebase",
                    "Docker",
                    "NGINX",
                ],
            },
            {
                id: "0eecdfcb-028d-41f4-93e9-1269ba7eff7e",
                title: "Graphic & UI/UX Designer",
                year: "2018-2019",
                employmentType: "Part-time",
                description:
                    "Designed logos, posters, advertising banners, and user interfaces.",
                icon: "design",
                skills: [
                    "Creativity",
                    "UI/UX Design",
                    "Graphic Design",
                    "Sketch",
                    "Adobe Photoshop",
                    "Adobe Illustrator",
                ],
            },
        ],
    },
    {
        company: "Education",
        positions: [
            {
                id: "c47f5903-88ae-4512-8a50-0b91b0cf99b6",
                title: "University of Science - VNUHCM",
                year: "08.2018 - present",
                icon: "education",
                description:
                    "- Currently studying for a Bachelor's degree in Information Systems.\n- Language Proficiency: B1 English Level (Intermediate).\n- Achieved several awards, including:\n  - Bronze Medal | 10th Design, Manufacturing, and Application Award 2022 (organized by Ho Chi Minh City Youth Union)\n  - Second Prize | Business Startup Competition 2019 (organized by UEL-VNUHCM)",
                skills: [
                    "C++",
                    "Java",
                    "Python",
                    "Data Structures",
                    "Algorithms",
                    "Advanced Databases",
                    "Systems Design",
                    "Distributed Systems",
                    "Software Engineering",
                    "Self-learning",
                    "Teamwork",
                    "Presentation",
                ],
            },
            {
                id: "70131ed8-36d9-4e54-8c78-eaed18240eca",
                title: "Ly Tu Trong High School for the Gifted - Can Tho City",
                year: "08.2015 - 06.2018",
                icon: "school",
                description:
                    "- Student of the Specialized Computer Science Program.\n- Granted direct admission to university due to achieving Third Prize at the national level.\n- [Achieved numerous awards](https://baocantho.com.vn/nguyen-chanh-dai-17-tuoi-va-19-giai-thuong-a97348.html) at city and national levels, including:\n  - [Third Prize](https://muctim.tuoitre.vn/cong-cu-ho-tro-viec-day-va-hoc-55107.htm) | National Science and Engineering Fair 2018 (ViSEF)\n  - First Prize | Science and Engineering Fair - Can Tho City 2018\n  - Creativity Award | Binh Duong Hackathon 2017\n  - Consolation Prize | National Youth and Children's Creativity Contest 2016\n  - [First Prize](https://www.youtube.com/watch?v=OYgugvjqU4A) | Youth and Children's Creativity Contest - Can Tho City 2016\n  - Third Prize | National Young Informatics Contest 2016\n- Achieved the title of Outstanding Student from Grade 10-12.\n- Developed a feature using Node.js and Pandoc to recognize multiple-choice questions from .docx files and upload them to an [online quiz platform](https://youtu.be/QjR99wdmTyo) I created.\n- Developed websites based on Laravel framework.\n- Built websites with PHP and MySQL, following the MVC architecture.",
                skills: [
                    "Algorithms",
                    "C++",
                    "PHP",
                    "MySQL",
                    "Laravel",
                    "Node.js",
                    "Pandoc",
                    "Self-learning",
                ],
            },
            {
                id: "36c4c6fb-02d0-48c0-8947-fda6e9a24af7",
                title: "Thuan Hung Secondary School",
                year: "08.2011 - 06.2015",
                icon: "school",
                description:
                    "- Achieved numerous awards at city and national levels:\n  - Consolation Prize | National Young Informatics Contest 2015\n  - Consolation Prize | National Young Informatics Contest 2014\n  - First Prize | Young Informatics Contest - Can Tho City 2014\n- Achieved the title of Outstanding Student from Grade 6-9.\n- Developed websites using the open-source NukeViet CMS.",
                skills: [
                    "Pascal",
                    "NukeViet",
                    "HTML",
                    "CSS",
                    "JavaScript",
                    "Self-learning",
                ],
            },
        ],
    },
];