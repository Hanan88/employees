import type { Metadata } from 'next';

import { getListEmployeesMetadata } from '@/features/employees/meta/getListEmployeesMetadata';
import ListEmployeesPage from '@/features/employees/pages/ListEmployeesPage';

export async function generateMetadata(): Promise<Metadata> {
    const metadata = await getListEmployeesMetadata();
    return metadata;
}

export default ListEmployeesPage;
