'use client';

import type { JSX } from 'react';
import { useState, useEffect } from 'react';

import EmployeesTable from '../components/EmployeesTable';
import { Employee } from '../types/Employee';
import { employeeApi } from '../../../services/api';
import Link from 'next/link';

export default function ListEmployeesContainer(): JSX.Element {
    // ----------------------------------------------------------------------------------------------------
    // MARK: State Management
    // ----------------------------------------------------------------------------------------------------
    const [employees, setEmployees] = useState<Employee[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    // ----------------------------------------------------------------------------------------------------
    // MARK: Fetch Employees from API
    // ----------------------------------------------------------------------------------------------------
    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                setLoading(true);
                setError(null);
                const data = await employeeApi.getAllEmployees();
                console.log("data: ", data);
                setEmployees(data);
            } catch (err) {
                console.error('Failed to fetch employees:', err);
                setError('Failed to fetch employees');
            } finally {
                setLoading(false);
            }
        };

        fetchEmployees();
    }, []);

    // ----------------------------------------------------------------------------------------------------
    // MARK: Loading Component
    // ----------------------------------------------------------------------------------------------------
    const LoadingComponent = () => (
        <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            <span className="ml-3 text-gray-600">Loading Data...</span>
        </div>
    );

    // ----------------------------------------------------------------------------------------------------
    // MARK: Error Component
    // ----------------------------------------------------------------------------------------------------
    const ErrorComponent = () => (
        <div className="bg-red-50 border border-red-200 rounded-md p-4">
            <div className="flex">
                <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                </div>
                <div className="ml-3">
                    <h3 className="text-sm font-medium text-red-800">Error Loading Data</h3>
                    <div className="mt-2 text-sm text-red-700">
                        <p>{error}</p>
                    </div>
                    <div className="mt-4">
                        <button
                            onClick={() => window.location.reload()}
                            className="bg-red-100 hover:bg-red-200 text-red-800 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150"
                        >
                            Retry
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );

    // ----------------------------------------------------------------------------------------------------
    // MARK: Main Container UI
    // ----------------------------------------------------------------------------------------------------
    return (
        <div className="min-h-screen bg-white">
            <div className="container mx-auto px-4 py-8">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Employees Management</h1>
                </div>

                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl font-semibold text-gray-900">Employees List</h2>
                        <Link href="/employees/new" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors duration-150">
                            Add Employee
                        </Link>
                    </div>

                    {loading && <LoadingComponent />}
                    {error && <ErrorComponent />}
                    {!loading && !error && <EmployeesTable employees={employees} />}
                </div>
            </div>
        </div>
    );
}
