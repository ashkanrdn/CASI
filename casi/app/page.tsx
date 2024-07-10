import Image from 'next/image';

export default function Home() {
    return (
        <main className='flex min-h-screen flex-col items-center justify-between p-24'>
            <h1 className='text-4xl font-bold'>Welcome to CASI</h1>

            <div className='flex flex-col items-center'>
                <Image src='/casi-logo.png' width={200} height={200} alt='CASI Logo' />
                <h2 className='text-2xl font-bold'>Computer Aided Social Interaction</h2>
            </div>

            <p className='text-lg text-center'>
                This is a project to help people with social interaction difficulties.
            </p>
        </main>
    );
}
