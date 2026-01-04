import type { Experience } from "../types";

export const EXPERIENCES: Experience[] = [
  {
    company: "TX Meta",
    positions: [
      {
        title: "Senior Backend Developer",
        year: "06.2024 - Present",
        description: `
- Architected a secure, multichain wallet infrastructure supporting 10+ digital assets with dynamic token management.
- Built a high-performance payment gateway integrating stablecoins (USDT/USDC) and mobile money for cross-border remittances.
- Developed a high-throughput transaction module for both on-chain and off-chain operations, ensuring low-latency processing.
- Mentored a team of developers and implemented rigorous CI/CD practices, significantly improving deployment reliability.
        `,
        skills: [
          "TypeScript",
          "Node.js",
          "Zustand",
          "BullMQ",
          "Redis",
          "PostgreSQL",
          "Docker",
          "AWS",
        ]
      },
    ],
  },
  {
    company: "C2C Advisory Services",
    positions: [
      {
        title: "Lead Platform Engineer (Contract)",
        year: "06.2024 - 02.2025",
        description: `
- Designed Java-based microservices for a large-scale financial platform serving 2M+ users, managing complex payment logic.
- Optimized transaction processing speed (TPS) by 40% through Kafka-based queueing and M-Pesa integration.
- Improved system performance by 35% using strategic database indexing and Redis-based caching layers.
- Managed containerized infrastructure on Kubernetes across GCP and Bitbucket pipelines.
        `,
        skills: [
          "Java",
          "Spring Boot",
          "Kafka",
          "Kubernetes",
          "GCP",
          "Redis",
          "PostgreSQL",
          "MongoDB",
        ],
      },
    ],
  },
  {
    company: "Africa Blockchain Centre",
    positions: [
      {
        title: "Senior Backend & Blockchain Engineer",
        year: "01.2022 - 05.2024",
        description: `
- Developed HIPAA-compliant smart contracts on Cardano for secure medical data sharing on the AfyaRekod platform.
- Led the technical delivery of TraceLedger, a blockchain-based supply chain solution for coffee bean transparency.
- Built robust REST APIs bridging Cardano (Plutus) smart contracts with traditional off-chain business applications.
- Guided an agile team of five developers, reducing delivery timelines by 30% through improved code review processes.
        `,
        skills: [
          "Node.js",
          "Cardano",
          "Aiken",
          "MeshJS",
          "Solidity",
          "PostgreSQL",
          "Docker",
        ],
      },
    ],
  },
  {
    company: "BandaHealth",
    positions: [
      {
        title: "Software Developer",
        year: "08.2017 - 12.2021",
        description: `
- Scaled the BandaGo mobile health application middleware, reaching a 50% reduction in response times after migrating from Java to Go.
- Optimized API performance by 30% through advanced data caching strategies for low-resource environments.
- Designed and maintained secure REST APIs for sensitive patient data management, ensuring strict healthcare privacy standards.
        `,
        skills: [
          "Go",
          "Java",
          "React",
          "Spring Boot",
          "PostgreSQL",
          "ERP Systems",
        ],
      },
    ],
  },
  {
    company: "JKUAT University",
    positions: [
      {
        title: "IT Support Specialist",
        year: "01.2011 - 07.2017",
        description: `
- Spearheaded the transition from manual to digital workflows by developing a web-based research management system.
- Significantly increased research submission rates by providing a user-friendly digital proposal submission platform.
        `,
        skills: [
          "Web Development",
          "Database Management",
          "IT Support",
          "System Administration",
        ],
      },
    ],
  },
];
