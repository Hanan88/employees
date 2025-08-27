'use client';

import type { JSX } from 'react';

import EmployeesTable from '../components/EmployeesTable';
import { Employee } from '../types/Employee';
import Link from 'next/link';

export default function ListEmployeesContainer(): JSX.Element {
    // ----------------------------------------------------------------------------------------------------
    // MARK: Sample Data (Replace with actual API call)
    // ----------------------------------------------------------------------------------------------------
    const sampleEmployees: Employee[] = [
        {
            id: 1,
            name: 'John Doe',
            email: 'john.doe@company.com',
            phone: '+1 (555) 123-4567',
            address: '123 Main Street, New York, NY 10001',
            created_at: '2024-01-15T10:30:00Z'
        },
        {
            id: 2,
            name: 'Jane Smith',
            email: 'jane.smith@company.com',
            phone: '+1 (555) 987-6543',
            address: '456 Oak Avenue, Los Angeles, CA 90210',
            created_at: '2024-01-20T14:45:00Z'
        },
        {
            id: 3,
            name: 'Mike Johnson',
            email: 'mike.johnson@company.com',
            phone: '+1 (555) 456-7890',
            address: '789 Pine Road, Chicago, IL 60601',
            created_at: '2024-02-01T09:15:00Z'
        }
    ];

    // ----------------------------------------------------------------------------------------------------
    // MARK: Main Container UI
    // ----------------------------------------------------------------------------------------------------
    return (
        <div className="min-h-screen bg-white">
            <div className="container mx-auto px-4 py-8">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Employee Management</h1>
                    <p className="text-gray-600">View and manage your company employees</p>
                </div>
                
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl font-semibold text-gray-900">Employees List</h2>
                        <Link href="/employees/new" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors duration-150">
                            Add Employee
                        </Link>
                    </div>
                    
                    <EmployeesTable employees={sampleEmployees} />
                </div>
            </div>
        </div>
    );
}
