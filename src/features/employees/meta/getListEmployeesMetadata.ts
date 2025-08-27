import type { Metadata } from 'next';

export async function getListEmployeesMetadata(): Promise<Metadata> {
    // ----------------------------------------------------------------------------------------------------
    // MARK: SEO Metadata
    // ----------------------------------------------------------------------------------------------------
    return {
        title: 'Employees',
        description: 'Employees',
        keywords: 'Employees',
        openGraph: {
            title: 'Employees',
            description: 'Employees',
            type: 'website',
            locale: 'en',
            siteName: 'Employees',
        },
    };
}
