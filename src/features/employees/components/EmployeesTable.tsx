'use client';

import type { JSX } from 'react';
import { Employee } from '../types/Employee';

interface EmployeesTableProps {
    employees: Employee[];
}

export default function EmployeesTable({ employees }: EmployeesTableProps): JSX.Element {
    // ----------------------------------------------------------------------------------------------------
    // MARK: States & Constants
    // ----------------------------------------------------------------------------------------------------
    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    };

    // ----------------------------------------------------------------------------------------------------
    // MARK: Main Component UI
    // ----------------------------------------------------------------------------------------------------
    if (!employees || employees.length === 0) {
        return (
            <div className="text-center py-8 text-gray-500">
                <p>No employees found.</p>
            </div>
        );
    }

    return (
        <div className="overflow-x-auto shadow-md rounded-lg">
            <table className="min-w-full bg-white border border-gray-200">
                <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200">
                            ID
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200">
                            Name
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200">
                            Email
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200">
                            Phone
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200">
                            Address
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Created At
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {employees.map((employee) => (
                        <tr key={employee.id} className="hover:bg-gray-50 transition-colors duration-150">
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r border-gray-200">
                                #{employee.id}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border-r border-gray-200">
                                <div className="font-medium">{employee.name}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border-r border-gray-200">
                                <div className="text-blue-600 hover:text-blue-800">
                                    <a href={`mailto:${employee.email}`}>{employee.email}</a>
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border-r border-gray-200">
                                <div className="text-green-600 hover:text-green-800">
                                    <a href={`tel:${employee.phone}`}>{employee.phone}</a>
                                </div>
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-900 border-r border-gray-200">
                                <div className="max-w-xs truncate" title={employee.address}>
                                    {employee.address}
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {formatDate(employee.created_at)}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
