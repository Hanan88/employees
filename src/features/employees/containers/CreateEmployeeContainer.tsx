'use client';

import type { JSX } from 'react';
import { useState } from 'react';
 import CreateEmployeeForm from '../components/CreateEmployeeForm';

export default function CreateEmployeeContainer(): JSX.Element {
    // ----------------------------------------------------------------------------------------------------
    // MARK: States & Constants
    // ----------------------------------------------------------------------------------------------------
    const [isLoading] = useState(false);

    // ----------------------------------------------------------------------------------------------------
    // MARK: Main Container UI
    // ----------------------------------------------------------------------------------------------------
    return (
        <div className="min-h-screen bg-white">
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-2xl mx-auto">
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">Create New Employee</h1>
                        <p className="text-gray-600">Add a new employee to your organization</p>
                    </div>

                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                        <CreateEmployeeForm
                            isLoading={isLoading}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
