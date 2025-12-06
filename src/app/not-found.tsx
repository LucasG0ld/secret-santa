import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 text-center">
            <div className="space-y-6 max-w-md">
                <div className="text-9xl font-bold text-purple-200">404</div>
                <h1 className="text-3xl font-bold text-gray-900">Oups ! Cette page s'est perdue dans la hotte du Père Noël.</h1>
                <p className="text-gray-600">
                    Il semblerait que le lutin en charge de cette page ait fait une petite sieste.
                </p>
                <div className="pt-6">
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors"
                    >
                        Retourner à l'accueil
                    </Link>
                </div>
            </div>
        </div>
    );
}
