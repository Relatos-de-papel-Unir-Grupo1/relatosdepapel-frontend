function Login() {
    return (
        <div className="flex min-h-screen flex-col lg:flex-row">
            <section
                className="hidden lg:block lg:w-3/5 bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1400&auto=format&fit=crop')"
                }}
            >
                <div className="h-full w-full bg-black/10"></div>
            </section>
            <section className="flex flex-1 items-center justify-center bg-gray-50 p-6 sm:p-12">
                <div className="w-full max-w-md">

                    <header className="mb-10 text-center">
                        <h1 className="mb-2 text-4xl font-serif font-bold text-gray-900">
                            Relatos de Papel
                        </h1>
                        <p className="text-gray-500">Inicia sesión en tu biblioteca digital</p>
                    </header>

                    {/* Tabs simples */}
                    <div className="mb-8 flex border-b border-gray-200 text-sm font-medium">
                        <button className="border-b-2 border-black pb-3 pr-4 font-bold">
                            Iniciar sesión
                        </button>
                        <button className="pb-3 pl-4 text-gray-400 hover:text-black transition">
                            Crear cuenta
                        </button>
                    </div>

                    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                        <div>
                            <label className="mb-1 block text-sm font-medium text-gray-700">
                                Correo electrónico
                            </label>
                            <input
                                type="email"
                                placeholder="ejemplo@correo.com"
                                className="w-full border border-gray-300 p-3 outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition"
                            />
                        </div>

                        <div>
                            <label className="mb-1 block text-sm font-medium text-gray-700">
                                Contraseña
                            </label>
                            <input
                                type="password"
                                placeholder="********"
                                className="w-full border border-gray-300 p-3 outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition"
                            />
                            <div className="mt-2 text-right">
                <span className="cursor-pointer text-xs text-gray-400 hover:text-black underline-offset-4 hover:underline">
                  ¿Olvidaste tu contraseña?
                </span>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 py-2">
                            <input
                                type="checkbox"
                                id="remember"
                                className="h-4 w-4 accent-black"
                            />
                            <label htmlFor="remember" className="text-sm text-gray-600 select-none">
                                Mantener sesión iniciada
                            </label>
                        </div>

                        <button className="w-full bg-black p-3 text-white font-semibold hover:bg-gray-800 transition-colors shadow-lg active:scale-[0.98]">
                            Entrar
                        </button>
                    </form>

                    {/* Divisor con texto */}
                    <div className="relative my-8 text-center">
                        <hr className="border-gray-200" />
                        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-50 px-2 text-xs uppercase text-gray-400">
              o continuar con
            </span>
                    </div>

                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                        <button className="flex items-center justify-center gap-2 border border-gray-300 p-3 text-sm hover:bg-white hover:shadow-sm transition">
                            <img src="https://cdn-icons-png.flaticon.com/512/300/300221.png" alt="Google" className="h-4 w-4" />
                            Google
                        </button>
                        <button className="flex items-center justify-center gap-2 border border-gray-300 p-3 text-sm hover:bg-white hover:shadow-sm transition">
                            <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="FB" className="h-4 w-4" />
                            Facebook
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Login;