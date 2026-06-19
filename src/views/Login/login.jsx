import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useLogin } from "../../hooks/useLogin";

function Login() {
    
    const navigate = useNavigate();
    const location = useLocation();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const { login } = useLogin();

    const from = location.state?.from?.pathname || "/";

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            setError("Por favor ingresa correo y contraseña.");
            return;
        }

        const result = await login(email, password);

        if (result.success) {
            setError("");
            navigate(from, { replace: true });
        }
        else
        {
            alert("error");
        }
        
    };

    return (
        <div className="flex min-h-screen flex-col lg:flex-row">
            <section
                className="relative hidden lg:block lg:w-3/5 bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1400&auto=format&fit=crop')"
                }}
            >
                <div className="h-full w-full bg-[linear-gradient(180deg,rgba(22,49,58,0.12),rgba(22,49,58,0.5))]"></div>
                <div className="absolute bottom-10 left-10 max-w-lg rounded-[28px] border border-white/20 bg-white/10 p-8 text-white backdrop-blur-md">
                    <p className="text-xs font-extrabold uppercase tracking-[0.26em] text-white/80">Acceso editorial</p>
                    <h2 className="mt-3 font-serif text-5xl font-semibold leading-none">Una entrada cálida a tu biblioteca.</h2>
                    <p className="mt-4 text-sm leading-7 text-white/80">El acceso conserva el mismo lenguaje visual del catálogo: capas suaves, serif expresiva y acentos turquesa para las acciones clave.</p>
                </div>
            </section>
            <section className="flex flex-1 items-center justify-center p-6 sm:p-12">
                <div className="surface-panel w-full max-w-md p-6 sm:p-8">

                    <header className="mb-10 text-center">
                        <p className="section-kicker">Cuenta</p>
                        <h1 className="mb-2 mt-3 text-5xl font-serif font-semibold text-[var(--color-ink)]">
                            Relatos de Papel
                        </h1>
                        <p className="text-[var(--color-ink-muted)]">Inicia sesión en tu biblioteca digital</p>
                    </header>

                    <div className="mb-8 flex border-b border-[rgba(22,49,58,0.1)] text-sm font-medium">
                        <button className="border-b-2 border-[var(--color-primary)] pb-3 pr-4 font-bold text-[var(--color-ink)]">
                            Iniciar sesión
                        </button>
                        <button className="pb-3 pl-4 text-[var(--color-ink-muted)] transition hover:text-[var(--color-ink)]">
                            Crear cuenta
                        </button>
                    </div>

                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div>
                            <label className="mb-1 block text-sm font-medium text-[var(--color-ink)]">
                                Correo electrónico
                            </label>
                            <input
                                type="email"
                                placeholder="ejemplo@correo.com"
                                className="input-field"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div>
                            <label className="mb-1 block text-sm font-medium text-[var(--color-ink)]">
                                Contraseña
                            </label>
                            <input
                                type="password"
                                placeholder="********"
                                className="input-field"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            {error && (
                                <p className="mt-2 text-xs text-red-600">{error}</p>
                            )}
                            <div className="mt-2 text-right">
                                <span className="cursor-pointer text-xs text-[var(--color-ink-muted)] underline-offset-4 hover:text-[var(--color-ink)] hover:underline">
                                    ¿Olvidaste tu contraseña?
                                </span>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 py-2">
                            <input
                                type="checkbox"
                                id="remember"
                                className="h-4 w-4 accent-[var(--color-primary)]"
                            />
                            <label htmlFor="remember" className="select-none text-sm text-[var(--color-ink-muted)]">
                                Mantener sesión iniciada
                            </label>
                        </div>

                        <button className="btn-primary w-full active:scale-[0.98]">
                            Entrar
                        </button>
                    </form>

                    <div className="relative my-8 text-center">
                        <hr className="border-[rgba(22,49,58,0.1)]" />
                        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[var(--color-paper)] px-2 text-xs uppercase text-[var(--color-ink-muted)]">
                            o continuar con
                        </span>
                    </div>

                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                        <button className="flex items-center justify-center gap-2 rounded-2xl border border-[rgba(22,49,58,0.08)] bg-white/70 p-3 text-sm transition hover:bg-white hover:shadow-sm">
                            <img src="https://cdn-icons-png.flaticon.com/512/300/300221.png" alt="Google" className="h-4 w-4" />
                            Google
                        </button>
                        <button className="flex items-center justify-center gap-2 rounded-2xl border border-[rgba(22,49,58,0.08)] bg-white/70 p-3 text-sm transition hover:bg-white hover:shadow-sm">
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