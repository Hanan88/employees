import type { Metadata } from 'next';

import { getCreateEmployeeMetadata } from '@/features/employees/meta/getCreateEmployeeMetadata';
import CreateEmployeePage from '@/features/employees/pages/CreateEmployeePage';

export async function generateMetadata(): Promise<Metadata> {
    const metadata = await getCreateEmployeeMetadata();
    return metadata;
}

export default CreateEmployeePage;
