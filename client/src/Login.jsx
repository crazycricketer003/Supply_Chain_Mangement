import { useNavigate } from 'react-router-dom';

export default function LoginPage() {

    const navigate = new useNavigate();

    const nav_dashboard = () => {
        navigate("/dashboard");
    }

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="max-w-sm rounded-lg shadow-lg bg-white p-6 space-y-6 border border-gray-200 dark:border-gray-700">
                <div className="space-y-2 text-center">
                    <h1 className="text-3xl font-bold">Login</h1>
                    <p className="text-zinc-200 dark:text-zinc-700">
                        By logging in, you accept our{' '}
                        <a className="text-blue-500 hover:text-blue-700">
                            terms
                        </a>{' '}
                        and{' '}
                        <a className="text-blue-500 hover:text-blue-700">
                            privacy policy
                        </a>
                        .
                    </p>
                </div>
                <div className="space-y-4">
                    <div className="space-y-2">
                        <label
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            htmlFor="email"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            className="flex h-10 w-full border-zinc-200 dark:border-zinc-700 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            id="email"
                            placeholder="john.doe@domain.com"
                            required=""
                        />
                        <button onClick={() => { nav_dashboard(); }} className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full bg-gradient-to-tr text-white">
                            <div className="flex items-center justify-center">
                                <div className="flex items-center justify-center">
                                    Login
                                </div>
                            </div>
                        </button>
                    </div>
                    <div className="flex items-center space-x-2">
                        <hr className="flex-grow border-zinc-200 dark:border-zinc-700" />
                        <span className="text-zinc-200 dark:text-zinc-700 text-sm">OR</span>
                        <hr className="flex-grow border-zinc-200 dark:border-zinc-700" />
                    </div>
                    <button onClick={() => { nav_dashboard(); }} className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full bg-[#4285F4] text-white">
                        <div className="flex items-center justify-center">
                            <div className="flex items-center justify-center">
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="w-5 h-5 mr-2"
                                >
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <circle cx="12" cy="12" r="4"></circle>
                                    <line x1="21.17" x2="12" y1="8" y2="8"></line>
                                    <line x1="3.95" x2="8.54" y1="6.06" y2="14"></line>
                                    <line x1="10.88" x2="15.46" y1="21.94" y2="14"></line>
                                </svg>
                                Login with Google
                            </div>
                        </div>
                    </button>
                    <button onClick={() => { nav_dashboard(); }} className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full bg-black text-white">
                        <div className="flex items-center justify-center">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="w-5 h-5 mr-2"
                            >
                                <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"></path>
                                <path d="M10 2c1 .5 2 2 2 5"></path>
                            </svg>
                            Login with Apple
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
}
