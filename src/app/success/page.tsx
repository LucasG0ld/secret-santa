import Link from "next/link";

export default function Success() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-8">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-4 animate-bounce">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
            </div>

            <div className="space-y-4 max-w-lg">
                <h1 className="text-4xl font-bold text-gray-900">Tirage effectué !</h1>
                <p className="text-xl text-gray-600">
                    Les emails ont été envoyés avec succès à tous les participants.
                </p>
                <p className="text-gray-500 text-sm">
                    Si un participant ne reçoit pas son email, demandez-lui de vérifier ses spams.
                </p>
            </div>

            <div className="pt-8">
                <Link
                    href="/"
                    className="inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors"
                >
                    Retour à l'accueil
                </Link>
            </div>
        </div>
    );
}
