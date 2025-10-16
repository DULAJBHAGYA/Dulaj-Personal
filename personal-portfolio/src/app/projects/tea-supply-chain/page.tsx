'use client';

import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { IoIosArrowForward } from "react-icons/io";

export default function TeaSupplyChain() {
  const pageTitle = 'Tea Supply Chain | Dulaj Personal';

  return (
    <main className="min-h-screen bg-white">
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content="LeafLink - A blockchain-based supply chain solution specifically designed for the tea industry. It provides end-to-end tracking of tea batches from farm to buyer with immutable records, integrated bidding systems, and real-time analytics." />
      </Head>
      <Navbar />
      
      <section className="py-20 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link 
              href="/#projects" 
              className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200 mb-6 mt-4"
            >
              <IoIosArrowForward className="transform rotate-180 mr-2" />
              Back to Projects
            </Link>
            
            <div className="flex flex-col gap-8">
              {/* Project Content */}
              <div className="bg-white rounded-3xl p-8">
                <div className="mb-6">
                  <span className="text-lg font-semibold text-gray-500">Blockchain Project</span>
                  <h1 className="text-3xl font-bold text-gray-900 mt-2">LeafLink - Tea Supply Chain Solution</h1>
                </div>
                
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  LeafLink is a blockchain-based supply chain solution specifically designed for the tea industry. It provides end-to-end tracking of tea batches from farm to buyer with immutable records, integrated bidding systems, and real-time analytics. The system uses a hybrid consensus mechanism combining PBFT (Practical Byzantine Fault Tolerance) for critical transactions and Raft for routine operations.
                </p>
                
                <div className="space-y-6">
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Project Overview</h3>
                    <p className="text-gray-600 leading-relaxed">
                      LeafLink addresses the challenges in the traditional tea supply chain by providing transparency, security, and efficiency through blockchain technology. The system enables farmers, buyers, and transporters to interact in a trustless environment with immutable records of all transactions. By leveraging a hybrid consensus mechanism, the platform optimizes for both performance and security, routing critical operations through PBFT for Byzantine fault tolerance and routine operations through Raft for higher throughput.
                    </p>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Architecture</h3>
                    <p className="text-gray-600 leading-relaxed">
                      The system follows a multi-tier architecture with a frontend layer featuring role-based dashboards for farmers, buyers, and transporters. The backend API layer is built with Express.js and provides RESTful endpoints with Redis caching for improved performance. The core of the system is the Hyperledger Fabric network with a hybrid PBFT + Raft consensus mechanism. The storage layer uses LevelDB (default) or CouchDB for ledger storage. The network topology consists of one Orderer Organization using Raft consensus for ordering transactions and three Peer Organizations representing stakeholders: Farmer Organization (Org1), Transporter Organization (Org2), and Buyer Organization (Org3), each with their own Certificate Authorities for identity management.
                    </p>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Technology Stack</h3>
                    <p className="text-gray-600 leading-relaxed">
                      The backend technologies include Node.js/Express.js for the REST API server, Redis for caching, Hyperledger Fabric as the permissioned blockchain platform, Docker for containerization, and shell scripts for network management and automation. The frontend utilizes Next.js as the React-based framework for server-side rendering and client-side routing, React for component-based UI development, TypeScript for type-safe JavaScript development, and Tailwind CSS as the utility-first CSS framework. The blockchain layer is built on Hyperledger Fabric v2.x with JavaScript smart contracts, implementing the hybrid PBFT/Raft consensus mechanisms and supporting both LevelDB and CouchDB as state database options.
                    </p>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Hybrid Consensus Mechanism</h3>
                    <p className="text-gray-600 leading-relaxed">
                      The hybrid consensus approach optimizes for both performance and security. PBFT is used for critical transactions requiring Byzantine fault tolerance (supporting up to (n-1)/3 faulty nodes), while Raft handles routine operations that prioritize performance (higher throughput, lower latency). Critical operations routed to PBFT include awarding tea batches, confirming delivery, deleting tea batches, receiving by buyers, and user registrations. Routine operations routed to Raft encompass creating tea batches, placing bids, querying data, assigning transporters, and shipping operations. This approach delivers approximately 1000 TPS with less than 1s latency for Raft transactions and approximately 500 TPS with less than 2s latency for PBFT transactions, resulting in an overall 60% throughput increase compared to pure PBFT.
                    </p>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Key Features</h3>
                    <p className="text-gray-600 leading-relaxed">
                      The system provides comprehensive supply chain tracking with complete tea batch tracking from farm to buyer and immutable records stored on the blockchain with ownership transfer history. Role-based access ensures dedicated workflows for farmers, buyers, and transporters with organization-specific smart contracts and granular permission controls. An integrated bidding system offers an automated auction system for tea batch sales with bidding deadline management and transparent award processes. Real-time analytics provide supply chain visibility and reporting, performance metrics dashboards, and cache hit/miss ratios. Enterprise security features include TLS encryption for all communications, X.509 identity certificates, Byzantine fault tolerance for critical transactions, and cryptographic hashing for transaction verification.
                    </p>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Implementation Details</h3>
                    <p className="text-gray-600 leading-relaxed">
                      The backend provides RESTful endpoints for all supply chain operations including user management (registration for all roles), tea batch operations (create, query, delete), bidding and auction functionality, and logistics coordination (assignment, shipping, confirmation). The Redis caching strategy significantly improves performance with an 85-95% cache hit ratio for read operations, less than 10ms response time for cached queries, 90% reduction in blockchain queries, and intelligent cache invalidation on state changes. The data model tracks several key entities including Tea Batches with variety, quantity, quality score, fertilizer type, and weather conditions; Users as farmers, buyers, and transporters with role-specific attributes; Bids as price offers with timestamps and bidder information; and Logistics with transporter assignments and delivery confirmations.
                    </p>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Deployment Architecture</h3>
                    <p className="text-gray-600 leading-relaxed">
                      The development environment requires Node.js greater than or equal to 18.x, Docker greater than or equal to 20.x, Docker Compose greater than or equal to 2.x, Redis greater than or equal to 7.x, and Hyperledger Fabric 2.4+. Production considerations include Docker container orchestration, Redis cluster deployment, TLS certificate management, and performance monitoring and logging. The system has been designed with scalability in mind, supporting multiple organizations and handling high transaction volumes through its hybrid consensus mechanism.
                    </p>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Performance Optimization</h3>
                    <p className="text-gray-600 leading-relaxed">
                      The system implements several performance optimization techniques including batch operations for grouping related transactions, cache warming for pre-populating frequently accessed data, connection pooling for optimizing Redis connections, query optimization using specific queries versus broad scans, and hybrid routing with automatic transaction classification. These optimizations result in significant performance improvements while maintaining the security guarantees of the blockchain.
                    </p>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Monitoring and Analytics</h3>
                    <p className="text-gray-600 leading-relaxed">
                      The system provides comprehensive monitoring capabilities including transaction throughput by consensus type, block creation times and sizes, peer performance and availability, cache hit/miss ratios, and business metrics such as batch creation rates and bidding activity. This enables administrators to monitor system health and performance in real-time.
                    </p>
                  </div>
                  
                  <div className="mt-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Technologies Used</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">Frontend</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <span className="text-blue-500 mr-2 mt-1">•</span>
                            <span className="text-gray-600">Next.js - React-based framework for SSR and client-side routing</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-500 mr-2 mt-1">•</span>
                            <span className="text-gray-600">React - Component-based UI library</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-500 mr-2 mt-1">•</span>
                            <span className="text-gray-600">TypeScript - Type-safe JavaScript development</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-500 mr-2 mt-1">•</span>
                            <span className="text-gray-600">Tailwind CSS - Utility-first CSS framework</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">Backend {"&"} Blockchain</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <span className="text-blue-500 mr-2 mt-1">•</span>
                            <span className="text-gray-600">Node.js/Express.js - REST API server</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-500 mr-2 mt-1">•</span>
                            <span className="text-gray-600">Redis - Caching layer for improved performance</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-500 mr-2 mt-1">•</span>
                            <span className="text-gray-600">Hyperledger Fabric v2.x - Enterprise blockchain platform</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-500 mr-2 mt-1">•</span>
                            <span className="text-gray-600">Docker - Containerization for network deployment</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-500 mr-2 mt-1">•</span>
                            <span className="text-gray-600">Shell Scripts - Network management and automation</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4 mt-8">
                  {/* <button 
                    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
                    onClick={() => window.open('https://github.com', '_blank')}
                  >
                    View Live Project
                  </button> */}
                  <button 
                    className="bg-white border-2 border-[#7697A0] hover:bg-gray-50 text-[#7697A0] font-semibold py-3 px-6 rounded-2xl transition-all duration-300 transform hover:scale-105 flex items-center"
                    onClick={() => window.open('https://github.com', '_blank')}
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                    GitHub Repo
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}