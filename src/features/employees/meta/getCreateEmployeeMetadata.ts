import type { Metadata } from 'next';

export async function getCreateEmployeeMetadata(): Promise<Metadata> {
    // ----------------------------------------------------------------------------------------------------
    // MARK: SEO Metadata
    // ----------------------------------------------------------------------------------------------------
    return {
        title: 'Create Employee',
        description: 'Create Employee',
        keywords: 'Create Employee',
        openGraph: {
            title: 'Create Employee',
            description: 'Create Employee',
            type: 'website',
            locale: 'en',
            siteName: 'Create Employee',
        },
    };
}
